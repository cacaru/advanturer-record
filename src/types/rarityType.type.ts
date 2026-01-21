export type RarityKey = 
    | "Apprentice"
    | "Bronze"
    | "Copper"
    | "Silver"
    | "Gold"
    | "Platinum";

export enum RarityType {
    _ = 0,
    Apprentice = 1,
    Bronze,
    Copper,
    Silver,
    Gold,
    Platinum
}

export const RARITY_BG: Record<RarityType, string> = {
    0: "/Icon/RaritySymbol/견습.png",
    1: "/Icon/RaritySymbol/견습.png",
    2: "/Icon/RaritySymbol/청동.png",
    3: "/Icon/RaritySymbol/동.png",
    4: "/Icon/RaritySymbol/은.png",
    5: "/Icon/RaritySymbol/금.png",
    6: "/Icon/RaritySymbol/백금.png",
}
