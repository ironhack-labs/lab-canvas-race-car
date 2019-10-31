const car = new Car();
const obstacle = new Obstacle();


function drawEverything() {
    obstacle.drawObstacle();
}

class Game {
    constructor($canvas){
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.car = new Car();
 }

  start () {
    context.clearRect(0,0,350,500)   
    this.loop();
    .drawCar(car);
    drawGrid()
  }

  drawGrid() {
    context.fillStyle = 'green';
    context.fillRect(0, 0, 30, 550);
    context.fillRect(320, 0, 30, 550);
    context.fillStyle = 'white';
    context.fillRect(40, 0, 10, 550);
    context.fillRect(300, 0, 10, 550);
    context.fillRect(174, 0, 4, 20);
    context.fillRect(174, 50, 4, 20);
    context.fillRect(174, 100, 4, 20);
    context.fillRect(174, 150, 4, 20);
    context.fillRect(174, 200, 4, 20);
    context.fillRect(174, 250, 4, 20);
    context.fillRect(174, 300, 4, 20);
    context.fillRect(174, 350, 4, 20);
    context.fillRect(174, 400, 4, 20);
    context.fillRect(174, 450, 4, 20);
    context.fillRect(174, 500, 4, 20);
    context.fillRect(174, 550, 4, 20);
}

  loop () {
    setTimeout(() => {
      drawEverything();
      this.loop();
    }, 300);
  }
}

