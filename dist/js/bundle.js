/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/ts/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/is-mobile/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-mobile/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = isMobile\nmodule.exports.isMobile = isMobile\nmodule.exports.default = isMobile\n\nconst mobileRE = /(android|bb\\d+|meego).+mobile|armv7l|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series[46]0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i\n\nconst tabletRE = /android|ipad|playbook|silk/i\n\nfunction isMobile (opts) {\n  if (!opts) opts = {}\n  let ua = opts.ua\n  if (!ua && typeof navigator !== 'undefined') ua = navigator.userAgent\n  if (ua && ua.headers && typeof ua.headers['user-agent'] === 'string') {\n    ua = ua.headers['user-agent']\n  }\n  if (typeof ua !== 'string') return false\n\n  let result = mobileRE.test(ua) || (!!opts.tablet && tabletRE.test(ua))\n\n  if (\n    !result &&\n    opts.tablet &&\n    opts.featureDetect &&\n    navigator &&\n    navigator.maxTouchPoints > 1 &&\n    ua.indexOf('Macintosh') !== -1 &&\n    ua.indexOf('Safari') !== -1\n  ) {\n    result = true\n  }\n\n  return result\n}\n\n\n//# sourceURL=webpack:///./node_modules/is-mobile/index.js?");

/***/ }),

/***/ "./src/ts/display.ts":
/*!***************************!*\
  !*** ./src/ts/display.ts ***!
  \***************************/
/*! exports provided: Display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Display\", function() { return Display; });\nconst DEFAULT_DISPLAY_COLORS = {\n    display: '#aad751',\n    emptyPixel: '#4a752c',\n};\nclass Display {\n    constructor(context, pixelSize, images, colors = DEFAULT_DISPLAY_COLORS) {\n        this.context = context;\n        this.pixelSize = pixelSize;\n        this.images = images;\n        this.colors = colors;\n        this._width = Math.floor(context.canvas.width / pixelSize);\n        this._height = Math.floor(context.canvas.height / pixelSize);\n    }\n    width() {\n        return this._width;\n    }\n    height() {\n        return this._height;\n    }\n    drawPixels(color, ...pixels) {\n        pixels.forEach((pixel) => {\n            this._drawPixel(color, pixel);\n        });\n    }\n    drawSnake(snake) {\n        const angleStep = Math.PI / 2;\n        const pixels = snake.pixels;\n        const images = this.images;\n        let px = snake.direction.dx;\n        let py = snake.direction.dy;\n        let image;\n        let angle;\n        for (let i = 0; i < pixels.length; i++) {\n            let a = pixels[i];\n            let b = pixels[i + 1];\n            if (i == 0 || i + 1 == pixels.length) {\n                // Head or tail\n                let x;\n                let y;\n                if (i == 0) {\n                    image = images.snakeHead;\n                    b = b || a;\n                    x = a.x - b.x;\n                    y = a.y - b.y;\n                }\n                else {\n                    image = images.snakeTail;\n                    b = pixels[i - 1];\n                    x = b.x - a.x;\n                    y = b.y - a.y;\n                }\n                angle = Math.atan2(y, x);\n            }\n            else if (b) {\n                // Body\n                if (px == b.x) {\n                    image = images.snakeBody;\n                    angle = angleStep;\n                }\n                else if (py == b.y) {\n                    image = images.snakeBody;\n                    angle = 0;\n                }\n                else {\n                    // Body corner\n                    image = images.snakeBodyCorner;\n                    const ax = px - a.x;\n                    const ay = py - a.y;\n                    const bx = b.x - a.x;\n                    const by = b.y - a.y;\n                    angle = Math.atan2((ay + by) / 2, (ax + bx) / 2) - Math.PI / 4;\n                }\n            }\n            this._drawPixelImg(image, pixels[i], angle);\n            px = a.x;\n            py = a.y;\n        }\n    }\n    drawFood(food) {\n        this._drawPixelImg(this.images.food[food.name], food.pixel, 0);\n    }\n    clear() {\n        const { context, pixelSize, colors } = this;\n        context.beginPath();\n        context.rect(0, 0, context.canvas.width, context.canvas.height);\n        context.fillStyle = colors.display;\n        context.fill();\n        for (let i = 0; i < this.width(); i++) {\n            for (let j = 0; j < this.height(); j++) {\n                context.beginPath();\n                context.arc(i * pixelSize + pixelSize / 2, j * pixelSize + pixelSize / 2, 1, // pixelSize / 10,\n                0, 2 * Math.PI);\n                context.fillStyle = colors.emptyPixel;\n                context.fill();\n            }\n        }\n    }\n    _drawPixelImg(img, pixel, angle) {\n        const { context } = this;\n        const x = this.pixelSize * pixel.x;\n        const y = this.pixelSize * pixel.y;\n        context.save();\n        context.translate(x + this.pixelSize / 2, y + this.pixelSize / 2);\n        context.rotate(angle);\n        context.translate(-x - this.pixelSize / 2, -y - this.pixelSize / 2);\n        context.drawImage(img, x, y, this.pixelSize, this.pixelSize);\n        context.restore();\n    }\n    _drawPixel(color, pixel) {\n        const { context, pixelSize } = this;\n        context.beginPath();\n        context.rect(pixel.x * pixelSize + 1, pixel.y * pixelSize + 1, pixelSize - 1, pixelSize - 1);\n        context.fillStyle = color;\n        context.fill();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/display.ts?");

/***/ }),

