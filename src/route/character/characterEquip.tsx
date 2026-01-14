import { langT } from "../../locale";
import { useUnitNavStore } from "../../store/unitNav.store";
import { STAT_KEY } from "../../types/stats.type";
import { StatUI } from "../../ui/text/stat.ui";
import styles from "./characterEquip.module.css";

export default function CharacterEquip(){

    const data = useUnitNavStore().cdata;
    if(!data) return null;

    const stat = data.stats;

    // 장비 목록
    // 성물 + 장신구 3종
    
    return(
        <div>
            <div className={styles.equipArea}>
                <div className={styles.stateTitle}>
                    장신구 착용 현황
                </div>
                {/* 
                 장신구 3종(목걸이 반지 팔찌)
                 이미지  아이템 이름 
                        아이템 설명
                
                  */}
                {
                    Array.from({length: 3}).map((i) => (
                        <div className={styles.itemArea}>
                            <img className={styles.itemImg} src="/Icon/symbol_magia.png"/>
                            <div className={styles.itemText}>
                                <div className={styles.name}>
                                    레이안의 서
                                </div>
                                <div className={styles.explain}>
                                    <div className={styles.itemValue}>
                                        체력 + 50%
                                    </div>
                                    <div>
                                        성자 레이안이 들고 다니던 서책
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            
            <div className={styles.resultArea}>
                <div className={styles.stateTitle}>
                    능력치
                </div>
                <div className={styles.stateArea}>
                    { /** 기본 스텟 + 장비의 추가 스텟으로 분류 */}

                    {
                        STAT_KEY.map((key) => (
                        <div className={styles.stateRow} >
                            <div className={styles.infoItemTitle}>
                                {langT(StatUI[key])}
                            </div>
                            <div className={styles.infoValue}>
                                <span className={styles.valueOri}>
                                    {stat[key]}
                                </span>
                                <span className={styles.valueConnection}>
                                    +
                                </span>
                                <span className={styles.valueAdd}>
                                    10
                                </span>
                            </div>
                        </div>
                        ))
                    }
                </div>
                <div className={styles.btnArea}>
                    강화하러 가기 버튼 있을 곳
                </div>
                
            </div>
        </div>
    )
}