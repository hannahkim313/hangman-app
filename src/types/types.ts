export interface UserData {
  id: string;
  username: string;
}

export interface Player extends UserData {
  isGuessing: boolean;
  lettersGuessed: string[];
  livesLeft: number;
}

export interface GameState {
  selectedWord: string;
  isGameOver: boolean;
}
