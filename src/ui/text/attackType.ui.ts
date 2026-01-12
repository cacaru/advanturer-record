import { TranslationKey } from "../../locale";
import { AttackType } from "../../types/attckType.type";


export const AttackTypeUI: Record<AttackType, TranslationKey> = {
    [AttackType.Physical]: "attackType.physical",
    [AttackType.Magical]: "attackType.magical",
    [AttackType._] : "attackType.none"
}