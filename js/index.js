const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let gameFrames = 0;
let obstacles = [];
let obstacleInterval = 160;
let isGameOver = false;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.speed = 2;
    this.img = new Image();
    this.img.src = "../images/road.png";
    this.img.onload = () => {
      this.draw();
    };
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.img,
      this.x,
      this.y - this.height,
      this.width,
      this.height
    );
  }

  update() {
    this.y += this.speed;
    if (this.y > canvas.height) {
      this.y = 0;
    }
  }
}

class Car {
  constructor() {
    this.x = canvas.width / 2 - 30;
    this.y = canvas.height - 120;
    this.width = 60;
    this.height = 100;
    this.img = new Image();
    this.img.src = "../images/car.png";
    this.img.onload = () => {
      this.draw();
    };
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    if (this.x > 45) {
      this.x -= 7;
    }
  }
  moveRight() {
    if (this.x < 400) {
      this.x += 7;
    }
  }
}

class Obstacle {
  constructor(x, width) {
    this.x = x;
    this.y = 0;
    this.width = width;
    this.height = 20;
  }

  draw() {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  update() {
    this.y += 2;
  }
}

function startGame() {
  gameFrames = 0;
  obstacles = [];
  gameArea = new Background();
  playerCar = new Car();
  isGameOver = false;
  gameLoop();
}

function checkCollision(rect1, rect2) {
  return (
    rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y
  );
}

function gameOver() {
  ctx.fillStyle = "black";
  ctx.font = "48px Arial";
  ctx.fillText("Game Over", canvas.width / 2 - 100, canvas.height / 2);
}

function gameLoop() {
  if (isGameOver) {
    return;
  }

  gameFrames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  gameArea.update();
  gameArea.draw();
  playerCar.draw();

  if (gameFrames % obstacleInterval === 0) {
    const width = 200;
    const leftBoundary = 45;
    const rightBoundary = 460;
    const maxObstacleX = rightBoundary - width;
    const x = Math.floor(
      Math.random() * (maxObstacleX - leftBoundary) + leftBoundary
    );
    const obstacle = new Obstacle(x, width);
    obstacles.push(obstacle);
  }

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].update();
    obstacles[i].draw();
    if (obstacles[i].y > canvas.height) {
      obstacles.splice(i, 1);
      i--;
    }
  }

  for (const obstacle of obstacles) {
    if (checkCollision(playerCar, obstacle)) {
      isGameOver = true;
      gameOver();
      break;
    }
  }
  requestAnimationFrame(gameLoop);
}

document.addEventListener("keydown", function (e) {
  if (e.key == "ArrowLeft") {
    playerCar.moveLeft();
  }
  if (e.key == "ArrowRight") {
    playerCar.moveRight();
  }
});