/***/ "./src/ts/factories.ts":
/*!*****************************!*\
  !*** ./src/ts/factories.ts ***!
  \*****************************/
/*! exports provided: FoodFactory, SnakeFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"FoodFactory\", function() { return FoodFactory; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SnakeFactory\", function() { return SnakeFactory; });\n/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake */ \"./src/ts/snake.ts\");\n\nfunction random(from, to) {\n    return Math.floor(Math.random() * (to - from)) + from;\n}\nclass FoodFactory {\n    constructor(widthLimit, heightLimit, names, energy) {\n        this.widthLimit = widthLimit;\n        this.heightLimit = heightLimit;\n        this.names = names;\n        this.energy = energy;\n    }\n    getFood() {\n        const pixel = {\n            x: random(0, this.widthLimit),\n            y: random(0, this.heightLimit),\n        };\n        const foodIndex = random(0, this.names.length);\n        // @TODO: Generated pixel have to be validated, its position\n        // may be generated at the same position as an other object position\n        // (on this position can be an obstacle, or the snake)\n        return {\n            name: this.names[foodIndex],\n            energy: this.energy[foodIndex],\n            pixel: pixel,\n        };\n    }\n}\nclass SnakeFactory {\n    constructor(snakePixels, direction, maxLength) {\n        this.snakePixels = snakePixels;\n        this.direction = direction;\n        this.maxLength = maxLength;\n    }\n    getSnake() {\n        const snake = new _snake__WEBPACK_IMPORTED_MODULE_0__[\"Snake\"]([...this.snakePixels], this.direction);\n        if (this.maxLength > 0) {\n            snake.maxLength = this.maxLength;\n        }\n        return snake;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/factories.ts?");

/***/ }),

/***/ "./src/ts/game-vibration.ts":
/*!**********************************!*\
  !*** ./src/ts/game-vibration.ts ***!
  \**********************************/
/*! exports provided: GameVibration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GameVibration\", function() { return GameVibration; });\nclass GameVibration {\n    constructor(patterns) {\n        this.patterns = patterns;\n        this.hasSound = true;\n    }\n    _vibrate(pattern) {\n        if (pattern.length && this.hasSound) {\n            window.navigator.vibrate(pattern);\n        }\n    }\n    eatFood() {\n        this._vibrate(this.patterns.eatFood);\n    }\n    changeDirection() {\n        this._vibrate(this.patterns.changeDirection);\n    }\n    gameOver() {\n        this._vibrate(this.patterns.gameOver);\n    }\n    setPatterns(patterns) {\n        this.patterns = patterns;\n    }\n    toggleSound() {\n        this.hasSound = !this.hasSound;\n        return this.hasSound;\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/game-vibration.ts?");

/***/ }),

