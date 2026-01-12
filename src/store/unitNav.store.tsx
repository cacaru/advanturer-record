import { create } from "zustand";
import { persist } from "zustand/middleware";
import { UnitNavState } from "../types/navigations";

export const useUnitNavStore = create<UnitNavState>()(
    persist(
        (set) => ({
            cid: null,
            ctype: null,
            cdata: null,
            // id가 설정되면 id에 해당하는 data를 저장하고 있어야 할듯?
            setUnit(id, type, data) { 
                set({ cid: id, 
                    ctype : type,
                    cdata : data
                    });
             },
            clearUnit() { set({ cid: null, ctype: null, cdata: null}); },
        }),
        { name : "character-nav-store"}
    )
);