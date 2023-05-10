import { useEffect } from 'react';
import { getRandomChoice, getOutcome } from '@/app/utils/util';
import GameChoice from '../GameChoice/GameChoice';
import styles from './style.module.css';
import { useGameContext } from '@/app/contexts/GameContext';
import { useRecordContext } from '@/app/contexts/RecordContext';
import ChoiceForm from '../ChoiceForm/ChoiceForm';

const Game: React.FC = () => {
    const { playerChoice, gameResult, setGameResult, computerChoice, setComputerChoice, replay } = useGameContext();
    const { addRecord } = useRecordContext();

    // if player choose a choice, generate a random choice
    useEffect(() => {
        if (playerChoice) {
            setTimeout(
                () => setComputerChoice(getRandomChoice()),
                500
            )
        }
    }, [playerChoice])

    // if both computer and player made choice, set game result.
    useEffect(() => {
        if (playerChoice && computerChoice) {
            const result = getOutcome(playerChoice, computerChoice);

            // update game history
            addRecord({
                playerChoice, computerChoice, result
            })

            // set game result
            setGameResult(result)
        }
    }, [playerChoice, computerChoice])

    return (
        <div className={styles["result-container"]}>
            { playerChoice ? (
                <>
                    <div className={styles["choice-wrapper"]}>
                        <div className={styles["choice-label"]}>You picked</div>
                        <GameChoice choice={playerChoice} className={`${ gameResult === 'win' ? 'win' : '' }`}/>
                    </div>
                    {gameResult ? (
                        <div className={styles['game-result-wrapper']}>
                            <div className={styles['game-result']}>you {gameResult}</div>
                            <button className={styles['game-replay']} onClick={replay}>Play Again</button>
                        </div>
                    ): null}
                    <div className={styles["choice-wrapper"]}>
                        <div className={styles["choice-label"]} >The house picked</div>
                        <GameChoice choice={computerChoice} className={`${ gameResult === 'lose' ? 'win' : '' }`} />
                    </div>
                </>
            ) : (
                <ChoiceForm />
            )}
        </div>
    )
};

export default Game;