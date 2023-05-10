import { Choice, Result } from "../types";
import { choices } from "./constants";

export function getRandomChoice(): Choice {
  return choices[Math.floor(Math.random() * choices.length)] as Choice;
}


export function getOutcome(playerChoice: Choice, computerChoice: Choice): Result {
  if (!playerChoice || !computerChoice) {
    throw("Unexpected Choice");
  }
  if ( playerChoice === computerChoice) return 'draw';

  let playerIndex = choices.indexOf(playerChoice)
  let computerIndex = choices.indexOf(computerChoice)
  let len = choices.length;

  let is_win = (playerIndex + 2) % len === computerIndex || (playerIndex + len - 1) % len === computerIndex
  return is_win ? 'win' : 'lose';
}