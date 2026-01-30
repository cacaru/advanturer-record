/*
증가타입	
Only	단일 스텟
Double	두가지 스텟
Triple	세가지 스텟

*/
export type AddTypeKey =
    | "Only"
    | "Double"
    | "Triple";

export enum AddType {
    Only,
    Double,
    Triple
}