"use strict";

class Game{
  constructor(canvas){
    this.canvas = canvas
    this.ctx = this.canvas.getContext("2d")
    this.car;
    this.road;
    this.enemies = []
    this.isGameOver = false
    this.points = 0
  }
  startLoop() {
    this.car = new Car(this.canvas, 3);
    this.road = new Road(this.canvas)
    let time = 0
    const loop = () => {
      if (Math.random() >= 0.99) {
        const x = Math.random() * this.canvas.width;
        this.enemies.push(new Enemy(this.canvas, x));
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
    };
    window.requestAnimationFrame(loop);
  }
  updateCanvas(){
    //this.car.update();
    this.enemies.forEach((enemy) => {
      enemy.update();
    });
  }
  clearCanvas(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  drawCanvas(){
    this.road.drawRoad();
    this.ctx.fillStyle = 'orange';
    this.ctx.font = '30px Arial';
    this.ctx.fillText(`Score: ${this.points}`,50,50);
    this.car.draw();
    this.enemies.forEach((enemy) => {
      //let indice = Math.floor(Math.random() * 2)
      enemy.draw();
    });
  }
  checkAllCollisions(){
    this.car.checkScreen();
    this.enemies.forEach((enemy, index) => {
      if (this.car.checkCollisionEnemy(enemy)) {
        this.car.loseLive();
        this.enemies.splice(index, 1);
        if (this.car.lives === 0) {
          this.isGameOver = true;
          this.gameOver();
        }
      }
    });
  }
  gameOver(){
    const html = `
    <div>
    <h1>Game Over!</h1>
    <h1>Your score ${this.points}</h1>
    </div>
    `;
  let gameOver = document.createElement("div");
  gameOver.classList.add("game-over");
  gameOver.innerHTML = html;
  document.querySelector("body").appendChild(gameOver);
}
  // gameOverCallback(callback) {
  //   this.onGameOver = callback;
  // }
}