/***/ "./src/ts/game.ts":
/*!************************!*\
  !*** ./src/ts/game.ts ***!
  \************************/
/*! exports provided: Game */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Game\", function() { return Game; });\nconst DIRECTIONS = {\n    left: { dx: -1, dy: 0 },\n    right: { dx: 1, dy: 0 },\n    top: { dx: 0, dy: -1 },\n    bottom: { dx: 0, dy: 1 },\n};\nclass Game {\n    constructor(display, snakeFactory, foodFactory, vibration, _settings) {\n        this.display = display;\n        this.snakeFactory = snakeFactory;\n        this.foodFactory = foodFactory;\n        this.vibration = vibration;\n        this._settings = _settings;\n        this._score = 0;\n        this._bestScore = 0;\n        this._runningTimer = false;\n        this._delay = 100;\n        this._finished = false;\n        this._requestDirection = [];\n        this.events = {};\n        this.reset();\n    }\n    isRunning() {\n        return this._runningTimer !== false;\n    }\n    isFinished() {\n        return this._finished;\n    }\n    score() {\n        return this._score;\n    }\n    reset() {\n        this.snake = this.snakeFactory.getSnake();\n        this._genFood();\n        this._finished = false;\n        if (this._score != 0) {\n            this._score = 0;\n            this.trigger('scoreUpdated', this._score);\n        }\n        this._draw();\n    }\n    exec(action, ...args) {\n        if (this.isFinished()) {\n            return;\n        }\n        switch (action) {\n            case 'play':\n                this.play();\n                break;\n            case 'pause':\n                this.pause();\n                break;\n            case 'changeDirection':\n                if (this.isRunning()) {\n                    this._requestDirection.push(DIRECTIONS[args[0]]);\n                }\n                break;\n        }\n    }\n    on(action, callback) {\n        if (this.isFinished()) {\n            return;\n        }\n        if (!this.events[action]) {\n            this.events[action] = [];\n        }\n        this.events[action].push(callback);\n        return this;\n    }\n    trigger(action, ...args) {\n        if (this.events[action]) {\n            this.events[action].forEach((callback) => {\n                callback.apply(this, args);\n            });\n        }\n    }\n    play() {\n        if (!this._runningTimer) {\n            this._tic();\n            this.trigger('resumed');\n        }\n    }\n    pause(trigger = true) {\n        if (this._runningTimer) {\n            clearTimeout(this._runningTimer);\n            this._runningTimer = false;\n            if (trigger) {\n                this.trigger('stopped');\n            }\n        }\n    }\n    _tic() {\n        this.pause(false);\n        this._update();\n        this._checkCollisions();\n        if (this.isFinished()) {\n            const hasNewBestScore = this._bestScore < this._score;\n            if (hasNewBestScore) {\n                this._bestScore = this._score;\n            }\n            this.vibration.gameOver();\n            this.trigger('gameOver');\n            if (hasNewBestScore) {\n                this.trigger('bestscoreUpdated', this._bestScore);\n            }\n            return;\n        }\n        this._draw();\n        this._runningTimer = setTimeout(() => {\n            this._tic();\n        }, this._delay);\n    }\n    _checkCollisions() {\n        let gameOver = false;\n        const head = this.snake.pixels[0];\n        // Collison with walls\n        const { display } = this;\n        if (this._settings.displayHasWall &&\n            (head.x < 0 || head.y < 0 || display.width() <= head.x || display.height() <= head.y)) {\n            gameOver = true;\n        }\n        // Collistions with snake\n        if (!gameOver) {\n            for (let i = 1; i < this.snake.pixels.length; i++) {\n                const pixel = this.snake.pixels[i];\n                if (pixel.x == head.x && pixel.y == head.y) {\n                    gameOver = true;\n                    break;\n                }\n            }\n        }\n        if (gameOver) {\n            this.pause(false);\n            this._finished = true;\n        }\n    }\n    _update() {\n        if (this._requestDirection.length) {\n            this.vibration.changeDirection();\n            this.snake.changeDirection(this._requestDirection.shift());\n        }\n        const nextPixel = this.snake.nextPixel();\n        const { snake, food } = this;\n        let foodToEat;\n        for (let i = 0; i < food.length; i++) {\n            if (nextPixel.x == food[i].pixel.x && nextPixel.y == food[i].pixel.y) {\n                foodToEat = food[i];\n                break;\n            }\n        }\n        if (foodToEat) {\n            this.vibration.eatFood();\n            snake.eatFrom(nextPixel);\n            this._score += foodToEat.energy;\n            this.trigger('scoreUpdated', this._score);\n            this._genFood();\n        }\n        else {\n            snake.goTo(nextPixel);\n        }\n    }\n    _draw() {\n        const { display, snake, food } = this;\n        display.clear();\n        display.drawSnake(snake);\n        for (let i = 0; i < food.length; i++) {\n            display.drawFood(food[i]);\n        }\n    }\n    _genFood() {\n        this.food = [];\n        for (let i = 0; i < 3; i++) {\n            this.food.push(this.foodFactory.getFood());\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/game.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/ts/display.ts\");\n/* harmony import */ var _factories__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories */ \"./src/ts/factories.ts\");\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game */ \"./src/ts/game.ts\");\n/* harmony import */ var _game_vibration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game-vibration */ \"./src/ts/game-vibration.ts\");\n/* harmony import */ var _user_m_controler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-m-controler */ \"./src/ts/user-m-controler.ts\");\n\n\n\n\n\nconst DISPLAY_HEIGHT = 25;\nconst DISPLAY_WIDTH = 25;\nconst VIBRATION_PATTERN = {\n    eatFood: [100],\n    changeDirection: [50],\n    gameOver: [250, 100, 250],\n};\nclass GameModal {\n    constructor($window) {\n        this.$window = $window;\n        const { classList } = this.$window;\n        this._isOpened = classList.contains('modal-instructions') ||\n            classList.contains('modal-game-over') ||\n            classList.contains('modal-resume');\n    }\n    isOpened() {\n        return this._isOpened;\n    }\n    close() {\n        const { classList } = this.$window;\n        classList.remove('modal-instructions');\n        classList.remove('modal-game-over');\n        classList.remove('modal-resume');\n        this._isOpened = false;\n    }\n    gameOver() {\n        this._openType('modal-game-over');\n    }\n    resume() {\n        this._openType('modal-resume');\n    }\n    instructions() {\n        this._openType('modal-instructions');\n    }\n    _openType(type) {\n        if (!this.$window.classList.contains(type)) {\n            this.close();\n            this.$window.classList.add(type);\n            this._isOpened = true;\n        }\n    }\n}\nclass App {\n    constructor(game, modal) {\n        this.game = game;\n        this.modal = modal;\n    }\n    closeModal() {\n        const { modal, game } = this;\n        modal.close();\n        if (game.isFinished()) {\n            game.reset();\n        }\n        else if (!game.isRunning()) {\n            game.exec('play');\n        }\n    }\n    userInput(eventCode) {\n        switch (eventCode) {\n            case 'Top':\n            case 'ArrowUp':\n            case 'KeyW':\n                this.game.exec('changeDirection', 'top');\n                break;\n            case 'Bottom':\n            case 'ArrowDown':\n            case 'KeyS':\n                this.game.exec('changeDirection', 'bottom');\n                break;\n            case 'Left':\n            case 'ArrowLeft':\n            case 'KeyA':\n                this.game.exec('changeDirection', 'left');\n                break;\n            case 'Right':\n            case 'ArrowRight':\n            case 'KeyD':\n                this.game.exec('changeDirection', 'right');\n                break;\n            case 'Space':\n                if (this.modal.isOpened()) {\n                    this.closeModal();\n                }\n                else {\n                    if (this.game.isRunning()) {\n                        this.game.exec('pause');\n                        this.modal.resume();\n                    }\n                    else {\n                        this.game.exec('play');\n                    }\n                }\n                break;\n        }\n    }\n}\nfunction loadImage(src) {\n    return new Promise((response, reject) => {\n        const img = new Image();\n        img.src = src;\n        img.onerror = (err) => {\n            reject(err);\n        };\n        img.onload = () => {\n            response(img);\n        };\n    });\n}\nfunction createGame($canvas) {\n    return Promise.all([\n        loadImage('./dist/head.png'),\n        loadImage('./dist/left-top.png'),\n        loadImage('./dist/vertical.png'),\n        loadImage('./dist/tail.png'),\n        loadImage('./dist/apple.png'),\n        loadImage('./dist/orange.png'),\n        loadImage('./dist/plum.png'),\n        loadImage('./dist/mushroom1.png'),\n        loadImage('./dist/mushroom2.png'),\n        loadImage('./dist/mushroom3.png'),\n    ])\n        .then(([snakeHead, snakeBodyCorner, snakeBody, snakeTail, apple, orange, plum, mushroom1, mushroom2, mushroom3]) => {\n        const images = {\n            snakeHead,\n            snakeBody,\n            snakeBodyCorner,\n            snakeTail,\n            food: {\n                apple, orange, plum, mushroom1, mushroom2, mushroom3,\n            }\n        };\n        const foodName = [\n            \"plum\", \"apple\", \"orange\", \"mushroom1\", \"mushroom2\", \"mushroom3\",\n        ];\n        const foodEnergy = [1, 2, 3, -1, -1, -1];\n        const display = new _display__WEBPACK_IMPORTED_MODULE_0__[\"Display\"]($canvas.getContext('2d'), $canvas.width / DISPLAY_WIDTH, images);\n        const snakeFactory = new _factories__WEBPACK_IMPORTED_MODULE_1__[\"SnakeFactory\"]([\n            { x: 2, y: 12 }, { x: 1, y: 12 }, { x: 0, y: 12 }\n        ], { dx: 1, dy: 0 }, 256);\n        const foodFactory = new _factories__WEBPACK_IMPORTED_MODULE_1__[\"FoodFactory\"](DISPLAY_HEIGHT, DISPLAY_WIDTH, foodName, foodEnergy);\n        const vibrations = new _game_vibration__WEBPACK_IMPORTED_MODULE_3__[\"GameVibration\"](VIBRATION_PATTERN);\n        const game = new _game__WEBPACK_IMPORTED_MODULE_2__[\"Game\"](display, snakeFactory, foodFactory, vibrations, {\n            colors: {\n                snakeHead: '#1c469d',\n                snake: '#4875eb',\n                food: '#e7471d',\n            },\n            displayHasWall: true,\n        });\n        return { game, vibrations };\n    });\n}\nfunction initEvents() {\n}\nfunction main() {\n    const $closeModal = document.querySelector('.close-modal');\n    const $bestScore = document.querySelectorAll('.game-best-score span');\n    const $bestScoreWrapper = document.querySelectorAll('.game-best-score');\n    const $gameScore = document.querySelectorAll('.game-score span');\n    const $gameSound = document.querySelector('.game-sound');\n    const modal = new GameModal(document.querySelector('.game-modal'));\n    const $canvas = document.getElementById('display');\n    createGame($canvas)\n        .then(({ game, vibrations }) => {\n        const app = new App(game, modal);\n        game\n            .on('scoreUpdated', function (score) {\n            const strScore = score.toString();\n            for (let i = 0; i < $gameScore.length; i++) {\n                $gameScore[i].innerHTML = strScore;\n            }\n        })\n            .on('bestscoreUpdated', function (score) {\n            const strScore = score.toString();\n            for (let i = 0; i < $bestScore.length; i++) {\n                $bestScore[i].innerHTML = strScore;\n            }\n            if (score > 0) {\n                for (let i = 0; i < $bestScoreWrapper.length; i++) {\n                    $bestScoreWrapper[i].classList.remove('invisible');\n                }\n            }\n        })\n            .on('gameOver', function () {\n            modal.gameOver();\n        });\n        $closeModal.addEventListener('click', function () {\n            app.closeModal();\n        });\n        document.addEventListener('keydown', function (event) {\n            app.userInput(event.code);\n        });\n        const control = new _user_m_controler__WEBPACK_IMPORTED_MODULE_4__[\"UserMControler\"]('control-buttons', 'free-control');\n        control.onChange((n, o) => {\n            if (!game.isFinished() && n) {\n                if (!game.isRunning()) {\n                    app.userInput('Space');\n                }\n                app.userInput(n);\n            }\n        });\n        $gameSound.addEventListener('click', function () {\n            const mutedClass = 'muted';\n            const hasSound = vibrations.toggleSound();\n            if (hasSound) {\n                $gameSound.classList.remove(mutedClass);\n            }\n            else {\n                $gameSound.classList.add(mutedClass);\n            }\n        });\n    })\n        .catch((err) => {\n        console.error(err);\n    });\n}\nmain();\n\n\n//# sourceURL=webpack:///./src/ts/main.ts?");

