import { create } from "zustand";

/* 재화 싱글톤 */
interface Resource {
    id: string;
    value: number;
}

export interface ResourcesStore {
    resources : Resource[];
    isLoaded: boolean;

    setResource : (data: Resource[]) => void;
    updateResource: (id: string, value: number) => void;
}

export const useResourceStore = create<ResourcesStore>( (set) => ({
    resources: [],
    isLoaded : false,

    setResource: (data: Resource[]) => {
        set({
            resources : data,
            isLoaded : true,
        })
    },

    updateResource : (id: string, value: number) => {
        set((state) => ({
            resources: state.resources.map((i) => 
                i.id === id ? {...i, value} : i
            )
        }))
    },
}));