let frames = 0;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  }

  function startGame() {
    setInterval(updateGame, 20);
  }
};

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

class Game {
  constructor(x, y, width, height) {
    this.img = new Image();
    this.img.src = "./images/road.png";
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.score = 0;
  }

  drawRoad() {
    // drawImage(img, x, y, width, height)
    context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  clearRoad() {
    context.clearRect(this.x, this.y, this.width, this.height);
  }
}

class Car {
  constructor(x, y, width, height) {
    this.img = new Image();
    this.img.src = "./images/car.png";
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 5;
  }

  drawCar() {
    // this.moveCar(direction)
    context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }s

  clearCar() {
    context.clearRect(this.x, this.y, this.width, this.height);
  }

  detectWalls() {
    if (this.x < 50) {
      this.x = 50;
    } else if (this.x + this.width > 450) {
      this.x = 450 - this.width;
    }
  }

  colidingObstacles() {
    if (this.x + this.width === obstacles.y) {
      return true;
    } else if (this.x === obstacles.y + obstacles.width) {
      return true;
    } else if (this.y + this.width === obstacles.y) {
      return true;
    } else if (this.y === obstacles.y + obstacles.width) {
      return true;
    } else {
      return true;
    }
  }
}

class Obstacles {
  constructor(x, width) {
    // this.img = new Image();
    // this.img.src = "./images/car.png";
    this.x = x;
    this.y = 0;
    this.width = width;
  }

  drawObstacle() {
    context.fillRect(this.x, this.y, this.width, 50);
    context.fillStyle = "#890000";    
  }

  movingObstacle() {
    this.y += 2;
  }
}

const road = new Game(0, 0, 500, 700);
const car = new Car(225, 600, 50, 70);
const obstaclesArr = [];

function updateGame() {
  road.clearRoad();
  road.drawRoad();
  car.drawCar();
  if (frames % 150 === 0) {
    addObstacle();
  }
  obstaclesArr.forEach((obs) => {
    obs.movingObstacle();
    obs.drawObstacle();
  });
  frames += 1;
}

function addObstacle() {
  const obstacleWidth = Math.round(Math.random() * 200) + 100;
  const obdstacleX = Math.floor(Math.random() * (500 - obstacleWidth));
  const obstacle = new Obstacles(obdstacleX, obstacleWidth);
  // obstacle.drawObstacle();
  obstaclesArr.push(obstacle);
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
  car.detectWalls();
});