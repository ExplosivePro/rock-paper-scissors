import { useModalContext } from "@/app/contexts/ModalContext";
import styles from './style.module.css';

interface ModalProps extends React.HTMLAttributes<"div"> {

}
const Modal: React.FC<ModalProps> = ({children}) => {
  
    const {toggleModal} = useModalContext();
    
    return (
        <div className={styles["modal-container"]}>
            <div className={styles["modal-bg-wrapper"]}>
                <div className={styles["modal-bg"]}></div>
            </div>
            <div className={styles["modal-body"]}>
                <button onClick={() =>toggleModal(null)} className={styles["close-btn"]}>X</button>
                {children}
            </div>
        </div>
    );
  };
  
  export default Modal;