import styles from "./UpgradeUnit.module.css"

export default function UpgradeUnit(){
    return(
       <div>
            {/* 배경 */}
            <div className={styles.pageBg}/>

            {/* 메인 화면 */}

            {/* 좌측 유닛 목록 */}
            <div className={styles.list}>
                유닛 목록 들어올 곳
            </div>

            {/* 중앙 - 좌측 유닛 능력치 변경판 */}
            <div className={styles.leftListContainer}>
                context
            </div>

            {/* 중앙 - 우측 배경 유닛 일러스트 */}


            {/* 중앙 - 우측 필요 재화 표기판 및 버튼 */}
            <div className={styles.rightContainer}>

            </div>
        </div>
    )
}