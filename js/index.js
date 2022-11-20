class GameArea {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.canvasWidth = this.canvas.width;
    this.canvasHeight = this.canvas.height;
    this.frames = 0;
  }

  startGame() {
    const roadImg = new Image();
    roadImg.src = "../images/road.png";
    this.ctx.drawImage(roadImg, 0, 0, this.canvasWidth, this.canvasHeight);

    drawGameArea();
  }
}
const gameArea = new GameArea();

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
  }

  update() {
    const ctx = gameArea.ctx;
    const carImg = new Image();
    carImg.src = "../images/car.png";
    ctx.drawImage(carImg, this.xPos, this.yPos, this.width, this.height);
  }
}

const car = new Car(210, 610, 50, 70);

function drawGameArea() {
  car.update();
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    gameArea.startGame();
  };
};
