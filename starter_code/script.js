const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight;
canvasWidth = canvas.width;
canvasHeight = canvas.height;

const obstacles = [];

let car = {
  x: 23.2 / 50 * window.innerWidth / 2,
  y: 17 / 20 * window.innerHeight,
  moveLeft: function () { this.x -= 5},
  moveRight: function () { this.x += 5},

  distance: 0
};

function drawGameBoard() {
  // Colors
  asphaltGray = "#808080";
  grassGreen = "#008100";
  // markerWhite = "#F3F3F3";

  ctx.fillStyle = asphaltGray;

  // Draws the main road
  ctx.fillRect((9 / 72 * canvasWidth), 0, 27 / 36 * canvasWidth, canvasHeight);

  // Draws the curb
  ctx.fillRect(canvasWidth / 12, 0, canvasWidth / 36, canvasHeight);
  ctx.fillRect((32 / 36 * canvasWidth), 0, canvasWidth / 36, canvasHeight);

  // Draws the grass
  ctx.fillStyle = grassGreen;
  ctx.fillRect(0, 0, canvasWidth / 12, canvasHeight);
  ctx.fillRect((11 / 12 * canvasWidth), 0, canvasWidth / 12, canvasHeight);
}

function drawRoadMarkers() {
  markerWhite = "#F3F3F3";

  ctx.strokeStyle = markerWhite;
  ctx.lineWidth = canvasWidth / 130;
  ctx.lineDashOffset = -car.distance*5 % 40;
  ctx.setLineDash([canvasHeight / 30, canvasWidth / 40]);
  ctx.moveTo((canvasWidth / 2), 0);
  ctx.lineTo((canvasWidth / 2), canvasHeight);
  ctx.stroke();
}

function drawCar() {
  img = new Image();
  img.src = "./images/car.png";

  img.onload = function () {
    ctx.drawImage(img, car.x, car.y, 50, 100);
  }
}

function generateObstacle(){
  const minLength = 27 / 36 * canvasWidth * 0.35;
  const maxLength = 27 / 36 * canvasWidth - 75;
  const obstacleLength = Math.floor(Math.random() * (maxLength - minLength) + 1) + minLength;
  const obstacleSide = Math.floor(Math.random() * 2) == 0 ? 9 / 72 * canvasWidth : 63 / 72 * canvasWidth - obstacleLength;

  return {
    x: obstacleSide,
    y: 0,
    length: obstacleLength
  };
}

function updateObstacles(){
  const obstacleRed = "#890000"

  if(car.distance % 250 == 0){
    obstacles.push(generateObstacle());
  }

  for(let i = 0; i < obstacles.length; i++){
    obstacles[i].y += 2;

    if(obstacles[i].y > canvasHeight){
      obstacles.splice(i, 1);
    }

    ctx.fillStyle = obstacleRed;
    ctx.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].length, 20)
  }
}

function updateCanvas() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawGameBoard();
  drawRoadMarkers();
  updateObstacles();
  drawCar();
  car.distance += 5;
}

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  drawGameBoard();
  drawRoadMarkers();
  drawCar();

  function startGame() {

    document.onkeydown = function (e) {
      switch (e.keyCode) {
        case 37:
          car.moveLeft();
          break;
        case 39:
          car.moveRight();
          break;
      }
      // car.distance -= 5;
      updateCanvas();
    }

    setInterval(updateCanvas, 50);
    // updateCanvas();
  }
};


