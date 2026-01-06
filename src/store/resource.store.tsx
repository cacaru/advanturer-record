import { create } from "zustand";

/* 재화 싱글톤 */
export interface Resource {
    id: string;
    name: string;
    value: number;
    image: string;
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