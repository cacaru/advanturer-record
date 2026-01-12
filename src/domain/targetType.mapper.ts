import { TargetType } from "../types/targetType.type"

export const TargetTypeLabel: Record<string, TargetType> ={
    "Single": TargetType.Single,
    "Area": TargetType.Area,
    "Chain": TargetType.Chain,
    "Penetrate": TargetType.Penetrate
}