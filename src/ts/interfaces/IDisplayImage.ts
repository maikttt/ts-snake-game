export interface IDisplayImages {
  snakeHead: HTMLImageElement;
  snakeBodyCorner: HTMLImageElement;
  snakeBody: HTMLImageElement;
  snakeTail: HTMLImageElement;
  food: {
    [key: string]: HTMLImageElement;
  };
}
