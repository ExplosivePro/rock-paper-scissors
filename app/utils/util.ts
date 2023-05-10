import { Choice, Result } from "../types";
import { choices } from "./constants";

export function getRandomChoice(): Choice {
  return choices[Math.floor(Math.random() * choices.length)] as Choice;
}


export function getOutcome(playerChoice: Choice, computerChoice: Choice): Result {
  if (!playerChoice) {
    throw("Unexpected Choice");
  }
  
  if ( playerChoice === computerChoice) return 'draw';

  const winningChoices = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  };

  return winningChoices[playerChoice] === computerChoice ? 'win' : 'lose';
}