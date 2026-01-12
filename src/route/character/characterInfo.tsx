import styles from "./characterInfo.module.css";
import ToolTip from "../../component/tooltip/ToolTip";
import { useModalStore } from "../../store/modal.store";
import { useUnitNavStore } from "../../store/unitNav.store";
import { useNavigate } from "react-router-dom";
import { langT } from "../../locale";
import { RarityTypeUI } from "../../ui/text/rarityType.ui";
import { AttackTypeUI } from "../../ui/text/attackType.ui";

export default function CharacterInfo() {

    const openModal = useModalStore((s) => s.openModal);

    const data = useUnitNavStore().cdata;
    // data가 null 이면 이전 페이지로 돌아감
    const navigater = useNavigate();
    if(data === null){
        navigater('/character');
    }
    
    const getId = () => {
        if(!data) return 0;
        return data.id;
    }

    const getRarityLabel = () => {
        if(!data) return "";
        return langT(RarityTypeUI[data.rarity]);
    }

    const getAttackTypeLabel = () => {
        if(!data) return "";
        return langT(AttackTypeUI[data.attackType]);
    }

    const getName = () => { if(!data) return ""; return data.name; }
    
    const getHp = () => {
        if(!data) return 0;
        return data.stats.hp;
    }
    const getDefense = () => {
        if(!data) return 0;
        return data.stats.defense;
    }
    const getAttackValue = () => {
        if(!data) return 0;
        return data.stats.attack;
    }
    const getAttackSpeedValue = () => {
        if(!data) return 0;
        return data.stats.attackSpeed;
    }
    const getRange = () => {
        if(!data) return 0;
        return data.stats.range;
    }
    const getMoveSpeed = () => {
        if(!data) return 0;
        return data.stats.moveSpeed;
    }
    const getCriticalChance = () => {
        if(!data) return 0;
        return data.stats.criticalChance;
    }
    const getCriticalDamage = () => {
        if(!data) return 0;
        return data.stats.criticalDamage;
    }

    return(
        <div className={styles.mainContainer}>
            {/* 중앙 - 좌측 일러스트 */}
            <div className={styles.illustArea}>
                일러스트 {getId()}
            </div>
            {/* 중앙 - 우측 스테이터스 및 스킬 -> 클릭하면 모달 팝업 */}
            <div className={styles.infoArea}>
                {/* 상단 등급, 타입, 이름, 레벨, 경험치 */ }
                <div className={styles.infoTop} >
                    <div className={styles.infoTopTop}>
                        <div className={styles.infoName}>
                            { getRarityLabel() }
                            {getAttackTypeLabel()}
                        </div>
                        <div />
                        <div className={styles.infoGrade}>
                            {getName()}
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
                                {langT("stats.hp")}
                            </div>
                            <div className={styles.infoValue}>
                                {getHp()}
                            </div>
                        </div>
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                {langT("stats.defense")}
                            </div>
                            <div className={styles.infoValue}>
                                {getDefense()}
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoMidRow} >
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                {langT("stats.attack")}
                            </div>
                            <div className={styles.infoValue}>
                                {getAttackValue()}
                            </div>
                        </div>
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                {langT("stats.range")}
                            </div>
                            <div className={styles.infoValue}>
                                {getRange()}
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoMidRow} >
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                {langT("stats.attackSpeed")}
                            </div>
                            <div className={styles.infoValue}>
                                {getAttackSpeedValue()}
                            </div>
                        </div>
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                {langT("stats.moveSpeed")}
                            </div>
                            <div className={styles.infoValue}>
                                {getMoveSpeed()}
                            </div>
                        </div>
                    </div>
                    <div className={styles.infoMidRow} >
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                {langT("stats.criticalChance")}
                            </div>
                            <div className={styles.infoValue}>
                                {getCriticalChance()}
                            </div>
                        </div>
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                {langT("stats.criticalDamage")}
                            </div>
                            <div className={styles.infoValue}>
                                {getCriticalDamage()}
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