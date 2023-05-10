/**
 * The type used for notifying the choice
 * Null means not selected yet
 */
export type Choice = 'rock' | 'paper' | 'scissors' | 'spock' | 'lizard'| null;

/** 
 * The result for each game.
 * Null means result not determined yet
 */
export type Result = 'win' | 'lose' | 'draw' | null;

/** 
 * The interface for representing status of the game 
 */
export interface GameOutcome {
  playerChoice: Choice;
  computerChoice: Choice;
  result: Result;
}