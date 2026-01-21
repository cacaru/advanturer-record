import { create } from "zustand";
import { IUnitData } from "../types/unitInfo";

export interface IUnitDataStore {
    data: Record<number, IUnitData>;

    setData: (data: Record<number, IUnitData>) => void;

}

export const useUnitDataStore = create<IUnitDataStore>((set) => ({
    data: [],
    
    setData: (data: Record<number, IUnitData>) => {
            set({
                data,
            })
        },

}));