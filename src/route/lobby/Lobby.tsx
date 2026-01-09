import styles from './Lobby.module.css';
import ParalloxBg from '../../component/paralloxBg/ParalloxBg';
import { useNavigate } from 'react-router-dom';

export default function GameLobby() {
    
    /* --- route area --- */
    const navigater = useNavigate();
    const moveCharacter = () =>{
        navigater('/character');
    }
    const moveUpgrade = () => {
        navigater('/upgrade');
    }

    return (
        <div className={styles.scaler}>
        <div className={styles.containerRoot}>

        <ParalloxBg />

        {/* 좌 하단 버튼 */}
        <div className={styles.bottomBtnGroup}>
            <div className={`${styles.box} ${styles.bottomBtn}`}>뽑기</div>
            <div className={`${styles.box} ${styles.bottomBtn}`}>상점</div>
            <div className={`${styles.box} ${styles.bottomBtn}`}>업적</div>
            <div className={`${styles.box} ${styles.bottomBtn}`}>창고</div>
        </div>

        {/* 오른쪽 전체 메뉴 그룹 */}
        <div className={styles.rightMenuContainer}>

            {/* 윗줄: 캐릭터 목록 + [선물/스킬/강화창] */}
            <div className={styles.upperRow}>
                {/* 캐릭터 목록 (큰 박스) */}
                <div onClick={moveCharacter} className={`${styles.box} ${styles.characterBox}`}>
                    캐릭터<br />목록
                </div>


                {/* 작은 버튼 세로 나열 */}
                <div className={styles.subMenuCol}>
                    <div className={`${styles.box} ${styles.smallBtn}`}>성물</div>
                    <div className={`${styles.box} ${styles.smallBtn}`}>스킬</div>
                    <div onClick={moveUpgrade} className={`${styles.box} ${styles.smallBtn}`}>강화창</div>
                </div>
            </div>

            {/* 아랫줄: [뽑기/상점] + 모험 개시 */}
            <div className={styles.lowerRow}>
                <div className={styles.lowerSubCol}>
                    <div className={`${styles.box} ${styles.mediumBtn}`}>미션</div>
                </div>

                {/* 모험 개시 (제일 큰 버튼) */}
                <div className={`${styles.box} ${styles.adventureBtn}`}>
                    모험 개시
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};