/***/ }),

/***/ "./src/ts/snake.ts":
/*!*************************!*\
  !*** ./src/ts/snake.ts ***!
  \*************************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Snake\", function() { return Snake; });\nclass Snake {\n    constructor(pixels, direction) {\n        this.pixels = pixels;\n        this.direction = direction;\n        this.maxLength = 0;\n    }\n    nextPixel() {\n        const head = this.pixels[0];\n        const { direction } = this;\n        return {\n            x: head.x + direction.dx,\n            y: head.y + direction.dy,\n        };\n    }\n    changeDirection(direction) {\n        if (Math.abs(direction.dx) == Math.abs(this.direction.dx) && Math.abs(direction.dy) == Math.abs(this.direction.dy)) {\n            return;\n        }\n        this.direction = direction;\n    }\n    goTo(pixel) {\n        this._moveHeadTo(pixel);\n        this._moveTail();\n    }\n    eatFrom(pixel) {\n        if (0 < this.maxLength && this.maxLength <= this.pixels.length) {\n            this.goTo(pixel);\n        }\n        else {\n            this._moveHeadTo(pixel);\n        }\n    }\n    _moveHeadTo(pixel) {\n        this.pixels.unshift(pixel);\n    }\n    _moveTail() {\n        this.pixels.pop();\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/snake.ts?");

/***/ }),

