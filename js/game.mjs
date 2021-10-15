'use strict';
import Car from './car.mjs';
import Obstacles from './obstacle.mjs';

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.car;
    this.obstacles = [];
    this.onGameOver;
    this.isGameOver = false;
  }

  startLoop() {
    this.car = new Car(canvas, 3);
    let last = 0;
    let start = 0;
    const loop = (now) => {
      console.log(this.obstacles);
      this.obstacles.forEach((obstacle) => {
        obstacle.update();
      });
      if (!last || now - last >= 2 * 1000) {
        last = now;
        let y = this.canvas.height;
        let minWidth = 70;
        let maxWidth = 300;
        let width = Math.floor(
          Math.random() * (maxWidth - minWidth + 1) + minWidth
        );
        let minGap = 80;
        let maxGap = 150;
        let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        this.obstacles.push(new Obstacles(this.canvas, 0, 0, width, 30));
        this.obstacles.push(
          new Obstacles(
            this.canvas,
            width + gap,
            0,
            this.canvas.width - (width + gap),
            30
          )
        );
      }
      this.checkAllCollisions();
      this.clearCanvas();
      this.drawCanvas();
      if (!this.isGameOver) {
        window.requestAnimationFrame(loop);
      }
    };
    window.requestAnimationFrame(loop);
  }
  //startLoop End

  drawRoad() {
    const img = new Image();
    img.src = '../images/road.png';
    this.ctx.drawImage(img, 0, 0, 564, 882);
  }

  drawCanvas() {
    //draw car
    this.drawRoad();
    this.car.draw();
    this.obstacles.forEach((obstacle) => obstacle.draw());
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  checkAllCollisions() {
    this.obstacles.forEach((obstacle, index) => {
      if (this.car.checkCollisionObstacle(obstacle)) {
        this.car.loseLive();
        console.log(obstacle);
        this.obstacles.splice(index, 1);
        if (this.car.lives === 0) {
          this.isGameOver = true;
          this.onGameOver();
        }
      }
      if (obstacle.y > this.car.y + 100) {
        this.obstacles.splice(index, 1);
      }
    });
  }

  gameOverCallback(callback) {
    this.onGameOver = callback;
  }
}

export default Game;
