import { create } from "zustand";
import { ICombineFunction, IUnitCombFunction } from "../types/unitComb.type";

export const useCombineFunctionFromStore = create<ICombineFunction>((set) => ({
    data: [],
    setData: (data: Record<number, IUnitCombFunction[]>) => {
        set({
            data,
        })
    },
}));

export const useCombineFunctionToStore = create<ICombineFunction>((set) => ({
    data: [],
    setData: (data: Record<number, IUnitCombFunction[]>) => {
        set({
            data,
        })
    },
}));