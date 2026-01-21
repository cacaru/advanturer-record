
export interface JsonUnitCombFunction {
    id: number,
    resultUnitId: number,
    material1:number,
    material2:number,
    material3:number
}

export interface IUnitCombFunction {
    id: number,
    resultUnitId: number,
    materials: number[],
}

export interface ICombineFunction {
    data: Record<number, IUnitCombFunction[]>;

    setData: (data: Record<number, IUnitCombFunction[]>) => void;

}
