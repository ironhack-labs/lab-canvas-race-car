/* eslint-disable no-undef */

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.car = new Car(this);
    this.road = new Road(this);
    this.obstacles = new Obstacles(this);
    this.timer = 0;
    this.SPEED = 0.05;
  }
  startGame() {
    this.loop(0);    
  }
  loop (timestamp) {
    if (this.timer < timestamp - this.SPEED) {
      this.update();
      this.timer = timestamp;
    }
    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }
  update() {
    this.context.clearRect(0,0,500,500);
    this.road.paintRoad();
    this.car.drawCar();
    this.obstacles.drawObstacles();
  }
}