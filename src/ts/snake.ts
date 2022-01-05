import { IPixel, IDirection, ISnake } from './interfaces';

export class Snake implements ISnake {
  public maxLength: number = 0;

  constructor(
    public pixels: IPixel[],
    public direction: IDirection
  ) {}

  public nextPixel() {
    const head = this.pixels[0];
    const { direction } = this;
    return {
      x: head.x + direction.dx,
      y: head.y + direction.dy,
    };
  }

  public changeDirection(direction: IDirection) {
    if (Math.abs(direction.dx) == Math.abs(this.direction.dx) && Math.abs(direction.dy) == Math.abs(this.direction.dy)) {
      return;
    }
    this.direction = direction;
  }

  public goTo(pixel: IPixel) {
    this._moveHeadTo(pixel);
    this._moveTail();
  }

  public eatFrom(pixel: IPixel) {
    if (0 < this.maxLength && this.maxLength <= this.pixels.length) {
      this.goTo(pixel);
    } else {
      this._moveHeadTo(pixel);
    }
  }

  private _moveHeadTo(pixel: IPixel) {
    this.pixels.unshift(pixel);
  }

  private _moveTail() {
    this.pixels.pop();
  }
}
