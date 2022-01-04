import { ISnake } from './ISnake';

export interface ISnakeFactory {
  getSnake(): ISnake;
}
