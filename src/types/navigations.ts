import { IUnitData } from "./unitInfo";

export interface UnitNavState{
    cid: number | null;
    ctype: string | null;
    cdata: IUnitData | null;
    setUnit: (id:number, type: string, data: IUnitData | null) => void;
    clearUnit: () => void;
}