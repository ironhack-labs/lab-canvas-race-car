let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
const myObstacles = [];

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

function startGame() {
  road.loadRoad();
  road.start();
  player.loadPlayer();
}

function updateGameArea() {
  road.clear();
  road.loadRoad();
  player.loadPlayer();
  player.updateScore(road);
  updateObstacles();
}

class Road {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.velocity = 50;
    this.roadImg = new Image();
    this.roadImg.src = "./images/road.png";
    this.interval = "";
    this.frames = 0;
  }

  start() {
    this.interval = setInterval(updateGameArea, 20);
  }

  loadRoad() {
    ctx.drawImage(this.roadImg, this.x, this.y, 500, 700);
  }

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

class Player {
  constructor() {
    this.x = 225;
    this.y = 600;
    this.velocity = 10;
    this.carImg = new Image();
    this.carImg.src = "./images/car.png";
    this.score = 0;
  }

  loadPlayer() {
    ctx.drawImage(this.carImg, this.x, this.y, 50, 75);
  }
  updateScore(road) {
    const points = Math.floor(road.frames / 50);
    ctx.font = "18px serif";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${points}`, 225, 25);
  }
}

class Obstacle {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.obstacles = [];
  }

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const road = new Road();
const player = new Player();

document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft") {
    player.x -= player.velocity;
  } else if (e.key == "ArrowRight") {
    // right arrow
    player.x += player.velocity;
  }
});

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }
  road.frames += 1;
  if (road.frames % 120 === 0) {
    let x = canvas.width;
    let minWidth = 50;
    let maxWidth = 200;
    let width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    let startPlaceX = Math.floor(Math.random() * parseInt(x));
    myObstacles.push(new Obstacle(width, 10, "red", startPlaceX, 0));
  }
}
