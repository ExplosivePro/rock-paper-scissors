import { useModalContext } from "@/app/contexts/ModalContext";
import styles from './style.module.css';
import Image from "next/image";
const RulesModal: React.FC = () => {
  
    const {modalName, toggleModal} = useModalContext();
    if (modalName !== 'rules') return null
    
    return (
        <div className={styles["modal-container"]}>
            <div className={styles["modal-bg-wrapper"]}>
                <div className={styles["modal-bg"]}></div>
            </div>
            <div className={styles["modal-body"]}>
                <button onClick={() =>toggleModal(null)} className={styles["close-btn"]}>X</button>
                <div className={styles["modal-content"]}>
                    <h2 className={styles["modal-title"]}>Rules</h2>
                    <Image
                        src={'/images/image-rules-bonus.svg'}
                        alt='rules'
                        width={320}
                        height={320}
                    />
                </div>
            </div>
        </div>
    );
  };
  
  export default RulesModal;