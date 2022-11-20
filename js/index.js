class GameArea {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.frames = 0;
  }

  drawBackground() {
    const roadImg = new Image();
    roadImg.src = "../images/road.png";
    this.ctx.drawImage(roadImg, 0, 0, this.width, this.height);
  }

  startGame() {
    this.interval = setInterval(drawGameArea, 20);
  }

  clearGameArea() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  stopGame() {
    clearInterval(this.interval);
  }

  countScore() {
    const points = Math.floor(this.frames / 50);
    this.ctx.font = "18px serif";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Score: ${points}`, 400, 30);
  }
}
const game = new GameArea();

class GameObject {
  constructor(xPos, yPos, width, height) {
    this.xPos = xPos;
    this.yPos = yPos;
    this.width = width;
    this.height = height;
  }

  top() {
    return this.yPos;
  }

  bottom() {
    return this.yPos + this.height;
  }

  left() {
    return this.xPos;
  }

  right() {
    return this.xPos + this.width;
  }
}

class Car extends GameObject {
  constructor(xPos, yPos, width, height) {
    super(xPos, yPos, width, height);
    this.speed = 0;
  }

  drawCar() {
    const ctx = game.ctx;
    const carImg = new Image();
    carImg.src = "../images/car.png";
    ctx.drawImage(carImg, this.xPos, this.yPos, this.width, this.height);
  }

  updatePosition() {
    if (
      this.xPos + this.width + this.speed > game.width - 63 ||
      this.xPos + this.speed < 63
    ) {
      this.xPos = this.xPos;
    } else {
      this.xPos += this.speed;
    }
  }

  crashedWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

class Obstacle extends GameObject {
  constructor(xPos, yPos, width, height) {
    super(xPos, yPos, width, height);
  }

  drawObstacle() {
    const ctx = game.ctx;
    ctx.fillStyle = "red";
    ctx.fillRect(this.xPos, this.yPos, this.width, this.height);
  }
}

const car = new Car(210, 610, 50, 70);

const obstacles = [];

function updateObstacles() {
  game.frames += 1;

  if (game.frames % 180 === 0) {
    const height = 10;
    const gap = car.width + 40;
    const maxWidth = game.width - 126 - gap;
    const minWidth = car.width;

    const width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );

    const maxX = game.width - width - 63;
    const minX = 63;

    const x = Math.floor(Math.random() * (maxX - minX + 1) + minX);

    obstacles.push(new Obstacle(x, 0, width, height));
  }

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].yPos += 1;
    obstacles[i].drawObstacle();
  }
}

function checkGameOver() {
  const crashed = obstacles.some((obstacle) => {
    return car.crashedWith(obstacle);
  });

  if (crashed) {
    game.stopGame();
  }
}

function drawGameArea() {
  game.clearGameArea();
  game.drawBackground();
  car.updatePosition();
  car.drawCar();
  updateObstacles();
  game.countScore();
  checkGameOver();
}

document.addEventListener("keydown", (event) => {
  switch (event.keyCode) {
    case 39:
      car.speed += 1;
      break;
    case 37:
      car.speed -= 1;
      break;
  }
});

document.addEventListener("keyup", () => {
  car.speed = 0;
});

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    game.startGame();
  };
};
