class Game {
  constructor($canvas) {
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.canvas = $canvas;
    this.context = $canvas.getContext("2d");
    this.car = new Car(170, 300);
    this.road = new Road();
    this.newObstacle = [];
    this.speed = 1000;
    this.obstacleTimer = 0;
    this.obstacle = new Obstacles(100, 40);
    // test obstacle
    //this.obstacle = new Obstacles(200, 100, "red", 0, 0);
    // this.obstacle = new Obstacles(200, 50, "red", 0, 150, 5, 2);
  }
  drawEverything(timestamp) {
    //console.log(timestamp);
    this.context.clearRect(0, 0, 330, 550);
    this.road.drawRoad();
    this.car.draw();
    for (let i = 0; i < this.newObstacle.length; i++) {
      this.newObstacle[i].drawObstacles();
    }
    this.update(timestamp);

    window.requestAnimationFrame(timestamp => this.drawEverything(timestamp));
  }
  update(timestamp) {
    if (this.obstacleTimer < timestamp - this.speed) {
      this.newObstacle.push(new Obstacles(20,50));
      this.obstacleTimer = timestamp;
    }
    for (let i = 0; i < this.newObstacle.length; i++) {
      this.newObstacle[i].updateObstacles();
    }
  }
  stopGame() {
    clearInterval(this.timestamp) 

  }    

  startGame() {
    this.drawEverything();
    this.car.controls();
  }
}


// let y = 0;
// let velocityY = 0;
// let timestamp = 0;

// const TIME = 1000 / 60;
// const portionOfASecond = TIME / 1000;
// const ACCELERATION = 400;

// function runAnimationLogic (timestampDelta) {
//   y += velocityY * timestampDelta / 1000;
//   velocityY += ACCELERATION * timestampDelta / 1000;
//   if (y > HEIGHT) {
//     velocityY *= -1;
//   }
// }
// let previousTimestamp = 0;

// function loop () {
//   window.requestAnimationFrame(timestamp => {
//     const timestampDelta = timestamp - previousTimestamp;
//     previousTimestamp = timestamp;
//     runAnimationLogic(timestampDelta);
//     road.drawRoad();
//     loop();
//   }, TIME);
// }

//how to input new obstacles
