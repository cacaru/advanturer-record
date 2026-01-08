
export interface CharacterNavState{
    cid: number | null;
    ctype: string | null;
    setCharacterId: (id:number, type: string) => void;
    clearCharacterId: () => void;
}

