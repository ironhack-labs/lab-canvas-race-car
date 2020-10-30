"use strict";

const imgRoad =new Image();
imgRoad.src = './images/road.png';


class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.car;
    this.obstacles = [];
    this.isGameOver = false;
    this.points =0;
  }

  startLoop() {


    this.car = new Car(this.canvas, 3);
    let time = 0;
    const loop = () => {
        
      if (Math.random() > 0.98) {
        const x = Math.random() * this.canvas.width;
        this.obstacles.push(new obstacle(this.canvas, x));
      }

      this.checkAllCollisions();
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();

      if (!this.isGameOver) {
        window.requestAnimationFrame(loop);
        time++;
        if(time===100){
            this.points++;
            time = 0;
        }
      }
    }
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
  }

  drawCanvas() {
    
    this.ctx.drawImage(imgRoad,0, 0,this.canvas.width, this.canvas.height);  
    this.ctx.fillStyle = 'orange';
    this.ctx.font = '30px Arial';
    this.ctx.fillText(`Score: ${this.points}`,250,500);
    this.car.draw();
    this.obstacles.forEach((obstacle) => {
      obstacle.draw();
    });
  }

  checkAllCollisions() {
    this.car.checkScreen();
    this.obstacles.forEach((obstacle, index) => {
        
      if (this.car.checkCollisionObstacles(obstacle)) {
        this.car.loseLive();
        this.obstacles.splice(index, 1);
        if (this.car.lives === 0) {
          console.log("game over!");  
          this.isGameOver = true;
          this.gameOver();
        }
      }
    });
  }

  gameOver(){
      const gameOverText = `
      <h1>Game Over!</h1>
      <h1>Your final score ${this.points}</h1>
   
      `;
    const gameOver = document.createElement("div");
    gameOver.classList.add("game-over");
    gameOver.innerHTML = gameOverText;

      document.querySelector("body").appendChild(gameOver);


  }


}
