import rawData from "../../data/synergy.json"
import { AddTypeLabel } from "../../domain/addType.mapper";
import { AreaLabel } from "../../domain/area.mapper";
import { StatTypeLabel } from "../../domain/statType.mapper";
import { useSynergyDataStore } from "../../store/synergyData.store";
import { ISynergy } from "../../types/synergyInfo.type";

export function loadSynergyData() {
    const tmpSynergyData = rawData;
    const result: Record<number, ISynergy> = [];
    // 가공
    tmpSynergyData.map((data) => {
        result[data.id] = {
            id : data.id,
            name: data.name,
            stat: data.stat.split(","),
            addType: convertAddType(data.addType),
            statType: convertStatType(data.statType),
            area: convertArea(data.area),
            value: convertValue(data.value),
            condition: convertValue(data.condition)
        }
    })
    useSynergyDataStore.getState().setData(result);
}


function convertAddType(data: string) {
    return AddTypeLabel[data];
}

function convertStatType(data: string) {
    return StatTypeLabel[data];
}

function convertArea(data: string){
    return AreaLabel[data];
}

function convertValue(data: string){
    var val = data.split("/");
    const result: Array<number> = [];
    val.map((d) => {
        result.push(Number.parseInt(d));
    })
    return result;
}