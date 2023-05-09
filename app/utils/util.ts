import { Choice, Result } from "../types";

export function getRandomChoice(): Choice {
  const choices: Choice[] = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}


export function getOutcome(playerChoice: Choice, computerChoice: Choice): Result {
  if (playerChoice === computerChoice) return 'draw';

  const winningChoices = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  return winningChoices[playerChoice] === computerChoice ? 'win' : 'lose';
}