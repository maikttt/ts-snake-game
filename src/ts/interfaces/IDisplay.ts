import { IPixel } from './IPixel';
import { ISnake } from './ISnake';
import { IFood } from './IFood';

export interface IDisplay {
  width(): number;
  height(): number;
  drawPixels(color: string, ...pixels: IPixel[]): void;
  drawSnake(snake: ISnake): void;
  drawFood(food: IFood): void;
  clear(): void;
}
