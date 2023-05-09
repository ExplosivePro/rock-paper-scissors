/**
 * The type used for notifying the choice
 * Null means not selected yet
 */
export type Choice = 'rock' | 'paper' | 'scissors' | null;

/** 
 * The result for each game
 */
export type Result = 'win' | 'lose' | 'draw';

/** 
 * The interface for representing status of the game 
 */
export interface GameOutcome {
  playerChoice: Choice;
  computerChoice: Choice;
  result: Result;
}