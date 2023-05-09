"use client"

import { useState } from 'react';
import Game from './components/Game/Game'
import Record from './components/Record/Record'
import { Choice, GameOutcome } from './types';

export default function Home() {
  const playerChoice = 'rock';

  const [outcome, setOutcome] = useState<GameOutcome>();
  const [records, setRecords] = useState<Choice[]>([]);
  const [score, setScore] = useState<number>(0);

  const handleOutcome = (outcome: GameOutcome) => {
    let newScore = score
    if (outcome?.result === 'win') {
      newScore ++;
    } else if (outcome?.result === 'lose') {
      newScore --;
    }
    const newRecords = [outcome.playerChoice , ...records]
    if (records.length > 5) {
      newRecords.pop();
    }

    setRecords(newRecords);
    setScore(newScore);
    setOutcome(outcome);
  };


  return (
    <>
      <Record records={records} score={score} />
      <Game playerChoice={'rock'} onOutcome={handleOutcome} />
      <h2 className="text-3xl">Result: {outcome?.result.toUpperCase()}</h2>
    </>
  )
}
