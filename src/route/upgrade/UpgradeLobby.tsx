import styles from "./UpgradeLobby.module.css";

export default function UpgradeLobby(){
    return(
        <div>
            {/* 배경 */}
            <div className={styles.pageBg}/>

            {/* 메인 화면 */}
            <div className={styles.list}>
                <div className={styles.iconList}>
                    유닛
                </div>
                <div className={styles.iconList}>
                    장비
                </div>
                <div className={styles.iconList}>
                    성물
                </div>
            </div>
        </div>
        
    )
}