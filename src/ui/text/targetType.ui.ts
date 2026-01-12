import { TranslationKey } from "../../locale";
import { TargetType } from "../../types/targetType.type";


export const TargetTypeUI:Record<TargetType, TranslationKey> = {
    [TargetType.Single]: "targetType.single",
    [TargetType.Area]: "targetType.area",
    [TargetType.Chain]: "targetType.chain",
    [TargetType.Penetrate]: "targetType.penetrate",
    [TargetType._]: "targetType.none",
}