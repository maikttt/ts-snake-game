import { IGameVibration, IVibrationPatterns } from './interfaces';

export class GameVibration implements IGameVibration {
  private hasSound: boolean = true;

  constructor(
    private patterns: IVibrationPatterns
  ) {}

  _vibrate(pattern: number[]) {
    if (pattern.length && this.hasSound) {
      window.navigator.vibrate(pattern);
    }
  }

  eatFood() {
    this._vibrate(this.patterns.eatFood);
  }

  changeDirection() {
    this._vibrate(this.patterns.changeDirection);
  }

  gameOver() {
    this._vibrate(this.patterns.gameOver);
  }

  setPatterns(patterns: IVibrationPatterns) {
    this.patterns = patterns;
  }

  toggleSound(): boolean {
    this.hasSound = !this.hasSound;
    return this.hasSound;
  }
}
