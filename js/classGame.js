//create the game
const game = new Game(ctx, 500, 700, car);

game.start();

// create all the game methods
class Game {
  constructor(ctx, width, height, car) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.car = car;
  }

  start() {
    this.intervalId = setInterval(this.update, 1000 / 60);
  }

  score() {}

  update = () => {
    this.drawRoad();
    this.draw();
    this.score();
  };

  checkGameOver() {}
}

/* this.player.draw();
    this.frames++;
    this.updateObstacles();
    this.checkGameOver(); */
