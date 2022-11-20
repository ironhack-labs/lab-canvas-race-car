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
      // this.bottom() > obstacle.top() ||
      (
        this.top() > obstacle.bottom() ||
        this.left() > obstacle.right() ||
        this.right() < obstacle.left()
      )
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
    const maxWidth = game.width - 126 - car.width;
    const minWidth = car.width;

    const width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );

    // console.log("Obstacle width: ", width);

    const maxXValue = game.width - width - 63;
    const minXValue = 63;

    const xValue = Math.floor(
      Math.random() * (maxXValue - minXValue + 1) + minXValue
    );

    // console.log("xValue: ", xValue);

    obstacles.push(new Obstacle(xValue, 0, width, height));
  }

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].yPos += 1;
    obstacles[i].drawObstacle();
  }
}

function checkGameOver() {
  const crashed = obstacles.some((obstacle) => {
    console.log("*************************");
    console.log("car bottom: ", car.bottom());
    console.log("obstacle top: ", obstacle.top());
    console.log("car top: ", car.top());
    console.log("obstacle bottom: ", obstacle.bottom());
    console.log("car right: ", car.right());
    console.log("obstacle left: ", obstacle.left());
    console.log("car left: ", car.left());
    console.log("obstacle right: ", obstacle.right());
    console.log("*************************");
    return car.crashedWith(obstacle);
  });

  if (crashed) {
    console.log("Game over!");
    game.stopGame();
  }
}

function drawGameArea() {
  game.clearGameArea();
  game.drawBackground();
  car.updatePosition();
  car.drawCar();
  updateObstacles();
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
