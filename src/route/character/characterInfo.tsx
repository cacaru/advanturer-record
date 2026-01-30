import styles from "./characterInfo.module.css";
import ToolTip from "../../component/tooltip/ToolTip";
import { useModalStore } from "../../store/modal.store";
import { useUnitNavStore } from "../../store/unitNav.store";
import { useNavigate } from "react-router-dom";
import { langT } from "../../locale";
import { RarityTypeUI } from "../../ui/text/rarityType.ui";
import { AttackTypeUI } from "../../ui/text/attackType.ui";
import { useSynergyDataStore } from "../../store/synergyData.store";
import { AddType } from "../../types/addType.type";
import { Area } from "../../types/area.type";
import { StatTypeLabel } from "../../domain/statType.mapper";
import { StatUI, StatUIStr } from "../../ui/text/stat.ui";
import { STAT_KEY } from "../../types/stats.type";
import { StatType } from "../../types/statType.type";

export default function CharacterInfo() {

    const openModal = useModalStore((s) => s.openModal);

    // 시너지 정보
    const synergyData = useSynergyDataStore().data;
    console.log(synergyData);
    const data = useUnitNavStore().cdata;
    console.log(data);
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
        return data.stats.health;
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
                            {// 경험치 바 들어올 곳
                            }
                        </div>
                    </div>
                </div>
                { /* 중단 상세 스텟( 강화 수치 반영한 값  
                // 기본값 + 강화수치값 => 옵션으로 선택가능하게) */ }
                <div className={styles.infoMid}>
                    <div className={styles.infoMidRow} >
                        <div className={styles.infoMidItem}>
                            <div className={styles.infoItemTitle}>
                                {langT("stats.health")}
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
                            {
                                data !== null && (
                                    data.synergy.map((s) => (
                                        <ToolTip title={synergyData[s].name} explain={
                                            `조건 달성으로 ${langT(StatUIStr[synergyData[s].stat[0]])}
                                            ${synergyData[s].addType === AddType.Double ? "과/와 " + langT(StatUIStr[synergyData[s].stat[1]]) : (
                                                synergyData[s].addType === AddType.Triple ?  langT(StatUIStr[synergyData[s].stat[1]]) + "과/와 " + langT(StatUIStr[synergyData[s].stat[2]]) : "")
                                            } 상승`
                                        }
                                            onClick={() => openModal( "SYNERGY",{
                                                title: "시너지 설명창",
                                                icon: s,
                                                synergyTitle: synergyData[s].name,
                                                explain: `${synergyData[s].name} 훈련을 통해 강해집니다.\n
                                            유닛이 ${synergyData[s].condition} 명이 모일 때 마다 
                                            ${synergyData[s].area === Area.Target ? "대상 유닛" : 
                                                (synergyData[s].area === Area.Map ? "모든 유닛" : (
                                                    synergyData[s].area === Area.Front ? "전열 유닛" : (
                                                        synergyData[s].area === Area.Middle ? "중열 유닛" : "후열 유닛"
                                                    )
                                                ))
                                            }의 ${langT(StatUIStr[synergyData[s].stat[0]])}
                                            ${synergyData[s].addType === AddType.Double ? "과/와 " + langT(StatUIStr[synergyData[s].stat[1]]) : (
                                                synergyData[s].addType === AddType.Triple ?  langT(StatUIStr[synergyData[s].stat[1]]) + "과/와 " + langT(StatUIStr[synergyData[s].stat[2]]) : "")
                                            }가
                                            ${synergyData[s].value} 만큼 상승합니다.
                                            `
                                            })}
                                        >
                                            <img className={styles.infoSynergy} src={`/Icon/SynergySymbol/${s}.png`} alt={synergyData[s].name}/>
                                        </ToolTip>
                                    )))
                            }
              
                        </div>
                    </div>  
                    <div className={styles.infoBottomBottom}>
                        <div className={styles.infoSkillArea} >
                            <img alt="Icon" className={styles.infoSkill} src="/Icon/검.png"/>
                            <img alt="Icon" className={styles.infoSkill} src="/Icon/검.png"/>
                            <img alt="Icon" className={styles.infoSkill} src="/Icon/검.png"/>
                            <img alt="Icon" className={styles.infoSkill} src="/Icon/검.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}