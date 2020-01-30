const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  }
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

class Obstacle {
  constructor(positionY) {
    this.positionX = 0;
    this.positionY = positionY;
    this.height = 30;
    this.width = 400;
    this.setRandomPosition();
  }

  setRandomPosition() {
    this.positionY = Math.random() * 300;
    this.width = 70 + Math.random() * 200;
  }
  moveObstacle() {
    obstacle.positionY += 0.5;
    // this.checkCollision();
  }
  paint() {
    context.fillStyle = "orange"
    context.fillRect(this.positionX, this.positionY, this.width, this.height)
  }


};

const obstacle = new Obstacle();


//---New Car:------------------------
const car = new Car();

//---CLEAN CANVAS---------------------------
const cleanCanvas = () => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
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

const obstacles = [];
for (let i = 0; i < 100; i++) {
  console.log("teste de obst")
  const obstacle = new Obstacle(i * 100)
  obstacles.push(obstacle);
};

const paintAll = () => {
  drawRoad();
  car.paint();
  moveObstacles();

  /*for (let obstacle of obstacles) {
    obstacle.paint();
  }*/
};


const moveObstacles = () => {
  for (let obstacle of obstacles) {
    obstacle.moveObstacle();
  }
};

const loop = (timestamp) => {
  paintAll();
  moveObstacles();
  if (gameIsRunning) {
    window.requestAnimationFrame(loop);
  }
};


const startGame = () => {
  loop();
  // ----- move to the game logic or the loop
  /*for (let obstacle of loadobstacles) {
    obstacle.moveObstacle();
  }
  */
}

