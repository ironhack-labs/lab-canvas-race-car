class Game {
  constructor() {
  }

  draw() {
    const drawRoad = new Image();
    drawRoad.src = "./images/road.png";
    ctx.drawImage(drawRoad, 0, 0, 500, 700);
  }
}

class Obstacle {
  constructor(){
    this.length = Math.floor(Math.random() * 200) + 150;
    this.x = Math.floor(Math.random() * (450 - this.length - 50)) + 50;
    this.y = 0
  }

  draw(){
    ctx.fillStyle = '#FF0000';
    ctx.fillRect(this.x, this.y, this.length, 40);
    this.y += 5
  }
}