/***/ "./src/ts/user-m-controler.ts":
/*!************************************!*\
  !*** ./src/ts/user-m-controler.ts ***!
  \************************************/
/*! exports provided: UserMControler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"UserMControler\", function() { return UserMControler; });\n/* harmony import */ var is_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-mobile */ \"./node_modules/is-mobile/index.js\");\n/* harmony import */ var is_mobile__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(is_mobile__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction getFirstChild(parent, c) {\n    const children = parent.children;\n    const len = children.length;\n    for (let i = 0; i < len; i++) {\n        const child = children[i];\n        if (child.classList.contains(c)) {\n            return child;\n        }\n    }\n    return null;\n}\nfunction posOffset(element) {\n    const offset = {\n        x: element.offsetLeft,\n        y: element.offsetTop,\n    };\n    let p = element.parentElement;\n    while (p) {\n        offset.x += p.offsetLeft;\n        offset.y += p.offsetTop;\n        p = p.parentElement;\n    }\n    return offset;\n}\nfunction getMouseEventO(event) {\n    if (event instanceof MouseEvent) {\n        return {\n            x: event.clientX,\n            y: event.clientY,\n        };\n    }\n    if (event instanceof TouchEvent) {\n        const touch = event.touches[0];\n        if (touch) {\n            return {\n                x: touch.clientX,\n                y: touch.clientY,\n            };\n        }\n    }\n    return {\n        x: 0,\n        y: 0,\n    };\n}\nfunction setControlPosition(container, element, event) {\n    const cntOffset = posOffset(container);\n    const eventO = getMouseEventO(event); // touchesParent.touches && touchesParent.touches[0] || {clientX: cntOffset.x, clientY: cntOffset.y};\n    const x = (eventO.x - cntOffset.x) - element.offsetWidth / 2;\n    const y = (eventO.y - cntOffset.y) - element.offsetHeight / 2;\n    element.style.left = x;\n    element.style.top = y;\n    return { x, y };\n}\nfunction getDir(pos, element) {\n    let x = pos.x - (element && element.offsetWidth / 2 || 0);\n    let y = pos.y - (element && element.offsetHeight / 2 || 0);\n    const alpha = Math.atan2(y, x);\n    const ang = Math.PI / 4;\n    if (-ang <= alpha && alpha <= ang) {\n        return 'Right';\n    }\n    if (ang <= alpha && alpha <= 3 * ang) {\n        return 'Bottom';\n    }\n    if (-3 * ang <= alpha && alpha <= -ang) {\n        return 'Top';\n    }\n    if (3 * ang <= alpha || alpha <= -3 * ang) {\n        return 'Left';\n    }\n    return '';\n}\nclass UserMControler {\n    constructor(containerSelector, freeControlClass) {\n        this.lastDir = '';\n        this.callbacks = [];\n        this.freeControlClass = freeControlClass;\n        this.container = document.querySelector(`.${containerSelector}`);\n        this.control = getFirstChild(this.container, 'control-button');\n        this.listen();\n    }\n    userControl(on) {\n        if (on) {\n            this.container.classList.remove(this.freeControlClass);\n        }\n        else {\n            this.lastDir = '';\n            this.container.classList.add(this.freeControlClass);\n        }\n    }\n    moveControl(event) {\n        const lastDir = this.lastDir;\n        const pos = setControlPosition(this.container, this.control, event);\n        const newDir = getDir(pos, this.container);\n        this.lastDir = newDir;\n        if (lastDir !== newDir) {\n            this.triggerDirChange(newDir, lastDir);\n        }\n    }\n    listen() {\n        const self = this;\n        if (Object(is_mobile__WEBPACK_IMPORTED_MODULE_0__[\"isMobile\"])()) {\n            self.container.addEventListener('touchstart', function (event) {\n                self.userControl(true);\n                self.moveControl(event);\n            });\n            self.container.addEventListener('touchend', function (event) {\n                self.userControl(false);\n            });\n            self.container.addEventListener('touchmove', function (event) {\n                self.moveControl(event);\n            });\n        }\n        else {\n            self.container.addEventListener('mousedown', function (event) {\n                self.userControl(true);\n                self.moveControl(event);\n            });\n            self.container.addEventListener('mouseup', function (event) {\n                self.userControl(false);\n            });\n            self.container.addEventListener('mousemove', function (event) {\n                if (self.lastDir) {\n                    self.moveControl(event);\n                }\n            });\n            self.container.addEventListener('mouseleave', function (event) {\n                self.userControl(false);\n            });\n        }\n    }\n    triggerDirChange(newDir, oldDir) {\n        for (let i = 0; i < this.callbacks.length; i++) {\n            this.callbacks[i].call(null, newDir, oldDir);\n        }\n    }\n    onChange(callback) {\n        this.callbacks.push(callback);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/ts/user-m-controler.ts?");

/***/ })

/******/ });