import { create } from "zustand";
import { IUnitData } from "../types/unitInfo";

export interface IUnitDataStore {
    data: IUnitData[];

    setData: (data: IUnitData[]) => void;

}

export const useUnitDataStore = create<IUnitDataStore>((set) => ({
    data: [],
    
    setData: (data: IUnitData[]) => {
            set({
                data,
            })
        },

}));