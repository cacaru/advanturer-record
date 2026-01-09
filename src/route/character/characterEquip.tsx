import styles from "./characterEquip.module.css";

export default function CharacterEquip(){

    return(
        <div>
            <div className={styles.equipArea}>
                장비 착용 현황
                {/* 장비는 총 2
                 보조무기
                 장신구 3종(목걸이 반지 팔찌)
                  */}
            </div>
            <div className={styles.resultArea}>
                <div className={styles.stateTitle}>
                    능력치
                </div>
                <div className={styles.stateArea}>
                    { /** 기본 스텟 + 장비의 추가 스텟으로 분류 */}

                    <div className={styles.stateRow} >
                        <div className={styles.infoItemTitle}>
                            체력
                        </div>
                        <div className={styles.infoValue}>
                            <span className={styles.valueOri}>
                                100
                            </span>
                            <span className={styles.valueConnection}>
                                +
                            </span>
                            <span className={styles.valueAdd}>
                                10
                            </span>
                        </div>
                    </div>


                </div>
                <div className={styles.btnArea}>
                    강화하러 가기 버튼 있을 곳
                </div>
                
            </div>
        </div>
    )
}