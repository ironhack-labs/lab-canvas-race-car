/* eslint-disable no-undef */

class Obstacles {
  constructor(game) {
    this.game = game;
    this.y = Math.floor(Math.random() * 500);
    this.x = 10;
  }
  drawObstacles() {
    this.game.context.fillStyle = 'red';
    this.game.context.fillRect(this.y, this.x, 200, 20);
  }
  }

  