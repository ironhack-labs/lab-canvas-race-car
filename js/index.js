const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const roadImg = new Image();
const carImg = new Image();

const carHeight = 550;
const ObstArray = [];

let counter = -1;

roadImg.src = "/images/road.png";

class Obstacle {
  constructor() {
    this.width = 125;
    this.height = 25;
    this.x = Math.floor(Math.random() * 400) + 1;
    this.y = 0;
    this.speed = 20;
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.y += this.speed;
  }
}

const car = {
  x: 225,
  y: 575,
  speed: 25,
  moveLeft: function () {
    if (this.x < 25) {
      this.x = this.x;
    } else {
      this.x -= this.speed;
    }
  },
  moveRight: function () {
    if (this.x > 425) {
      this.x = this.x;
    } else {
      this.x += this.speed;
    }
  },
};

const Obst = new Obstacle();

function drawRoad() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
}

function draw(car) {
  const carImg = new Image();
  carImg.onload = function () {
    ctx.drawImage(carImg, car.x, car.y, 50, 100);
  };
  carImg.src = "/images/car.png";
}

function drawObs() {
  Obst.draw();
  Obst.move();
}

function addCounter() {
  counter++;
}

function drawPoints(score) {
  ctx.font = "48px serif";
  ctx.strokeText(`Score ${score}`, 30, 60);
}

function updateCanvas() {
  ctx.clearRect(0, 0, 500, 700);
  draw(car);
  drawRoad();
  drawObs();
  addCounter();
  drawPoints(counter);
}

function startGame() {
  drawRoad();
  draw(car);
  drawObs();
  addCounter();
  drawPoints(counter);
}

const startButton = document.getElementById("start-button");
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
    startButton.disabled = true;
    setInterval(updateCanvas, 350);
  };
};

document.onkeydown = function (e) {
  switch (e.key) {
    case "ArrowLeft":
      car.moveLeft();
      console.log("left", car);
      break;
    case "ArrowRight":
      car.moveRight();
      console.log("right", car);
      break;
  }
  updateCanvas();
};
