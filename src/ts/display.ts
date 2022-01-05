import { IDisplay, ISnake, IDisplayImages, IFood, IPixel, IDisplayColors } from './interfaces';

const DEFAULT_DISPLAY_COLORS: IDisplayColors = {
  display: '#aad751',
  emptyPixel: '#4a752c',
};

export class Display implements IDisplay {
  private _width: number;
  private _height: number;

  constructor(
    private context: CanvasRenderingContext2D,
    private pixelSize: number,
    private images: IDisplayImages,
    private colors: IDisplayColors = DEFAULT_DISPLAY_COLORS
  ) {
    this._width = Math.floor(context.canvas.width / pixelSize);
    this._height = Math.floor(context.canvas.height / pixelSize);
  }

  public width(): number {
    return this._width;
  }

  public height(): number {
    return this._height;
  }

  public drawPixels(color: string, ...pixels: IPixel[]) {
    pixels.forEach((pixel) => {
      this._drawPixel(color, pixel);
    });
  }

  public drawSnake(snake: ISnake) {
    const angleStep = Math.PI / 2;
    const pixels = snake.pixels;
    const images = this.images;
    let px = snake.direction.dx;
    let py = snake.direction.dy;
    let image: HTMLImageElement;
    let angle: number;
    for (let i = 0; i < pixels.length; i++) {
      let a = pixels[i];
      let b = pixels[i + 1];
      if (i == 0 || i + 1 == pixels.length) {
        // Head or tail
        let x: number;
        let y: number;
        if (i == 0) {
          image = images.snakeHead;
          b = b || a;
          x = a.x - b.x;
          y = a.y - b.y;
        } else {
          image = images.snakeTail;
          b = pixels[i - 1];
          x = b.x - a.x;
          y = b.y - a.y;
        }
        angle = Math.atan2(y, x);
      } else if (b) {
        // Body
        if (px == b.x) {
          image = images.snakeBody;
          angle = angleStep;
        } else if (py == b.y) {
          image = images.snakeBody;
          angle = 0;
        } else {
          // Body corner
          image = images.snakeBodyCorner;
          const ax = px - a.x;
          const ay = py - a.y;
          const bx = b.x - a.x;
          const by = b.y - a.y;
          angle = Math.atan2(
            (ay + by) / 2,(ax + bx) / 2
          ) - Math.PI / 4;
        }
      }
      this._drawPixelImg(image, pixels[i], angle);

      px = a.x;
      py = a.y;
    }
  }

  public drawFood(food: IFood) {
    this._drawPixelImg(this.images.food[food.name], food.pixel, 0);
  }

  public clear() {
    const { context, pixelSize, colors } = this;
    context.beginPath();
    context.rect(0, 0, context.canvas.width, context.canvas.height);
    context.fillStyle = colors.display;
    context.fill();

    for (let i = 0; i < this.width(); i++) {
      for (let j = 0; j < this.height(); j++) {
        context.beginPath();
        context.arc(
          i * pixelSize + pixelSize / 2,
          j * pixelSize + pixelSize / 2,
          1, // pixelSize / 10,
          0, 2 * Math.PI
        );
        context.fillStyle = colors.emptyPixel;
        context.fill();
      }
    }
  }

  private _drawPixelImg(img: HTMLImageElement, pixel: IPixel, angle: number) {
    const { context } = this;
    const x = this.pixelSize * pixel.x;
    const y = this.pixelSize * pixel.y;
    context.save();
    context.translate(x + this.pixelSize / 2, y + this.pixelSize / 2);
    context.rotate(angle);
    context.translate(-x - this.pixelSize / 2, -y - this.pixelSize / 2);
    context.drawImage(img, x, y, this.pixelSize, this.pixelSize);
    context.restore();
  }

  private _drawPixel(color: string, pixel: IPixel): void {
    const { context, pixelSize } = this;
    context.beginPath();
    context.rect(
      pixel.x * pixelSize + 1, pixel.y * pixelSize + 1,
      pixelSize - 1, pixelSize - 1
    );
    context.fillStyle = color;
    context.fill();
  }
}
