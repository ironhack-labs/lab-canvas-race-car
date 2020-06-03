class PlayGame {
  constructor(ctx) {
    this._ctx = ctx;
    this._intervalId = null;

    this._racetrack = new Racetrack(ctx);
    this._car = new Car(ctx);

    this._tick = 0;
    this._obstacles = [];
  }

  start() {
    this._intervalId = setInterval(() => {
      this.clear();
      this.addObstacles();
      this.draw();
      this.move();
    }, 1000 / 60);
  }

  stop() {
    clearInterval(this._idInterval);
  }

  clear() {
    this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height);
  }

  addObstacles() {
    if (this._tick++ === 100) {
      this._tick = 0
      this._obstacles.push(new Obstacle(this._ctx));
    }
  }

  draw() {
    this._racetrack.draw();
    this._car.draw();
    this._obstacles.forEach((obs) => {
      obs.draw();
    });
  }

  move() {
    this._racetrack.move();
    this._car.move();
    this._obstacles.forEach((obs) => {
      obs.move()
    })
  }
}
