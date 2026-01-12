export interface Stats {
    hp: number;
    defense: number;
    attack: number;
    range: number;
    moveSpeed: number;
    attackSpeed: number;
    criticalChance: number;
    criticalDamage: number;
}

export const STAT_KEY = [
    "hp",
    "defense",
    "attack",
    "range",
    "moveSpeed",
    "attackSpeed",
    "criticalChance",
    "criticalDamage"
] as const;

export type StatKey = typeof STAT_KEY[number];
export type Stat = Record<StatKey, number>;