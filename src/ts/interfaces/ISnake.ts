import { IPixel } from './IPixel';
import { IDirection } from './IDirection';

export interface ISnake {
  pixels: IPixel[];
  direction: IDirection;

  nextPixel(): IPixel;
  changeDirection(direction: IDirection): void;
  goTo(pixel: IPixel): void;
  eatFrom(pixel: IPixel): void;
}
