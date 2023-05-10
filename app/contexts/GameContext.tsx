"use client"

import { createContext, useContext, useState } from 'react';
import { Choice, Result } from '../types';

interface GameContextType {
    playerChoice: Choice;
    setPlayerChoice: (choice: Choice) => void;
    computerChoice: Choice;
    setComputerChoice: (choice: Choice) => void;
    gameResult: Result;
    setGameResult: (result: Result) => void;
    replay: () => void
}

const GameContext = createContext<GameContextType>({
  playerChoice: null,
  setPlayerChoice: _ => {},
  computerChoice: null,
  setComputerChoice: _ => {},
  gameResult: null,
  setGameResult: _ => {},
  replay: () => {}
});

export const useGameContext = () => useContext(GameContext);

export function GameProvider({ children }: {children: React.ReactNode}) {
  const [playerChoice, setPlayerChoice] = useState<Choice>(null);
  const [computerChoice, setComputerChoice] = useState<Choice>(null);
  const [gameResult, setGameResult] = useState<Result>(null);

  const replay = () => {
    setComputerChoice(null)
    setPlayerChoice(null)
    setGameResult(null)
  }
  return (
    <GameContext.Provider value={{ playerChoice, setPlayerChoice, gameResult, setGameResult, computerChoice, setComputerChoice, replay }}>
      {children}
    </GameContext.Provider>
  );
};