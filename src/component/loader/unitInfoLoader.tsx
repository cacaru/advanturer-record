import { IUnitData } from "../../types/unitInfo";
import  rawData from "../../data/unitData.json"
import { useUnitDataStore } from "../../store/unitData.store";


export async function loadUnitDefaultData() {
    const unitTypeConvert: IUnitData[] = rawData.unit;
    useUnitDataStore.getState().setData(unitTypeConvert);
}