let canvas;
let ctx;
let car;
let arrayObstacles = []; // array para empujar los obstaculos
document.getElementById("start-button").onclick = function() {
  startGame();
  printBoard();
};

function startGame() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  car = new Car();
  car.draw();
  let interval = setInterval(printObstacles, 1000) / 60; // 60 frames por segundo by sito

  window.requestAnimationFrame(refresh); //
}

function printBoard() {
  // Weed xD
  ctx.fillStyle = "#428300";
  ctx.fillRect(0, 0, 30, 600);
  ctx.fillRect(370, 0, 30, 600);
  // Road
  ctx.fillStyle = "#808080";
  ctx.fillRect(30, 0, 340, 600);
  // Lines
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(40, 0, 10, 600);
  ctx.fillRect(350, 0, 10, 600);
  // Central Line
  ctx.beginPath();
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#FFFFFF";
  ctx.setLineDash([20, 15]);
  ctx.moveTo(200, 0);
  ctx.lineTo(200, 600);
  ctx.stroke();
  // ctx.closePath();
}

class Car {
  constructor() {
    this.x = 175;
    this.y = 480;
    this.width = 50;
    this.heigth = 100;
    this.speed = 100;
    this.dx = 2;
    this.img = new Image();
    this.img.src = "./images/car.png";
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth);
  }

  moveLeft() {
    this.speed = -this.dx * 10;
  }

  moveRight() {
    this.speed = +this.dx * 10;
  }

  move() {
    this.x += this.speed;
  }
}

function refresh() {
  ctx.clearRect(0, 0, 400, 600);
  printBoard();
  car.draw();
  randomObstacles();
  window.requestAnimationFrame(refresh);
}

class Obstacles {
  constructor() {
    this.x = Math.floor(Math.random() * (200 - 50)) + 40;
    this.y = 0;
    this.width = Math.floor(Math.random() * (200 - 40)) + 40;
    this.height = 20;
  }

  drawObstacle() {
    this.y += 3; // velocidad en la que se dibujan los obstaculos y avanzan en el eje y.
    ctx.fillStyle = "#892500";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function randomObstacles() {
  for (var i = 0; i < arrayObstacles.length; i++) {
    if (arrayObstacles[i].y > 600) {
      // si el obstaculo es mayor que el height, desaparece
      arrayObstacles.splice(i, 1);
    }
    arrayObstacles[i].drawObstacle(); // pintar elemento de la iteración en el canvas
  }
}

function printObstacles() {
  let obstacle = new Obstacles();
  arrayObstacles.push(obstacle);
}

function collisionCourse() {
  for (var i = 0; i < arrayObstacles.length; i++) {
    if (
      car.x + car.width >= obstacle[i].x &&
      obstacle[i].x + obstacle[i].width >= car.x &&
      car.y + car.height >= obstacle[i].y &&
      obstacle[i].y + obstacle[i].height >= car.y
    ) {
      console.log("hhh");
    }
  }
}
window.onkeydown = function(e) {
  switch (e.keyCode) {
    case 39: //goes to the right
      if (car.x < 323) {
        car.moveRight();
        car.move();
      }
      break;

    case 37: //goes to the left
      if (car.x > 27) {
        car.moveLeft();
        car.move();
      }

      break;
  }
};
