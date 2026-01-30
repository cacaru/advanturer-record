/*
증가 범위	
Target	시너지를 가진 유닛만
Map	아군 전체
Front	전열
Middle	중열
Back	후열

*/
export type AreaKey =
    | "Target"
    | "Map"
    | "Front"
    | "Middle"
    | "Back";

export enum Area {
    Target,
    Map,
    Front,
    Middle,
    Back
}