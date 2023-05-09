export type Choice = 'rock' | 'paper' | 'scissors';
export type Result = 'win' | 'lose' | 'draw';
export interface GameOutcome {
  playerChoice: Choice;
  computerChoice: Choice;
  result: Result;
}