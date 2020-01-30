const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  }
};
let gameIsRunning = true;

//--CAR-------------------------
class Car {
  constructor() {
    this.positionX = 220;
    this.positionY = 420;
    this.speed = 20;
    this.setKeyboardEventListeners();
  }

  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.key) {
        case 'ArrowLeft':
          console.log("Left")
          this.positionX -= this.speed
          break;
        case 'ArrowRight':
          console.log("Right")
          this.positionX += this.speed
          break;
      }
    });
  }

  paint() {
    const carUrl = './images/car.png';
    const imageCar = new Image();
    imageCar.src = carUrl;
    console.log("paint has been called")
    imageCar.addEventListener("load", () => {
      context.drawImage(imageCar, this.positionX, this.positionY, 50, 100);
    })
  }
}

//---New Car:------------------------
const car = new Car();

//---CLEAN CANVAS---------------------------
const cleanCanvas = () => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
};

//---ROAD:------------------------
const drawRoad = () => {
  context.strokeStyle = "#fff"
  context.fillStyle = 'green'
  context.fillRect(0, 0, 420, 600)
  context.fillStyle = "gray"
  context.fillRect(30, 0, 360, 600)
  context.setLineDash([0])
  context.lineWidth = 10
  context.beginPath()
  context.moveTo(40, 0)
  context.lineTo(40, 600)
  context.stroke()
  context.beginPath()
  context.moveTo(380, 0)
  context.lineTo(380, 600)
  context.stroke()
  context.beginPath()
  context.lineWidth = 5
  context.setLineDash([30, 20])
  context.moveTo(211, 610);
  context.lineTo(211, 0);
  context.stroke();
};

const loop = timestamp => {
  drawRoad();
  car.paint();
  cleanCanvas();

  if (gameIsRunning) {
    window.requestAnimationFrame(loop);
  }

};

function startGame() {
  loop();
};

