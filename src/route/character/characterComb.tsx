import { useCombineFunctionFromStore, useCombineFunctionToStore } from "../../store/combineFunction.store"
import { useUnitDataStore } from "../../store/unitData.store";
import { useUnitNavStore } from "../../store/unitNav.store";
import { RARITY_BG } from "../../types/rarityType.type";
import { IUnitCombFunction } from "../../types/unitComb.type";
import styles from "./characterComb.module.css";


export default function CharacterComb() {
    const id = useUnitNavStore().cid ?? 0;
    
    const fromFunction = useCombineFunctionFromStore((s) => s.data[id]) ?? null;
    const toFunction: IUnitCombFunction[] | null = useCombineFunctionToStore((s) => s.data[id]) ?? null;

    const allUnit = useUnitDataStore((s) => s.data);
        
    console.log(fromFunction);
    console.log(toFunction);

    // 유닛이 조합 불가능한 경우=== 기초 유닛 뿐이므로
    // 목록이 없을 경우 랜덤하게 획득한다 문구 작성
    // 유닛으로 조합할 수 있는게 없는 경우 === 최종 유닛 이므로
    // 더이상 조합 할 수 없다 문구 작성
    return(
        <div>
            <div className={styles.toArea}>
                {
                    toFunction === null && (
                        <div>
                            랜덤하게 획득하여 소환합니다.
                        </div>
                    )
                }
                {
                    toFunction !== null && (
                        toFunction.map((f) => (
                            <div className={styles.combineList}>
                                {f.materials.map((m, index) => (
                                    <>
                                    <div className={styles.combineCell}>
                                        <div className={styles.combineListRow}>
                                            <div className={styles.rarityBorder}
                                                style={ {backgroundImage: `url(${RARITY_BG[allUnit[m].rarity]})`}}
                                                >
                                                <img className={styles.unitIcon} src={allUnit[m].imgStr} />
                                            </div>
                                        </div>
                                    </div>
                                   
                                    { index !== f.materials.length - 1 && (
                                        <div className={styles.combineCell}>
                                            <span className={styles.operator}>+</span>
                                        </div>
                                    )}
                                    </>
                                ))}
                                <div className={styles.combineCell}>
                                    <span className={styles.operator}>=</span>
                                </div>
                                <div className={styles.combineCell}>
                                    <div className={styles.combineListRow}>
                                        <div className={styles.rarityBorder}
                                            style={ {backgroundImage: `url(${RARITY_BG[allUnit[f.resultUnitId].rarity]})`}}
                                            >
                                            <img className={styles.unitIcon} src={allUnit[f.resultUnitId].imgStr} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
            <div className={styles.fromArea}>
                {
                    fromFunction === null && (
                        <div>
                            더 이상 조합할 수 없습니다.
                        </div>
                    )
                }
                {
                    // 좌측정렬, 이미지 사이징, 이미지 하단 이름 추가, 스크롤링
                    fromFunction !== null && (
                        fromFunction.map((f) => (
                            <div className={styles.combineList}>
                                {f.materials.map((m, index) => (
                                    <>
                                    <div className={styles.combineCell}>
                                        <div className={styles.combineListRow}>
                                            <div className={styles.rarityBorder}
                                                style={ {backgroundImage: `url(${RARITY_BG[allUnit[m].rarity]})`}}
                                                >
                                                <img className={styles.unitIcon} src={allUnit[m].imgStr} />
                                            </div>
                                        </div>
                                    </div>
                                   
                                    { index !== f.materials.length - 1 && (
                                        <div className={styles.combineCell}>
                                            <span className={styles.operator}>+</span>
                                        </div>
                                    )}
                                    </>
                                ))}
                                <div className={styles.combineCell}>
                                    <span className={styles.operator}>=</span>
                                </div>
                                <div className={styles.combineCell}>
                                    <div className={styles.combineListRow}>
                                        <div className={styles.rarityBorder}
                                            style={ {backgroundImage: `url(${RARITY_BG[allUnit[f.resultUnitId].rarity]})`}}
                                            >
                                            <img className={styles.unitIcon} src={allUnit[f.resultUnitId].imgStr} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}