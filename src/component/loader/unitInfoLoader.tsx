import { IUnitData, JsonUnitData } from "../../types/unitInfo";
import  rawData from "../../data/unitData.json"
import { useUnitDataStore } from "../../store/unitData.store";
import { RarityType, RarityKey } from "../../types/rarityType.type";
import { RarityTypeLabel } from "../../domain/rarityType.mapper";
import { AttackType, AttackTypeKey } from "../../types/attckType.type";
import { AttackTypeLabel } from "../../domain/attckType.mapper";
import { ClassType, ClassKey} from "../../types/class.type";
import { ClassTypeLabel } from "../../domain/class.mapper";
import { TargetType, TargetTypeKey } from "../../types/targetType.type";
import { TargetTypeLabel } from "../../domain/targetType.mapper";

export async function loadUnitDefaultData() {
    const unitTypeConvert: IUnitData[] = rawData.unit.map((unit) => convertUnitData(unit));
    useUnitDataStore.getState().setData(unitTypeConvert);
}

function convertUnitData(json: JsonUnitData) {
    return{
        id: json.id,
        name: json.name,
        rarity: rarityTypeChecker(json.rarity),
        class: classTypeChecker(json.class),
        stats: json.stats,
        equip: json.equip,
        attackType: attackTypeChecker(json.attackType),
        targetType: targetTypeChecker(json.targetType),
        synergy: json.synergy,
        combineMaterial: json.combineMaterial,
        combineResult: json.combineResult,
        isSummoned: json.isSummoned
    }
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

// 타겟 선정 타입 정상 여부 체크
function isTargetType(str: string): str is TargetTypeKey {
    return str in TargetTypeLabel;
}
function targetTypeChecker(str: string) {
    if(!isTargetType(str)){
        console.warn(`"적 타격 범위"에서 읽을 수 없는 값 ${str}이(가) 입력됨`);
        return TargetType._;
    }
    return TargetTypeLabel[str];
}