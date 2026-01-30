import { create } from "zustand";
import { ISynergy, ISynergyStore } from "../types/synergyInfo.type";


export const useSynergyDataStore = create<ISynergyStore>((set) => ({
    data: [],

    setData: (data: Record<number, ISynergy>) => {
        set({
            data
        })
    }
}))
