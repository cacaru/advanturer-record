import { TranslationKey } from "../../locale";
import { RarityType } from "../../types/rarityType.type";

export const RarityTypeUI:Record<RarityType, TranslationKey> = {
    [RarityType.Apprentice]: "rarity.apprentice",
    [RarityType.Bronze]: "rarity.bronze",
    [RarityType.Copper]: "rarity.copper",
    [RarityType.Silver]: "rarity.silver",
    [RarityType.Gold]: "rarity.gold",
    [RarityType.Platinum]: "rarity.platinum",
    [RarityType._]: "rarity.none"
}