import { IFoodFactory, IFood, IPixel, ISnakeFactory, IDirection, ISnake } from "./interfaces";
import { Snake } from "./snake";

function random(from: number, to: number) {
  return Math.floor(Math.random() * (to - from)) + from;
}

export class FoodFactory implements IFoodFactory {
  private widthLimit: number;
  private heightLimit: number;
  private names: string[];
  private energy: number[];

  constructor(width: number, height: number, foodNames: string[], foodEnergy: number[]) {
    this.widthLimit = width;
    this.heightLimit = height;
    this.energy = foodEnergy;
    this.names = foodNames;
  }

  public getFood(): IFood {
    const pixel: IPixel = {
      x: random(0, this.widthLimit),
      y: random(0, this.heightLimit),
    };
    const foodIndex = random(0, this.names.length);
    // @TODO: Generated pixel have to be validated, its position
    // may be generated at the same position as an other object position
    // (on this position can be an obstacle, or the snake)
    return {
      name: this.names[foodIndex],
      energy: this.energy[foodIndex],
      pixel: pixel,
    };
  }
}

export class SnakeFactory implements ISnakeFactory {
  private snakePixels: IPixel[];
  private direction: IDirection;
  private maxLength: number;

  constructor(snakePixel: IPixel[], direction: IDirection, maxLength: number) {
    this.snakePixels = snakePixel;
    this.direction = direction;
    this.maxLength = maxLength;
  }

  public getSnake(): ISnake {
    const snake = new Snake([...this.snakePixels], this.direction);
    if (this.maxLength > 0) {
      snake.maxLength = this.maxLength;
    }
    return snake;
  }
}
