import { useEffect, useState } from 'react';
import { Choice, GameOutcome } from '@/app/types';
import { getRandomChoice, getOutcome } from '@/app/utils/util';
import GameChoice from '../GameChoice/GameChoice';
import styles from './style.module.css';

interface GameProps extends React.ComponentProps<"div"> {
    playerChoice: Choice;
    onOutcome: (outcome: GameOutcome) => void;
}

const Game: React.FC<GameProps> = ({ playerChoice, onOutcome }) => {
    const [computerChoice, setComputerChoice] = useState<Choice>(null);

    useEffect(() => {
        setComputerChoice(getRandomChoice());
    }, [playerChoice])

    useEffect(() => {
        if (playerChoice && computerChoice) {
            const result = getOutcome(playerChoice, computerChoice);
            onOutcome({playerChoice, computerChoice, result});
        }
    }, [playerChoice, computerChoice])

    return (
        <div className={styles["result-container"]}>
            <div>
                <div className={styles["choice-label"]}>You picked</div>
                <GameChoice choice={playerChoice}/>
            </div>
            <div>
                <div className={styles["choice-label"]}>The house picked</div>
                <GameChoice choice={computerChoice}/>
            </div>
        </div>
    )
};

export default Game;
export type { GameProps };