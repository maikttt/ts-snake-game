import { IVibrationPatterns } from './IVibrationPatterns';

export interface IGameVibration {
  toggleSound(): boolean;
  eatFood(): void;
  changeDirection(): void;
  gameOver(): void;
  setPatterns(patterns: IVibrationPatterns): void;
}
