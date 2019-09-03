const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const roadLeftBoundary = 9 / 72 * canvasWidth;
const roadRightBoundary = 63 / 72 * canvasWidth;
const carBumperPosition = 17 / 20 * window.innerHeight;
let obstacles = [];
let invervalID;
let highScore = 0;

let car = {
  x: 23.2 / 50 * window.innerWidth / 2,
  y: 17 / 20 * window.innerHeight,
  moveLeft: function () {
    this.x = this.x - 15 > roadLeftBoundary ? this.x - 15 : roadLeftBoundary;
  },
  moveRight: function () {
    this.x = this.x + 65 < roadRightBoundary ? this.x + 15 : roadRightBoundary - 50;
  },

  speed: 10,
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
  ctx.lineDashOffset = -car.distance % 40;
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
  const obstacleSide = Math.floor(Math.random() * 2) == 0 ? roadLeftBoundary : roadRightBoundary - obstacleLength;

  return {
    x: obstacleSide,
    y: 0,
    length: obstacleLength
  };
}

function updateObstacles(){
  const obstacleRed = "#890000"

  if(car.distance % 1200 == 0){
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

function displayScore(){
  // Display the score
  ctx.font = "24px serif";
  ctx.fillStyle = "white";
  ctx.fillText("Score: " + Math.floor(car.distance / 100), canvasWidth * 10 /72, 50);
  ctx.fillText("High Score: " + highScore, canvasWidth * 42 /72, 50);
}

function gameOver(){
  console.log("Collision");
  for(let i = 0; i <= invervalID; i++){
    clearInterval(i);
  } 
  document.onkeydown = null;
  // ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  ctx.fillStyle = "black";
  ctx.fillRect(0, canvasHeight*2/6, canvasWidth, canvasHeight/3);
  ctx.fillStyle = "#890000"
  ctx.font = "40px serif";
  ctx.fillText("Game Over!", canvasWidth * 18 / 50, canvasHeight * 20 / 50);

  ctx.fillStyle = "white"
  ctx.font = "30px serif";
  ctx.fillText("Your Final Score: " + Math.floor(car.distance / 100), canvasWidth * 15 / 50, canvasHeight * 25 / 50);

  if (highScore < Math.floor(car.distance / 100)) 
    highScore = Math.floor(car.distance / 100);
}

function checkCollision(){
  for(let i = 0; i < obstacles.length; i++){
    if (obstacles[i].y + 20 >= carBumperPosition && obstacles[i].y < carBumperPosition + 100)
    if(obstacles[i].y + 20 >= carBumperPosition && obstacles[i].x == roadLeftBoundary && obstacles[i].length + roadLeftBoundary > car.x){
      gameOver();  
    } else if (obstacles[i].y + 20 >= carBumperPosition && obstacles[i].x != roadLeftBoundary && obstacles[i].x < car.x + 50){
      gameOver();
    }
  }
}

function updateCanvas() {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawGameBoard();
  drawRoadMarkers();
  updateObstacles();
  drawCar();
  displayScore();
  checkCollision();
  car.distance += car.speed;

  // requestAnimationFrame(updateCanvas);
}

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  drawGameBoard();
  drawRoadMarkers();
  drawCar();

  function startGame() {
    obstacles = [];
    car.x = 23.2 / 50 * window.innerWidth / 2;
    car.y = 17 / 20 * window.innerHeight;
    car.distance = 0;

    document.onkeydown = function (e) {
      switch (e.keyCode) {
        case 37:
          car.moveLeft();
          break;
        case 39:
          car.moveRight();
          break;
      }
      // updateCanvas();
    }

    invervalID = setInterval(updateCanvas, 16);
    console.log(invervalID);
  }
};


