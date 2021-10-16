"use strict";

import Car from "./car.mjs";
import Obstacles from "./obstacles.mjs";

class Game {
  constructor(canvas){
      this.canvas = canvas;
      this.ctx = this.canvas.getContext("2d");
      this.car;
      this.obstacles = [];
      this.isGameOver = false;
  }

  startLoop(){
    this.car = new Car(canvas, 1);

      const loop = () => {
        if (Math.random() > 0.97) {
          this.obstacles.push(new Obstacles(this.canvas));
        }
    
        this.checkAllCollisions();
        this.updateCanvas();
        this.clearCanvas();
        this.drawCanvas();
    
        if (!this.isGameOver) {
         window.requestAnimationFrame(loop);
        }
      }
    window.requestAnimationFrame(loop);
  }

  drawRoad() {
    const img = new Image();
    img.src = '../images/road.png';
    this.ctx.drawImage(img, 0, 0, 500, 700);
  }
 
  drawCanvas() {
    this.drawRoad();
    this.car.draw();
    this.obstacles.forEach((obstacle) => obstacle.draw());
  }


  updateCanvas() {
    this.car.update();
    this.obstacles.forEach((obstacle) => {
      obstacle.update();
    });
  }

  clearCanvas() {
   this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  
  checkAllCollisions() {
    this.car.checkScreen();
    this.obstacles.forEach((obstacle, index) => {  
        if (this.car.checkCollisionObstacles(obstacle)) {
          this.car.loseLive();
          this.obstacles.splice(index, 1);
          if (this.car.lives === 0) {
            this.isGameOver = true;
            this.onGameOver();
          }
        }
        if (obstacle.y < this.car.y - 10) {
          this.obstacles.splice(index, 1);
        }
      });
  }
  
  gameOverCallback(callback) {
      this.onGameOver = callback;
  }    
}

export default Game;