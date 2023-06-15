const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const roadImg = new Image();
const carImg = new Image();

roadImg.src = "../images/road.png";
carImg.src = "../images/car.png";

const car = {
  x: 0,
  y: canvas.height * 0.8,
  speed: 7,
};

let obstaclesNum = 5;
const obstaclesSpeed = 1.5;
const obstaclesThickness = 12;
const obstacles = [];

let readyToScore = true;
let score = 0;
let gameOver = false;
let animateId;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  document.addEventListener("keydown", handleKeyDown);
  document.addEventListener("keyup", handleKeyUp);
};

function handleKeyDown(event) {
  if (event.key === "a" || event.key === "A" || event.key === "ArrowLeft")
    car.isMovingLeft = true;
  if (event.key === "d" || event.key === "D" || event.key === "ArrowRight")
    car.isMovingRight = true;
}

function handleKeyUp(event) {
  if (event.key === "a" || event.key === "A" || event.key === "ArrowLeft")
    car.isMovingLeft = false;
  if (event.key === "d" || event.key === "D" || event.key === "ArrowRight")
    car.isMovingRight = false;
}

carImg.onload = () => {
  const carRatio = carImg.height / carImg.width;
  car.width = canvas.width * 0.1;
  car.height = car.width * carRatio;
  car.x = (canvas.width - car.width) / 2;
};

function generateX() {
  return Math.random() * 0.5 * canvas.width;
}

function startGame() {
  document.querySelector(".game-intro").style.display = "none";
  canvas.style.display = "block";

  for (let i = 0; i < obstaclesNum; i++) {
    obstacles[i] = {
      x: generateX(),
      width: generateX(),
      y: (canvas.height / (obstaclesNum - 1)) * i - canvas.height - obstaclesThickness,
      height: obstaclesThickness,
    };
  }

  animate();
}

function drawCar() {
  ctx.drawImage(carImg, car.x, car.y, car.width, car.height);
}

function drawObstacles() {
  ctx.beginPath();
  ctx.fillStyle = "darkred";
  obstacles.forEach((obstacle) => {
    ctx.rect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
  ctx.fill();
  ctx.closePath();
}

function gameOverText() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.style.backgroundColor = "black";
  ctx.textAlign = "center";
  ctx.font = "bold 50px sans-serif";
  ctx.fillStyle = "darkred";
  ctx.fillText(`Game Over!`, canvas.width / 2, canvas.height / 2 - 70);
  ctx.fillStyle = "white";
  ctx.fillText(`Your final score`, canvas.width / 2, canvas.height / 2);
  ctx.fillText(score, canvas.width / 2, canvas.height / 2 + 70);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
  drawCar();
  drawObstacles();

  if (car.isMovingLeft && car.x > 50) car.x -= car.speed;
  if (car.isMovingRight && car.x < canvas.width - car.width - 50)
    car.x += car.speed;

  obstacles.forEach((obstacle) => {
    obstacle.y += obstaclesSpeed;
    if (obstacle.y >= canvas.height) {
      obstacle.y = -canvas.height / (obstaclesNum - 1);
      obstacle.x = generateX();
      obstacle.width = generateX();
      readyToScore = true;
    }

    if (
      obstacle.y + obstacle.height > car.y &&
      obstacle.y < car.y + car.height
    ) {
      if (car.x < obstacle.x + obstacle.width && car.x + car.width > obstacle.x)
        gameOver = true;
    }

    if (readyToScore) {
      if (obstacle.y > car.y + car.height) {
        score += 1;
        readyToScore = false;
        console.log(score);
      }
    }

    ctx.font = "24px sans-serif";
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${score}`, 70, 30);
  });

  if (gameOver) {
    console.log("game over!!!");
    cancelAnimationFrame(animateId);
    gameOverText();
  } else {
    animateId = requestAnimationFrame(animate);
  }
}
