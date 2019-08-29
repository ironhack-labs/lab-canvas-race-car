const myCanvasDOMEl = document.querySelector("#myCanvas");
const ctx = myCanvasDOMEl.getContext("2d");
const w = window.innerWidth;
const h = window.innerHeight;
const w2 = w / 2;
const h2 = h / 2;
const PI = Math.PI;
const PI_DOUBLE = Math.PI * 2;
const PI_HALF = Math.PI / 2;
const speed = 10;
let counter = 0;

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

myCanvasDOMEl.setAttribute("width", `450px`);
myCanvasDOMEl.setAttribute("height", `700px`);

class Car {
  constructor(ctx) {
    this.positions = {
      x: 175,
      y: 485
    };
    this.ctx = ctx;
    this.gameCharacter = new Image();
    this.gameCharacter.src = "./images/car-red-small.png";

    // this.gameCharacter.onload = () => {
    //   ctx.drawImage(this.gameCharacter, this.positions.x, this.positions.y);
    // };
  }

  drawCar() {
    ctx.drawImage(this.gameCharacter, this.positions.x, this.positions.y);
  }

  moveLeft() {
    this.positions.x >= 45 ? (this.positions.x -= speed) : 0;
  }
  moveRight() {
    this.positions.x <= 310 ? (this.positions.x += speed) : 0;
  }
}

class Obstacle {
  constructor (ctx) {
    this.positions = {
      x: randomInt(50,400),
      y: randomInt(10, 300)
    };
    this.ctx = ctx;
    this.newObstacle = new Image();
    this.newObstacle.src = "./images/cono.png";
  }
  drawObstacle() {
    ctx.drawImage(this.newObstacle, this.positions.x, this.positions.y);
  }
}

function drawBackground() {
  ctx.beginPath();
  ctx.rect(0, 0, 450, 700); //Draws a filled rectangle.
  ctx.fillStyle = "#12802f";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(30, 0, 390, 700); //Draws a filled rectangle.
  ctx.fillStyle = "grey";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(40, 0, 10, 700); //Draws a filled rectangle.
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.rect(400, 0, 10, 700); //Draws a filled rectangle.
  ctx.fillStyle = "white";
  ctx.fill();
  ctx.closePath();

  ctx.beginPath();
  ctx.setLineDash([50, 30]);
  ctx.strokeStyle = `white`;
  ctx.lineWidth = 10;
  ctx.lineDashOffset = -counter * 4;
  ctx.moveTo(222.5, 0);
  ctx.lineTo(225.5, 700);
  ctx.stroke();
  ctx.closePath();
}

function clearScreen() {
  ctx.clearRect(0, 0, 450, 700);
}

// let obstacleCounter = 0
// function moveObstacles() {
  
//   setInterval(() => {
//     obstacleCounter++
//     obstacle.positions.y += counter;
//   }, 100)
  // obstacle.positions.y += counter;
// }


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    let car = new Car(ctx);
    let obstacle = new Obstacle(ctx);
    //No entiendo muy bien por qué si saco esto de abajo de la función deja de funcionar todo.
    window.onkeydown = function(e) {
      switch (e.key) {
        case "ArrowLeft":
          car.moveLeft();
          break;
        case "ArrowRight":
          car.moveRight();
          break;
      }
    };

    setInterval(() => {
      clearScreen();
      drawBackground();
      counter++;
      car.drawCar();
      obstacle.drawObstacle()
      moveObstacles()
    }, 10);
  }
};
