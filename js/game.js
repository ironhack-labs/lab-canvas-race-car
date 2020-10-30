"use strict";

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.car;
    this.obstacles = [];
    this.isGameOver = false;
    this.road = new Image();
    this.road.src = "./images/road.png";
    
  }

  startLoop() {
    this.car = new Coche(this.canvas, 3);

    const loop = () => {
      if (Math.random() > 0.99) {
        const x = (Math.random() * 240) + 110;
        this.obstacles.push(new Obstacle(this.canvas, x));
      }

      this.checkAllCollisions();
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
      if (!this.isGameOver) {
        window.requestAnimationFrame(loop);
      }
    };

    window.requestAnimationFrame(loop);
  }

    updateCanvas() {
    this.car.update();
    this.obstacles.forEach((obstacle) => {
      obstacle.update();
    });
  }

  clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx.drawImage(this.road, this.canvas.width / 2 - this.road.width / 2, 0, this.road.width, this.canvas.height);
  }

  drawCanvas() {
    this.car.draw();
    this.obstacles.forEach((obstacle) => {
      obstacle.draw();
    });
  }

  checkAllCollisions() {
    this.car.checkLimits();
    this.obstacles.forEach((obstacle, index) => {
      if (this.car.checkCollisionObstacle(obstacle)) {
        this.car.loseLive();
        this.obstacles.splice(index, 1);
        if (this.car.lives === 0) {
          this.isGameOver = true;
          this.onGameOver();
        }
      }
    });
  }

  gameOverCallback(callback) {
    this.onGameOver = callback;
  }
}
