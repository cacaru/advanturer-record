import { useUnitDataStore } from "../../store/unitData.store";
import { useUnitNavStore } from "../../store/unitNav.store";

export function selectUnit(id: number, type:string){
    const tdata = useUnitDataStore.getState().data.find((u) => u.id === id);
    const data = tdata === undefined ? null : tdata;

    useUnitNavStore.getState().setUnit(id, type, data);
}
