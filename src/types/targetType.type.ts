export type TargetTypeKey =
    | "Single"
    | "Area"
    | "Chain"
    | "Penetrate";

export enum TargetType {
    _ = 0,
    Single = 1,
    Area,
    Chain,
    Penetrate
}