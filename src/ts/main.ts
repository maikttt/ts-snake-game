import { Display } from './display';
import { FoodFactory, SnakeFactory } from './factories';
import { Game } from './game';
import { GameVibration } from './game-vibration';
import { UserMControler } from './user-m-controler';

const DISPLAY_HEIGHT = 25;
const DISPLAY_WIDTH = 25;

const VIBRATION_PATTERN = {
  eatFood: [100],
  changeDirection: [50],
  gameOver: [250, 100, 250],
};

class GameModal {
  private _isOpened: boolean;

  constructor(
    private $window: HTMLElement
  ) {
    const { classList } = this.$window;
    this._isOpened = classList.contains('modal-instructions') ||
      classList.contains('modal-game-over') ||
      classList.contains('modal-resume')
    ;
  }

  public isOpened() {
    return this._isOpened;
  }

  public close() {
    this.$window.className = 'game-modal';
    this._isOpened = false;
  }

  public gameOver() {
    this._openType('modal-game-over');
  }

  public resume() {
    this._openType('modal-resume');
  }

  public instructions() {
    this._openType('modal-instructions');
  }

  private _openType(type: string) {
    if (!this.$window.classList.contains(type)) {
      this.close()
      this.$window.classList.add(type);
      this._isOpened = true;
    }
  }
}

class App {
  constructor(
    private game: Game,
    private modal: GameModal
  ) {}

  closeModal() {
    const { modal, game } = this;
    modal.close();
    if (game.isFinished()) {
      game.reset();
    } else if (!game.isRunning()) {
      game.exec('play');
    }
  }

  userInput(eventCode: string) {
    switch (eventCode) {
      case 'Top':
      case 'ArrowUp':
      case 'KeyW':
        this.game.exec('changeDirection', 'top');
        break;
      case 'Bottom':
      case 'ArrowDown':
      case 'KeyS':
        this.game.exec('changeDirection', 'bottom');
        break;
      case 'Left':
      case 'ArrowLeft':
      case 'KeyA':
        this.game.exec('changeDirection', 'left');
        break;
      case 'Right':
      case 'ArrowRight':
      case 'KeyD':
        this.game.exec('changeDirection', 'right');
        break;
      case 'Space':
        if (this.modal.isOpened()) {
          this.closeModal();
        } else {
          if (this.game.isRunning()) {
            this.game.exec('pause');
            this.modal.resume();
          } else {
            this.game.exec('play');
          }
        }
        break;
    }
  }
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((response, reject) => {
    const img = new Image();
    img.src = src;
    img.onerror = (err) => {
      reject(err);
    };
    img.onload = () => {
      response(img);
    };
  });
}

function createGame($canvas: HTMLCanvasElement) {
  return Promise.all([
    loadImage('./dist/head.png'),
    loadImage('./dist/left-top.png'),
    loadImage('./dist/vertical.png'),
    loadImage('./dist/tail.png'),
    loadImage('./dist/apple.png'),
    loadImage('./dist/orange.png'),
    loadImage('./dist/plum.png'),
    loadImage('./dist/mushroom1.png'),
    loadImage('./dist/mushroom2.png'),
    loadImage('./dist/mushroom3.png'),
  ])
  .then(([
    snakeHead, snakeBodyCorner, snakeBody, snakeTail,
    apple, orange, plum, mushroom1, mushroom2, mushroom3]) => {
    const images = {
      snakeHead,
      snakeBody,
      snakeBodyCorner,
      snakeTail,
      food: {
        apple, orange, plum, mushroom1, mushroom2, mushroom3,
      }
    };
    const foodName = [
      "plum", "apple", "orange", "mushroom1", "mushroom2", "mushroom3",
    ];
    const foodEnergy = [1, 2, 3, -1, -1, -1];
    const display = new Display(
      $canvas.getContext('2d'), $canvas.width / DISPLAY_WIDTH, images
    );

    const snakeFactory = new SnakeFactory([
      {x: 2, y: 12}, {x: 1, y: 12}, {x: 0, y: 12}
    ], {dx: 1, dy: 0}, 256);

    const foodFactory = new FoodFactory(
      DISPLAY_HEIGHT, DISPLAY_WIDTH, foodName, foodEnergy
    );
    const vibrations = new GameVibration(VIBRATION_PATTERN);
    const game = new Game(display, snakeFactory, foodFactory, vibrations, {
      colors: {
        snakeHead: '#1c469d',
        snake: '#4875eb',
        food: '#e7471d',
      },
      displayHasWall: true,
    });

    return {game, vibrations};
  });
}

function initEvents() {

}

function main() {
  const $closeModal = document.querySelectorAll('.game-modal-btn');
  const $bestScore = document.querySelectorAll('.game-best-score span');
  const $bestScoreWrapper = document.querySelectorAll('.game-best-score');
  const $gameScore = document.querySelectorAll('.game-score span');
  const $gameSound = document.querySelector('.game-sound');

  const modal = new GameModal(
    document.querySelector('.game-modal')
  );

  const $canvas = document.getElementById('display') as HTMLCanvasElement;

  createGame($canvas)
  .then(({game, vibrations}) => {
    const app = new App(game, modal);
    game
    .on('scoreUpdated', function(score: number) {
      const strScore = score.toString();
      $gameScore.forEach((element)=>{
        element.innerHTML = strScore;
      });
    })
    .on('bestscoreUpdated', function(score: number) {
      const strScore = score.toString();
      $bestScore.forEach((element)=>{
        element.innerHTML = strScore;
      });
      if (score > 0) {
        $bestScoreWrapper.forEach((element)=>{
          element.classList.remove('invisible')
        });
      }
    })
    .on('gameOver', function() {
      modal.gameOver();
    })
    ;

    $closeModal.forEach((btn)=>{
      btn.addEventListener('click', function() {
        app.closeModal();
      });
    });
    document.addEventListener('keydown', function(event: KeyboardEvent) {
      app.userInput(event.code);
    })
    ;

    const control = new UserMControler('control-buttons', 'free-control');
    control.onChange((n: string, o: string) => {
      if (!game.isFinished() && n) {
        if (!game.isRunning()) {
          app.userInput('Space');
        }
        app.userInput(n);
      }
    });

    $gameSound.addEventListener('click', function() {
      const mutedClass = 'muted';
      const hasSound = vibrations.toggleSound();
      if (hasSound) {
        $gameSound.classList.remove(mutedClass);
      } else {
        $gameSound.classList.add(mutedClass);
      }
    });
  })
  .catch((err) => {
    console.error(err);
  });
}

main();
