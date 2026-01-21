import rawData from "../../data/combineData.json"
import { useCombineFunctionFromStore, useCombineFunctionToStore } from "../../store/combineFunction.store";
import { IUnitCombFunction, JsonUnitCombFunction } from "../../types/unitComb.type"

export function loadUnitCombineData(){
    // id를 재료로 사용하는
    const combineFrom: Record<number, IUnitCombFunction[]> = {};
    // id를 만들 수 있는
    const combineTo:Record<number, IUnitCombFunction[]> = {};

    rawData.forEach((r) => {
        const materials = [r.material1, r.material2, r.material3].filter((m) => m !== 0 );
        // from
        // 각 재료 마다 전부 조합식이 들어가야함
        // 단 중복 제거가 필요함...
        materials.forEach((material) => {
            if(!combineFrom[material])
                combineFrom[material] = [];
            
            // 조합식이 이미 들어가 있는 경우도 건너뛰기
            if(!combineFrom[material].find((f) => f.id === r.id)){ 
                combineFrom[material].push( normalizeFunction(r, material) );
            }
            
        });

        // to
        // 결과번호가 이미 있으니까 접근 편하게 데이터만 변경
        if(!combineTo[r.resultUnitId]) {
            combineTo[r.resultUnitId] = [];
        }
        combineTo[r.resultUnitId].push(normalizeFunction(r));
    })
     
    // store에 저장
    useCombineFunctionFromStore.getState().setData(combineFrom);
    useCombineFunctionToStore.getState().setData(combineTo);

}


function normalizeFunction(raw: JsonUnitCombFunction, selectId?: number) {
    // 0 제거
    const materials = [raw.material1, raw.material2, raw.material3].filter((m) => m !== 0);

    // 선택 값이 없으면 그대로 다시 보냄
    if(selectId == null){
        return{
            id: raw.id,
            resultUnitId: raw.resultUnitId,
            materials: materials
        };
    }

    const rest = [...materials];
    const targetId = rest.indexOf(selectId);
    if(targetId !== -1){
        rest.splice(targetId, 1);
    }

    // 선택 값이 있으면, 선택 값 맨 앞으로
    return{
        id: raw.id,
        resultUnitId: raw.resultUnitId,
        materials: [ selectId, ...rest ]
    }
}