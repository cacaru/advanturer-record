import { create } from "zustand";
import { persist } from "zustand/middleware";
import { CharacterNavState } from "../types/navigations";

export const useCharacterNavStore = create<CharacterNavState>()(
    persist(
        (set) => ({
            cid: null,
            ctype: null,
            setCharacterId(id, type) { set({ cid: id, ctype : type}); },
            clearCharacterId() { set({ cid: null, ctype: null}); },
        }),
        { name : "character-nav-store"}
    )
);
