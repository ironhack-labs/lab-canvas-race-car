const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
const carSize = 158;
let x = 260;
let y = 400;
let index = 2;
let arrayObstacle = [];


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
    if (index !== 1) {
      index -= 1;
      x -= carSize;
      car();
    }
  }

  function moveRight() {
    if (index !== 3) {
      index += 1;
      x += carSize;
      drawCar();
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
    road();
    // car();
    // obstacle(220, 0);
    // pickObstacle();
    setInterval(function () {
      pickObstacle();
    }, 2000);

    setInterval(function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      road();
      drawCar();
      arrayObstacle.forEach(element => {
        console.log(element);
        element.y += 1;
        obstacle(element.x, element.y);
      });
    }, 10);
  }

};
    // function car() {
    //   road();
    //   pickObstacle();
    //   drawCar();
    // }