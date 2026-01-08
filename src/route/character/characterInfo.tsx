import styles from "./characterInfo.module.css";
import ToolTip from "../../component/tooltip/ToolTip";
import { useModalStore } from "../../store/modal.store";
import { useCharacterNavStore } from "../../store/characterNav.store";

export default function CharacterInfo() {
    const { cid }= useCharacterNavStore();
    const openModal = useModalStore((s) => s.openModal);

    return(
        <div className={styles.mainContainer}>
            {/* 중앙 - 좌측 일러스트 */}
            <div className={styles.illustArea}>
                일러스트 {cid}
            </div>
            {/* 중앙 - 우측 스테이터스 및 스킬 -> 클릭하면 모달 팝업 */}
            <div className={styles.infoArea}>
                {/* 상단 등급, 타입, 이름, 레벨, 경험치 */ }
                <div className={styles.infoTop} >
                    <div className={styles.infoTopTop}>
                        <div className={styles.infoName}>
                            등급 + 공격타입
                        </div>
                        <div />
                        <div className={styles.infoGrade}>
                            이름
                        </div>
                    </div>
                    <div className={styles.infoTopBottom}>
                        <div className={styles.infoLevel}>
                            레벨 
                        </div>
                        <div className={styles.infoExpBar}>
                            경험치 바 
                        </div>
                    </div>
                </div>
                { /* 중단 상세 스텟( 강화 수치 반영한 값  
                // 기본값 + 강화수치값 => 옵션으로 선택가능하게) */ }
                <div className={styles.infoMid}>
                    <div className={styles.infoMidRow} >
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                체력
                            </div>
                            <div className={styles.infoValue}>
                                100
                            </div>
                        </div>
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                방어력
                            </div>
                            <div className={styles.infoValue}>
                                100
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoMidRow} >
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                공격력
                            </div>
                            <div className={styles.infoValue}>
                                100
                            </div>
                        </div>
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                사거리
                            </div>
                            <div className={styles.infoValue}>
                                1
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoMidRow} >
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                공격속도
                            </div>
                            <div className={styles.infoValue}>
                                1
                            </div>
                        </div>
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                이동속도
                            </div>
                            <div className={styles.infoValue}>
                                1
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoMidRow} >
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                치확
                            </div>
                            <div className={styles.infoValue}>
                                10
                            </div>
                        </div>
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                치피
                            </div>
                            <div className={styles.infoValue}>
                                100
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.infoBottom}>
                    <div className={styles.infoBottomTop}>
                        <div className={styles.infoSynergyArea}>
                            <ToolTip title="기사단" explain="견습 동급 은금 금급 필요"
                                onClick={() => openModal( "SYNERGY",{
                                    title: "시너지 설명창",
                                    synergyTitle: "기사단",
                                    explain: "견습 동급 은금 금급 기사들을 필드에 모으면 ~만큼 강해집니다."
                                })}
                            >
                                <img className={styles.infoSynergy} src="/Icon/coin.png" alt="테스트"/>
                            </ToolTip>

                            <ToolTip title="모험의 시작" explain="견습 6종"
                                onClick={() => openModal( "SYNERGY",{
                                    title: "시너지 설명창",
                                    synergyTitle: "모험의 시작",
                                    explain: "견습등급의 기사, 창술사, 궁수, 마법사, 주술사, 치유사와 함께합니다. 공격력이 100 증가합니다."
                                })}
                            >
                                <img className={styles.infoSynergy} src="/Icon/coin.png" alt="테스트"/>
                            </ToolTip>

                            <ToolTip title="왕도" explain="같은 등급의 마법사 궁사 치유사"
                                onClick={() => openModal( "SYNERGY",{
                                    title: "시너지 설명창",
                                    synergyTitle: "왕도",
                                    explain: "같은 등급의 마법사 궁사 치유사와 필드에서 함께하면 ~만큼 강해집니다."
                                })}
                            >
                                <img className={styles.infoSynergy} src="/Icon/coin.png" alt="테스트"/>
                            </ToolTip>                                
                        </div>
                    </div>  
                    <div className={styles.infoBottomBottom}>
                        <div className={styles.infoSkillArea} >
                            <img className={styles.infoSkill} src="/Icon/검.png"/>
                            <img className={styles.infoSkill} src="/Icon/검.png"/>
                            <img className={styles.infoSkill} src="/Icon/검.png"/>
                            <img className={styles.infoSkill} src="/Icon/검.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}