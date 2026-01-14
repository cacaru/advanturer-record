import { AttackType } from "./attckType.type";
import { ClassType } from "./class.type";
import { RarityType } from "./rarityType.type";
import { UnitStats } from "./stats.type";


export interface IUnitData {
    id: number,
    name: string,
    rarity: RarityType,
    class: ClassType,
    stats: UnitStats,
    attackType: AttackType,
    synergy: Array<string>
    equipAccessories: Array<number>
    haveSkill: Array<number>
}

export interface JsonUnitData {
    id: number,
    name: string,
    rarity: string,
    class: string,
    attack: number,
    defense: number,
    hp: number,
    attackSpeed: number,
    moveSpeed: number,
    range: number,
    criticalChance: number,
    criticalDamage: number,
    attackType: string,
    synergy: string,
    equipAccessories: string,
    haveSkill: string
}

// 업그레이드 변수
// 업그레이드 시 올라갈 값들
// 1강마다 몇씩 올라갈지 정해야 할 듯

// 대응 이미지
// 대응 초상화
// 대응 모델
// 대응 애니메이션

// 장비는 전투중에만 임시로 장착하고 영구적으로 장착할 추가 장비를 장비하는게 좋겠네
// 그럼 장비 슬롯은 2개
// 장신구와 보조무기 만 
// 무기 방어구 2개의 항목을 인게임 안에서 획득 or 제작하도록 변경

// 스킬 목록

// 시너지 대응 구조체
// 조합식 대응 구조체
