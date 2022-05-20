const gameoverContainer = document.querySelector("#endContainer");
const pointsCountContainer = document.querySelector("#pointsCount");

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  document.getElementById("restart-button").onclick = () => {
    cleanGameboard();
    startGame();
  };

  function startGame() {
    moyObstacleArray = [];

    drawEverything();

    document.addEventListener("keydown", listenToArrowKeys);

    // create obstacle every 2sec
    const newObstacle = new Obstacle();
    moyObstacleArray.push(newObstacle);
    const obstacleCreationInterval = setInterval(() => {
      const newObstacle = new Obstacle();
      moyObstacleArray.push(newObstacle);
    }, 2000);

    // move obstacle every 0.1sec
    const obstacleMovmentInterval = setInterval(() => {
      moyObstacleArray.forEach((obstacle) => {
        obstacle.move();
        clearCanvas();
        drawEverything();
      });
    }, 100);

    // Detect colision and track score
    const colisionScoreInterval = setInterval(() => {
      points = trackScore(moyObstacleArray);
      detectColision(
        moyObstacleArray,
        obstacleCreationInterval,
        obstacleMovmentInterval,
        colisionScoreInterval,
        points
      );
    }, 100);
  }
};

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

// My images
const backgroundImage = new Image();
backgroundImage.src = "./images/road.png";

const carImage = new Image();
carImage.src = "./images/car.png";

// Car object
const car = {
  width: 100,
  height: 190,
  x: canvas.width / 2 - 100 / 2,
  y: canvas.height - 190 - 10,

  move(event) {
    if (event.code === "ArrowRight") {
      if (this.x > canvas.width - 50 - this.width) {
        return;
      }
      this.x += 50;
      console.log("right");
    }
    if (event.code === "ArrowLeft") {
      if (this.x < 50) {
        return;
      }
      this.x -= 50;
      console.log("left");
    }
  },
  draw() {
    drawImage(carImage, this.x, this.y, this.width, this.height);
  },
};

// Draw function
function drawImage(image, x, y, width, height) {
  if (width && height) {
    context.drawImage(image, x, y, width, height);
  } else {
    context.drawImage(image, x, y);
  }
}

function drawBackground() {
  drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
}

function drawEverything() {
  drawBackground();
  car.draw();
  if (moyObstacleArray) {
    moyObstacleArray.forEach((obstacle) => {
      obstacle.draw();
    });
  }
}

function clearCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

class Obstacle {
  constructor() {
    this.width = 75 + Math.floor(Math.random() * 175);
    this.height = 20;
    this.color = "red";
    this.x = Math.floor(Math.random() * (canvas.width - this.width));
    this.y = 0;
  }
  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  move() {
    this.y += 30;
  }
}

function detectColision(
  obstacleArray,
  obstacleCreationInterval,
  obstacleMovmentInterval,
  colisionScoreInterval,
  points
) {
  for (let obstacle of obstacleArray) {
    if (
      car.x + car.width >= obstacle.x &&
      car.x <= obstacle.x + obstacle.width &&
      car.y <= obstacle.y + obstacle.height &&
      car.y + car.height >= obstacle.y
    ) {
      // collision detected!
      console.log("collision");
      clearInterval(obstacleCreationInterval);
      clearInterval(obstacleMovmentInterval);
      clearInterval(colisionScoreInterval);

      gameoverContainer.style.display = "flex";
      const gameoverScore = document.querySelector("#gameoverScore");
      gameoverScore.textContent = `Your final score is: ${points}`;
    }
  }
}

function trackScore(obstacleArray) {
  let pointsCount = 0;
  pointsCountContainer.style.display = "block";
  for (const obstacle of obstacleArray) {
    if (obstacle.y > car.y + car.height) {
      pointsCount += 1;
      pointsCountContainer.textContent = `Score: ${pointsCount}`;
    }
  }
  return pointsCount;
}

function cleanGameboard() {
  gameoverContainer.style.display = "none";
  pointsCountContainer.textContent = `Score: 0`;
  document.removeEventListener("keydown", listenToArrowKeys);
}

function listenToArrowKeys(event) {
  car.move(event);
  clearCanvas();
  drawEverything();
}
