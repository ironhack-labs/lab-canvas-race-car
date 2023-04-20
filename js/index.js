const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const roadImg = document.getElementById("road");
const carImg = document.getElementById("car");

let car = {
  x: 225,
  y: 600,
  width: 50,
  height: 100,
};

let road = {
  x: 0,
  y: 0,
  width: 500,
  height: 700,
};

let obstacles = [];
let obstacleSpeed = 3;
let obstacleInterval;

let score = 0;

function drawRoad() {
  ctx.drawImage(roadImg, road.x, road.y, road.width, road.height);
}

function drawCar() {
  ctx.drawImage(carImg, car.x, car.y, car.width, car.height);
}

function drawObstacle() {
  for (let i = 0; i < obstacles.length; i++) {
    ctx.fillStyle = "#870007";
    ctx.fillRect(
      obstacles[i].x,
      obstacles[i].y,
      obstacles[i].width,
      obstacles[i].height
    );
  }
}

function moveObstacle() {
  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += obstacleSpeed;
  }
}

function generateObstacle() {
  const obstacleWidth = 50 
  const obstacleX = Math.random() * (road.width - obstacleWidth);
  const obstacle = {
    x: obstacleX,
    y: 0,
    width: obstacleWidth,
    height: 20,
  };
  obstacles.push(obstacle);
}

function updateScore() {
  score++;
  document.getElementById("score").innerText = "Score: " + score;
}

function checkCollision() {
  for (let i = 0; i < obstacles.length; i++) {
    if (
      car.x < obstacles[i].x + obstacles[i].width &&
      car.x + car.width > obstacles[i].x &&
      car.y < obstacles[i].y + obstacles[i].height &&
      car.y + car.height > obstacles[i].y
    ) {
      clearInterval(obstacleInterval);
      alert("Game Over! Your score is " + score);
      location.reload();
    }
  }
}

document.addEventListener("keydown", function (event) {
  if (event.code === "ArrowLeft" && car.x > 0) {
    car.x -= 20;
  } else if (event.code === "ArrowRight" && car.x < road.width - car.width) {
    car.x += 20;
  }
});

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawRoad();
  drawCar();
  drawObstacle();
  moveObstacle();
  checkCollision();

  if (obstacles.length === 0 || obstacles[obstacles.length - 1].y > 150) {
    generateObstacle();
  }
   else if (obstacles[obstacles.length - 1].y > 50) {
    generateObstacle();
  }

  updateScore();
}

document.getElementById("start-button").onclick = function () {
  obstacleInterval = setInterval(gameLoop, 20);
  this.disabled = true;
};










