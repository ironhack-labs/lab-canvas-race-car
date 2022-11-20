class GameArea {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.frames = 0;
  }

  drawBackground() {
    const roadImg = new Image();
    roadImg.src = "../images/road.png";
    this.ctx.drawImage(roadImg, 0, 0, this.canvasWidth, this.canvasHeight);
  }

  startGame() {
    this.interval = setInterval(drawGameArea, 20);
  }

  clearGameArea() {
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
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
    this.xPos += this.speed;
  }
}

const car = new Car(210, 610, 50, 70);

function drawGameArea() {
  game.clearGameArea();
  game.drawBackground();
  car.updatePosition();
  car.drawCar();
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
