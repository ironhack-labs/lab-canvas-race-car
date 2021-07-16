window.onload = () => {
  document.getElementById("start-button").addEventListener("click", startGame);
};

//canvas and the background
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//road
class Road {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "../images/road.png";
    this.speed = 2;
  }
  move() {
    this.y += this.speed;
    this.y %= canvas.height;
  }
  draw() {
    ctx.drawImage(this.img, 0, this.y);
    if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.y + canvas.height);
    } else {
      ctx.drawImage(this.img, 0, this.y - this.img.height);
    }
  }
}

let road = new Road();

//car
class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 90;
    this.speedX = 0;
    this.img = new Image();
    this.img.src = "../images/car.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    this.x -= 10;
  }
  moveRight() {
    this.x += 10;
  }
}

let car = new Car(30, 300);

//control
document.onkeydown = function (e) {
  if (e.key === "ArrowLeft") {
    car.moveLeft();
  } else if (e.key === "ArrowRight") {
    car.moveRight();
  }
};

//obstacles
let obstacles = [];
class Obstacle {
  constructor() {
    this.y = 0;
    this.x = 0;
    this.width = Math.floor(Math.random() * 60);
    this.height = 30;
    this.color = "red";
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

let frames = 0;
let updateObstacles = function () {
  frames += 1;
  console.log("frames....", frames);
  if (frames % 120 == 0) {
    let obstacle = new Obstacle();
    console.log("created new obstable... ", obstacle.width);
    obstacles.push(obstacle);
  }
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 1;
    obstacles[i].draw();
  }
};

//clear
let clearCanvas = function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
};

//crash check

//start the game
function startGame() {
  setInterval(() => {
    road.move();
    clearCanvas();
    road.draw();
    car.draw();
    updateObstacles();
  }, 20);
}
