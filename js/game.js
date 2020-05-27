class Game {
  constructor(ctx) {
    this._ctx = ctx;

    this._intervalId = null;

    this._road = new Road(ctx);
    this._car = new Car(ctx);
    this._textScore = new TextScore(ctx);

    this._obstacleArray = [];
    this._tick = 0;
  }

  start() {
    this._intervalId = setInterval(() => this._gameUpdate(), 1000 / 60);
    this._initKeyEvents();
  }

  _gameUpdate() {
    this._clear();
    this._draw();
    this._move();
  }

  _clear() {
    this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
  }

  _draw() {
    if (this._tick++ >= OBSTACLE_SPAWN_RATE) {
      this._tick = 0;
      this._obstacleArray.push(new Obstacle(ctx));
    }

    this._road.draw();
    this._car.draw();
    this._textScore.draw();
    this._obstacleArray.forEach((element) => element.draw());
  }

  _move() {
    this._road.move();
    this._car.move();

    for (let i = 0; i < this._obstacleArray.length; i++) {
      this._obstacleArray[i].move();
      if (this._obstacleArray[i].isOffScreen()) {
        this._textScore.addScore();
        delete this._obstacleArray.shift();
      }
    }
  }

  _initKeyEvents() {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case RIGHT_KEY:
          this._car.vx = 0;
          this._car.vx += this._car.ax;
          break;
        case LEFT_KEY:
          this._car.vx = 0;
          this._car.vx += -this._car.ax;
          break;
      }
    });

    document.addEventListener("keyup", (event) => {
      switch (event.keyCode) {
        case RIGHT_KEY:
          this._car.vx = 0;
          break;
        case LEFT_KEY:
          this._car.vx = 0;
          break;
      }
    });
  }
}
