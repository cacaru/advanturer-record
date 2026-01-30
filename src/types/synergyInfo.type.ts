import { AddType } from "./addType.type";
import { Stat, StatKey, UnitStats } from "./stats.type";
import { Area } from "./area.type";
import { StatType } from "./statType.type";

export const SYNERGY_KEY = [
    "id",
    "name",
    "stat",
    "addType",
    "statType",
    "area",
    "value",
    "condition"
] as const;

export interface ISynergy {
    id: number,
    name: string,
    stat: Array<string>,
    addType: AddType,
    statType: StatType,
    area: Area,
    value: Array<number>,
    condition: Array<number>
}

export interface ISynergyStore {
    data: Record<number, ISynergy>;

    setData: (data: Record<number, ISynergy>) => void;
    
}