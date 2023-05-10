import { useModalContext } from "@/app/contexts/ModalContext";
import styles from './style.module.css';
import Image from "next/image";
import Modal from "../Modal/Modal";
const RulesModal: React.FC = () => {
  
    const {modalName} = useModalContext();
    if (modalName !== 'rules') return null
    
    return (
        <Modal>
            <div className={styles["modal-content"]}>
                <h2 className={styles["modal-title"]}>Rules</h2>
                <Image
                    src={'/images/image-rules-bonus.svg'}
                    alt='rules'
                    width={320}
                    height={320}
                />
            </div>
        </Modal>
    );
  };
  
  export default RulesModal;