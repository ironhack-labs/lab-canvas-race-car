let frames = 0;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  function startGame() {
    const gameInterval = setInterval(updateGame, 30);
    
  }
};

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");


class Road {
  constructor(x, y, width, height) {
    this.img = new Image();
    this.img.src = "./images/road.png";
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.frames = 0;
  }

  drawRoad() {
    context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  clearRoad() {
    context.clearRect(this.x, this.y, this.width, this.height);
  }
}

class Car {
  constructor(x, y, width, height) {
    this.img = new Image();
    this.img.src = "./images/car.png";
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    
  }

  drawCar() {
    context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }


  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  moveCar(direction) {
    direction === "left" ? (this.x -= 1) : (this.x += 1);
  }
  detectWalls() {
    if (this.x < 0) {
      this.x = 0;
    }
    if (this.x + this.width > 500) {
      this.x = 500 - this.width;
    }
  }
}

class Obstacles {
  constructor(x, width) {
    this.x = x;
    this.y = 0;
    this.width = width;
  }

  drawObstacle() {
    context.fillRect(this.x, this.y, this.width, 50);
    context.fillStyle = '#860000';
    
  }
  movingObstacle() {
    this.y += 1;
  }
}

const road = new Road (0, 0, 500, 700);
const car = new Car(225, 630, 50, 70);
const obstaclesArray = [];

function updateGame() {
  road.clearRoad();
  road.drawRoad();
  car.drawCar();
  car.detectWalls();
  if (frames % 150 === 0) {
    addObstacle();
  }
  obstaclesArray.forEach((obs) => {
    obs.movingObstacle();
    obs.drawObstacle();
  });
  frames += .5;
  crashWithObstocle();
}

function addObstacle() {
  const obstacleWidth = Math.round(Math.random() * 250) + 100;
  const obstacleX = Math.floor(Math.random() * (500 - obstacleWidth));
  const obstacle = new Obstacles(obstacleX, obstacleWidth);
  obstaclesArray.push(obstacle);
  obstaclesArray.unshift(obstacle);
}

// function stop() {
//   clearInterval(gameInterval);
// }

// function crashWithObstocle() {
//     return !(
//       this.x + this.width < obstacle.x ||
//       this.x > obstacle.x + obstacle.width
//   );
// }
  
// function checkGameOver() {
//   const crashed = obstaclesArray.some((obstacle) => car.crashWithObstocle(obstacle));

//   if (crashed) {
//     canvas.stop();
//   }
// }
document.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "ArrowLeft":
      car.moveLeft();
      break;

    case "ArrowRight":
      car.moveRight();
      break;
  }
});