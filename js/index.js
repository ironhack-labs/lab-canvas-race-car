const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
let interval;
let frames = 0;
let score = 0;
let obstacles = [];
const obstacleFrequency = 120;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  function startGame() {
    frames = 0;
    score = 0;
    obstacles = [];
    road.clearRoad();
    interval = setInterval(updateGame, 20);
  }
};

class GameObject {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  getTop() {
    return this.y;
  }

  getBottom() {
    return this.getTop() + this.height;
  }

  getLeft() {
    return this.x;
  }

  getRight() {
    return this.getLeft() + this.width;
  }

  gameOverScreen() {
    context.fillStyle = '#000000';
    context.fillRect(0, this.height/2, this.width, this.height/2);

    context.textAlign = 'center';
    context.font = "36px Arial";
    context.fillStyle = '#870007';
    context.fillText('Game Over!', this.width/2, (this.height/2) + 80);
    context.fillStyle = '#ffffff';
    context.fillText('Your final score', this.width/2, (this.height/2) + 140);
    context.fillText(`${score}`, this.width/2, (this.height/2) + 200);
  }
}


class Game extends GameObject {
  constructor(...args) {
    super(...args);
    this.img = new Image();
    this.img.src = "../images/road.png";
    this.boundaryLeft = 67;
    this.boundaryRight = this.width - 61;
  }
  drawRoad() {
    context.drawImage(this.img, this.x, this.y, this.width, this.height);

    context.textAlign = 'left';
    context.fillStyle = '#0000ff';
    context.font = "30px Arial";
    context.fillText(`Score ${score}`, 10, 50);
  }
  clearRoad() {
    context.clearRect(this.x, this.y, this.width, this.height);
  }
}
class Car extends GameObject {
  constructor(...args) {
    super(...args);
    this.img = new Image();
    this.img.src = "../images/car.png";
    this.lateralMovement = 10;
  }
  drawCar() {
    context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    this.x -= this.lateralMovement;
    this.detectWalls();
  }
  moveRight() {
    this.x += this.lateralMovement;
    this.detectWalls();
  }
  detectWalls() {
    if(this.x < 0) {
    this.x = 0;
    }
    if(this.x + this.width > 500) {
    this.x = 500 - this.width;
    }
  } 
}

class Obstacle extends GameObject {
  constructor(...args) {
    super(...args);
    this.speed = 3;
  }

  drawObstacle() {
    context.fillStyle = "#890000";
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  moveDown() {
    this.y += this.speed;
  }
}


const roadWidth = 500;
const roadHeight = 700;
const road = new Game(0, 0, roadWidth, roadHeight);
const carWidth = 50;
const carHeight = 90;
const car = new Car((roadWidth-carWidth)/2, roadHeight-carHeight-40, carWidth, carHeight);

function updateGame() {
  road.clearRoad();
  road.drawRoad();
  car.drawCar();
  if(frames % obstacleFrequency === 0)
    addObstacle();
  updateObstacles();

  frames++;
}

function addObstacle() {
  const roadWidth = road.boundaryRight - road.boundaryLeft;
  const height = 40;
  let randX = Math.floor(Math.random() * roadWidth) + road.boundaryLeft;
  const obstacleMaxWidth = roadWidth * 0.75;
  const obstacleMinWidth = roadWidth * 0.25;
  let randWidth =  Math.floor(Math.random() * (obstacleMaxWidth - obstacleMinWidth)) + Math.ceil(obstacleMinWidth);
  if(randX + randWidth > road.boundaryRight) {
    randX -= (randX + randWidth)-road.boundaryRight;
  }
  const obstacle = new Obstacle(randX, 0, randWidth, height);
  obstacles.push(obstacle)
}

function updateObstacles() {
  obstacles.forEach((obstacle) => {
    obstacle.moveDown();
    obstacle.drawObstacle();
  });
  if(obstacles.length > 0) {
    if(carCrash()) {
      clearInterval(interval);
      setTimeout(() => {
        road.gameOverScreen();
      }, 500);
      return;
    }

    if(obstacles[0].getTop() >= road.getBottom()) {
      score++;
      obstacles.shift();
    }
      
  }
}

document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowLeft":
      car.moveLeft();
      break;
    case "ArrowRight":
      car.moveRight();
      break;
  }
});

function carCrash() {
  const carOveBottom = car.getTop() <= obstacles[0].getBottom();
  const carInsideLeft = car.getRight() >= obstacles[0].getLeft();
  const carInsideRight = car.getLeft() <= obstacles[0].getRight();
  const obstacleAvoided = car.getBottom() < obstacles[0].getTop();

  if(obstacleAvoided)
    return false;
  
  if(carOveBottom && carInsideLeft && carInsideRight)
    return true;
}