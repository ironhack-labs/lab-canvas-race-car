const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

//---CLEAN CANVAS---------------------------
const cleanCanvas = () => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
};  //----end of clean canvas -----<


window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
    cleanCanvas();
  }
};

//---ROAD:------------------------
const drawRoad = () => {
  context.strokeStyle = "#fff"
  context.fillStyle = 'green'
  context.fillRect(0, 0, 420, 600)
  context.fillStyle = "gray"
  context.fillRect(30, 0, 360, 600)
  context.setLineDash([0])
  context.lineWidth = 10
  context.beginPath()
  context.moveTo(40, 0)
  context.lineTo(40, 600)
  context.stroke()
  context.beginPath()
  context.moveTo(380, 0)
  context.lineTo(380, 600)
  context.stroke()
  context.beginPath()
  context.lineWidth = 5
  context.setLineDash([30, 20])
  context.moveTo(211, 610);
  context.lineTo(211, 0);
  context.stroke();
};

let gameIsRunning = true;
//--CAR-------------------------
class Car {
  constructor() {
    this.positionX = 220;
    this.positionY = 420;
    this.speed = 50;
    this.carUrl = './images/car.png';
    this.imageCar = new Image();
    this.imageCar.src = this.carUrl;
    this.setKeyboardEventListeners();
  }

  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.key) {
        case 'ArrowLeft':
          this.positionX -= this.speed
          console.log("Left");
          // paintAll();
          break;
        case 'ArrowRight':
          this.positionX += this.speed
          console.log("Right")
          // paintAll();
          break;
      }
    });
  }

  paint() {
    context.drawImage(this.imageCar, this.positionX, this.positionY, 50, 100);
  }
}

//---New Car:------------------------
const car = new Car();



//--------------car done--------------------<

//--------------Obstacles--------------------->

class Obstacle {
  constructor(positionY) {
    this.positionX = 0;
    this.positionY = positionY;
    this.height = 10;
    this.width = 100;
    this.setRandomPosition();
  }

  setRandomPosition() {
    this.positionX = Math.random() * 250;
    this.width = 100 + Math.random() * 100;
  }

  drawObstacle() {
    context.fillStyle = "greenyellow"
    context.fillRect(this.positionX, this.positionY, this.width, this.height)
  }

  checkCollision() {
    const carX = car.carX;
    const carY = car.carY;
    const carWidth = 100;
    const carHeight = 150;

    const obstacleX = this.x;
    const obstacleY = this.y;
    const obstacleWidth = this.width;
    const obstacleHeight = this.height;

    if (
      carX + carWidth > obstacleX &&
      carX < obstacleX + obstacleWidth &&
      carY + carHeight > obstacleY &&
      carY < obstacleY + obstacleHeight
    ) {
      gameIsRunning = false;
      console.log('Hit');
    }
  }
  runLogic() {
    this.positionY += 2.5;
    this.checkCollision();
  }

};


let obstacles = [];
for (let i = 0; i < 50; i++) {
  let obstacle = new Obstacle(i * -200);
  obstacles.push(obstacle);
}


let runLogic = () => {
  for (let obstacle of obstacles) {
    obstacle.runLogic();
  }
};
//>--------------------obstaclesdone---------------<
const paintAll = () => {
  drawRoad();
  car.paint();
  for (let obstacle of obstacles) {
    obstacle.drawObstacle();
  }
};


let loop = (timestamp) => {
  runLogic();
  paintAll();
  if (gameIsRunning) {
    window.requestAnimationFrame(loop);
  }
};



const startGame = () => {
  loop();
}
