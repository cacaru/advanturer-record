import { IUnitData, JsonUnitData } from "../../types/unitInfo";
import  rawData from "../../data/unitData.json"
import { useUnitDataStore } from "../../store/unitData.store";
import { RarityType, RarityKey } from "../../types/rarityType.type";
import { RarityTypeLabel } from "../../domain/rarityType.mapper";
import { AttackType, AttackTypeKey } from "../../types/attckType.type";
import { AttackTypeLabel } from "../../domain/attckType.mapper";
import { ClassType, ClassKey} from "../../types/class.type";
import { ClassTypeLabel } from "../../domain/class.mapper";
import { UnitStats } from "../../types/stats.type";

export function loadUnitDefaultData() {
    const unitTypeConvert: IUnitData[] = rawData.map((unit) => convertUnitData(unit));
    // convert 된 유닛은 id 기준으로 정렬해야함
    unitTypeConvert.sort((a,b) => a.id - b.id);
    // 이 유닛 데이터도 id로 접근 가능하도록 변경해야하네요
    const dataProcess: Record<number, IUnitData> = {};
    unitTypeConvert.map((u) => {
        dataProcess[u.id] = u;
    })

    useUnitDataStore.getState().setData(dataProcess);
}


function convertUnitData(json: JsonUnitData): IUnitData {
    return{
        id: json.id,
        name: json.name,
        rarity: rarityTypeChecker(json.rarity),
        class: classTypeChecker(json.class),
        stats: convertUnitStat(json.hp, json.attack, json.defense, json.range, json.attackSpeed, json.moveSpeed, json.criticalChance, json.criticalDamage),
        attackType: attackTypeChecker(json.attackType),
        synergy: convertStringToNumArray(json.synergy),
        equipAccessories: convertStringToNumArray(json.equipAccessories),
        haveSkill: convertStringToNumArray(json.haveSkill),
        imgStr: json.imgStr
    };
}

// 등급 값 정상 여부 체크
function isRarityType(str: string): str is RarityKey {
    return str in RarityTypeLabel;
}
function rarityTypeChecker(str: string) {
    // 정해진 값이 안들어왔을 때 기본값으로 사용할 것
    if(!isRarityType(str)){
        console.warn(`"등급"에서 읽을 수 없는 값 ${str}가 입력됨`);
        return RarityType._;
    }
    return RarityTypeLabel[str];
}


// 직업 값 정상 여부 체크
function isClassType(str: string): str is ClassKey {
    return str in ClassTypeLabel;
}
function classTypeChecker(str: string) {
    if(!isClassType(str)){
        console.warn(`"직업"에서 읽을 수 없는 값 ${str}이(가) 입력됨`);
        return ClassType._;
    }
    return ClassTypeLabel[str];
}

// 공격타입 정상 여부 체크
function isAttackType(str: string): str is AttackTypeKey {
    return str in AttackTypeLabel;
}
function attackTypeChecker(str: string) {
    if(!isAttackType(str)){
        console.warn(`"공격 형식"에서 읽을 수 없는 값 ${str}이(가) 입력됨`);
        return AttackType._;
    }
    return AttackTypeLabel[str];
}

// 스탯 변환
function convertUnitStat(
    health: number,
    attack: number, 
    defense: number, 
    range: number,
    attackSpeed: number,
    moveSpeed: number,
    criticalChance: number,
    criticalDamage: number
):UnitStats {
    return {
        health,
        defense,
        attack,
        range,
        moveSpeed,
        attackSpeed,
        criticalChance,
        criticalDamage
    };
}

// 시너지 어레이화
// 소지 스킬 어레이화
function convertStringToNumArray(str: string) {
    // string 분해해서 numberarray화
    const stra = str.split(",");
    const result: number[] = [];
    stra.forEach((v) => {
        result.push(Number.parseInt(v));
    })
    return result;
}
