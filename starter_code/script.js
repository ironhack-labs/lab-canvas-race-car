const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
const carSize = 158;
let x = 260;
let y = 400;
let index = 2;
let arrayObstacle = [];
let score = 0;
const scale = (158 / 319) * 150;

function textGameOver() {
  ctx.font = "60px Arial";
  ctx.fillStyle = "black";
  ctx.fillText("Game Over", 127, 250);
}

function textScore() {
  ctx.font = "30px Arial";
  ctx.fillStyle = "white";
  ctx.fillText("Score: " + score, 60, 30);
}

function rectangle(x, y, wh, hh) {
  ctx.beginPath();
  ctx.rect(x, y, wh, hh);
  ctx.fill();
  ctx.closePath();
}

function random() {
  return Math.floor(Math.random() * 3);
}

function pickObstacle() {
  switch (random()) {
    case 0:
      arrayObstacle.push(new Obstacle(90, 0));
      break;
    case 1:
      arrayObstacle.push(new Obstacle(220, 0));
      break;
    case 2:
      arrayObstacle.push(new Obstacle(350, 0));
      break;
  }
}

function drawDashedLine(pattern) {
  ctx.beginPath();
  ctx.setLineDash(pattern);
  ctx.moveTo(300, 0);
  ctx.lineTo(300, 600);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 10;
  ctx.stroke();
}

function road() {
  ctx.fillStyle = "#008100";
  rectangle(0, 0, 30, 600);
  rectangle(570, 0, 30, 600);
  ctx.fillStyle = "white";
  rectangle(40, 0, 15, 600);
  rectangle(545, 0, 15, 600);
  drawDashedLine([20, 20]);
}

function drawCar() {
  const img = new Image();
  let imgScale = 158 / 319;
  img.onload = function () {
    ctx.drawImage(img, x, y, 150 * imgScale, 150);
  };
  img.src = "../starter_code/images/car.png"
}

function obstacle(x, y) {
  ctx.fillStyle = "#890000";
  rectangle(x, y, 150, 30);
}

function Obstacle(x) {
  this.x = x
  this.y = 0;
}

window.onload = function () {
  road();
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37:
        move("left");
        break;
      case 39:
        move("right");
        break;
    }
  }

  function moveLeft() {
    if (index !== 0) {
      if (index !== 1) {
        index -= 1;
        x -= carSize;
        drawCar();
      }
    }
  }

  function moveRight() {
    if (index !== 0) {
      if (index !== 3) {
        index += 1;
        x += carSize;
        drawCar();
      }
    }
  }

  function move(direction) {
    switch (direction) {
      case "left":
        moveLeft();
        break;
      case "right":
        moveRight();
        break;
    }
  }

  function startGame() {
    x = 260;
    index = 2;
    arrayObstacle = [];
    score = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    road();

    let createObstacle = setInterval(function () {
      pickObstacle();
    }, 3000);

    let render = setInterval(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawCar();
      road();
      textScore();

      for (let i = 0; i < arrayObstacle.length; i++) {
        if ((x < arrayObstacle[i].x + 150) && (x + scale > arrayObstacle[i].x) && (y < arrayObstacle[i].y + 30) && (y + 150 > arrayObstacle[i].y)) {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          clearInterval(createObstacle);
          clearInterval(render);
          road();
          textGameOver();
          index = 0;
          break;
        } else {
          if (arrayObstacle[i].y === canvas.height) {
            score += 1;
            arrayObstacle.splice(arrayObstacle[i], 1);
            console.log(arrayObstacle.length);
          } else {
            arrayObstacle[i].y += 1;
            obstacle(arrayObstacle[i].x, arrayObstacle[i].y);
          }
        }
      }

    }, 15);
  }
};