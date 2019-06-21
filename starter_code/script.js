/* eslint-disable default-case */
/* eslint-disable func-names */
var myObstacles = [];

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};

class Car {
  constructor() {
    this.carImage = new Image();
    this.ctxcar = document.querySelector("canvas").getContext("2d");
    this.x = 120;
    this.y = 350;
    this.speedX = 0;
    this.speedY = 0;
  }

  drawCar() {
    this.carImage.src = "images/car.png";
    const that = this;
    this.carImage.onload = function() {
      that.ctxcar.drawImage(that.carImage, that.x, that.y, 70, 140);
    };
  }
}

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }
  drawComponent() {
  }
}

class Board {
  constructor() {
    this.frames = 0,
    this.canvas = document.querySelector("canvas");
    this.canvas.width = 300;
    this.canvas.height = 500;
    this.ctx = this.canvas.getContext("2d");
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawLines() {
    this.ctx.setLineDash([30, 0]);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 300, 500);

    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 6.5;

    this.ctx.beginPath();
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(15, 0, 270, 500);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(30, 0);
    this.ctx.lineTo(30, 500);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.moveTo(270, 0);
    this.ctx.lineTo(270, 500);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.lineWidth = 5;
    this.ctx.moveTo(150, 0);
    this.ctx.lineTo(150, 500);
    this.ctx.setLineDash([30, 30]);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  updateObstacles() {
    this.frames += 1;
    if (this.frames % 120 === 0) {
      var x = this.canvas.width;
      var minWidth = 20;
      var maxWidth = 220;
      var width = Math.floor(
        Math.random() * (maxWidth - minWidth + 1) + minWidth
      );
      myObstacles.push(new Component(10, width, "green", x, 0));
      myObstacles.push(
        new Component(10, x - height - gap, "green", x, height + gap)
      );
    }
  }
}



const gameArea = new Board();
const car = new Car();

function startGame() {
  gameArea.drawLines();
  car.drawCar();
}

function updateGameArea() {
  gameArea.clear();
  gameArea.drawLines();
  car.drawCar();
  gameArea.updateObstacles();
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      if (car.x > 20) {
        car.x -= 4;
        console.log(car.x);
      }
      break;
    case 39:
      if (car.x < 220) {
        car.x += 4;
        console.log(car.x)
      }
      break;
  }
  updateGameArea();
};

document.onkeyup = function(e) {
  car.speedX = 0;

  updateGameArea();
};
