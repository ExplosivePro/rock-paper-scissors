import styles from './style.module.css';
import { Choice } from '@/app/types';
import Image from 'next/image';

interface GameChoiceProps extends React.ComponentProps<"div"> {
    choice: Choice;
}

const GameChoice: React.FC<GameChoiceProps> = ({ choice, className }) => {
    return (
        <div className={`${styles["choice-btn"]} ${styles[`choice-${choice}`]} ${className ? styles[className] : ''}`}>
            <div className={styles['win-animation']}></div>
            {choice ? (
                <>
                <div className={`${styles["choice-outer-btn"]}`}></div>
                    <div className={styles["choice-inner-btn"]}>
                        <div className={styles["choice-image-wrapper"]}>
                            <Image
                                className={styles["choice-image"]}
                                src={`/images/icon-${choice}.svg`}
                                alt={choice ?? "game choice"}
                                fill
                            />
                        </div>
                    </div>
                </>
            ): (
                <div className={styles["choice-empty"]}></div>
            )}
        </div>
    )
};

export default GameChoice;
export type { GameChoiceProps };