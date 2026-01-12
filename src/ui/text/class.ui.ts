import { TranslationKey } from "../../locale";
import { ClassType } from "../../types/class.type";


export const ClassTypeUI: Record<ClassType, TranslationKey> = {
    [ClassType.Knight] : "class.knight",
    [ClassType.Lancer] : "class.lancer",
    [ClassType.Archer] : "class.archer",
    [ClassType.Magia] : "class.magia",
    [ClassType.Shaman] : "class.shaman",
    [ClassType.Holy] : "class.holy",
    [ClassType._] : "class.none",
}