import { useModalStore } from "../../store/modal.store"
import { ISynergyModal } from "../../types/modals"
import styles from "./SynergyModal.module.css"


export default function SynergyModal( {synergyTitle, icon, explain} : ISynergyModal) {
    const closeModal = useModalStore((s) => s.closeModal);

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div>
                    <img className={styles.infoSynergy} src={`/Icon/SynergySymbol/${icon}.png`} alt={synergyTitle}/>
                </div>
                <div className={styles.synergyTitle}>
                    {synergyTitle}
                </div>
                <button className={styles.exit} onClick={closeModal}>
                    닫기
                </button>
            </div>
            
            <div className={styles.content}>
                <div className={styles.explain}>
                    {explain}
                </div>
            </div>
        </div>
    )
}