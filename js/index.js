let selection = document.querySelectorAll("input");
let scoreLabel = document.querySelector(".score");
let finalScoreLabel = document.querySelector(".finalScore");

class Sprite {
  constructor(x, y, width, height, image, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = image;
    this.speed = speed;
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  loadImage() {
    const newImage = new Image();
    newImage.src = this.image;
    this.image = newImage;
    this.draw();
  }
}

class Road extends Sprite {
  constructor() {
    super(0, -50, 400, 650, "./images/road.png", 5);
  }
}

class Car extends Sprite {
  constructor() {
    super(170, 470, 55, 110, "./images/car.png", 0);
  }

  moving(e) {
    if (e.keyCode === 37) {
      this.speed = -carSpeed;
    }
    if (e.keyCode === 39) {
      this.speed = carSpeed;
    }
  }

  stop() {
    this.speed = 0;
  }
}

class Obstacle extends Sprite {
  constructor(x, y, width, height, image, speed) {
    super(x, y, width, height, image, speed);
  }

  move(e) {
    this.y += globalSpeed - 1;
  }

  reset(e) {}
}

let canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

const obstacleImages = [
  { link: "./images/obs1.png", width: 235, height: 47 },
  { link: "./images/obs2.png", width: 47, height: 72 },
  { link: "./images/obs3.png", width: 203, height: 55 },
  { link: "./images/obs4.png", width: 224, height: 64 },
];

let score = 0;
const road = new Road();
const car = new Car();
let difficulty = 4;
let nextObstacle = 0;
let roadY = 46;
let globalSpeed = 0;
const carSpeed = 15;
const cushion = 10;
const obstacles = [];
function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  road.draw();
  car.draw();
  for (i = 0; i < obstacles.length; i++) {
    obstacles[i].draw();
  }
}

function moveObstacles() {
  for (i = 0; i < obstacles.length; i++) {
    obstacles[i].move();
  }
}

function moveCar() {
  roadY += globalSpeed;
  if (roadY >= -1) roadY = -46;
  road.y = roadY;

  if (car.x < 20 && car.speed < 0) car.stop();
  if (car.x > 320 && car.speed > 0) car.stop();
  car.x += car.speed;
}

function createObstacle() {
  nextObstacle++;
  if (nextObstacle >= difficulty * 10) {
    nextObstacle = 0;
    let randomObstacle = Math.floor(Math.random() * 4);

    obstacles.push(
      new Obstacle(
        Math.floor(
          Math.random() * (380 - obstacleImages[randomObstacle].width)
        ),
        -120,
        obstacleImages[randomObstacle].width,
        obstacleImages[randomObstacle].height,
        obstacleImages[randomObstacle].link,
        0
      )
    );
    obstacles[obstacles.length - 1].loadImage();
  }
}
function destroyObstacle() {
  for (i = 0; i < obstacles.length; i++) {
    if (obstacles[i].y > 575) {
      obstacles.splice(i, 1);
      score += 10;
      scoreLabel.innerHTML = `SCORE: ${score}`;
      finalScoreLabel.innerHTML = `YOUR FINAL SCORE IS ${score}`;
    }
  }
}

function checkCollision() {
  for (i = 0; i < obstacles.length; i++) {
    if (
      obstacles[i].x + cushion < car.x + car.width &&
      obstacles[i].x + obstacles[i].width > car.x + cushion &&
      obstacles[i].y + cushion < car.y + car.height &&
      obstacles[i].height + obstacles[i].y > car.y + cushion
    )
      return true;
  }
}

function drawInitialBoard() {
  road.loadImage();
  road.image.onload = function () {
    road.draw();
  };
}

drawInitialBoard();

async function startGame() {
  if (selection[0].checked) {
    globalSpeed = 8;
    difficulty = 7;
  }
  if (selection[1].checked) {
    globalSpeed = 10;
    difficulty = 5;
  }
  if (selection[2].checked) {
    globalSpeed = 17;
    difficulty = 4;
  }
  document.addEventListener("keydown", (e) => {
    car.moving(e);
  });
  document.addEventListener("keyup", (e) => {
    car.stop(e);
  });

  car.loadImage();

  let play = setInterval(() => {
    moveCar();
    moveObstacles();
    createObstacle();
    destroyObstacle();
    if (!checkCollision()) {
      redraw();
    } else {
      clearInterval(play);
      $("#myModal").modal("show");
    }
  }, 33);
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};
