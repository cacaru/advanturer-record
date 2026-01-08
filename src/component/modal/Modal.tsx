import { useModalStore } from "../../store/modal.store";
import { ModalType } from "../../types/modals";
import SynergyModal from "./SynergyModal";
import styles from "./Modal.module.css";


const MODAL_CONTENT_MAP: Record<ModalType, React.FC<any>> = {
    SYNERGY: SynergyModal,
}

/* 모달 통합 */
export default function Modal(){
    const { isOpen, type, data, closeModal } = useModalStore();
    if(!isOpen || !type) return null;

    const ModalComponent = MODAL_CONTENT_MAP[type];

    return(
        <div className={styles.overlay} onClick={closeModal}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <ModalComponent {...data} />
            </div>
        </div>
    )
}