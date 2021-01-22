// Get canvas and instance the obstacles

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let myObstacles = [];

// Start Game Condition

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

// Game loop

function startGame() {
  road.loadRoad();
  player.loadPlayer();
  road.start();
}

function updateGameArea() {
  road.clear();
  road.loadRoad();
  player.loadPlayer();
  player.updateScore(road);
  road.move();
  updateObstacles();
  checkGameOver();
}

// Game classes

// Road is the class that identifies the game
class Road {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.velocity = 1;
    this.roadImg = new Image();
    this.roadImg.src = "./images/road.png";
    this.interval = "";
    this.frames = 0;
  }

  start() {
    this.interval = setInterval(updateGameArea, 20);
  }

  loadRoad() {
    ctx.drawImage(this.roadImg, this.x, this.y, 500, 700);
    if (this.velocity >= 0) {
      ctx.drawImage(this.roadImg, this.x, this.y - 700, 500, 700);
    }
  }
  move() {
    this.y += this.velocity;
    if (this.y >= 700) {
      this.y = 0;
    }
  }

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  stop(player) {
    clearInterval(this.interval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(75, 100, 350, 200);
    ctx.strokeStyle = "red";
    ctx.strokeText("GAME OVER", 190, 175);
    ctx.fillStyle = "white";
    ctx.fillText(`Final Score: ${player.score}`, 190, 225);
    this.restartGame();
  }

  restartGame() {
    const startGamebtn = document.getElementById("start-button");
    startGamebtn.innerText = "Restart Game";
    startGamebtn.onclick = () => {
      this.clear();
      newGame();
      startGame();
    };
  }
}

// Player is the car
class Player {
  constructor() {
    this.x = 225;
    this.y = 600;
    this.velocity = 10;
    this.carImg = new Image();
    this.carImg.src = "./images/car.png";
    this.score = 0;
  }

  loadPlayer() {
    ctx.drawImage(this.carImg, this.x, this.y, 50, 75);
  }
  updateScore(road) {
    this.score = Math.floor(road.frames / 50);
    ctx.font = "18px serif";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${this.score}`, 225, 25);
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

// Obstacles that appear on the road

class Obstacle {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speed = 0;
    this.obstacles = [];
  }

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
}

// Starting the game:

let road = new Road();
let player = new Player();

document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowLeft" && player.x >= 75) {
    player.x -= player.velocity;
  } else if (e.key == "ArrowRight" && player.x <= 375) {
    player.x += player.velocity;
  }
});

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }
  road.frames += 1;
  if (road.frames % 120 === 0) {
    let x = canvas.width;
    let minWidth = 50;
    let maxWidth = 200;
    let width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    let startPlaceX = Math.floor(Math.random() * (parseInt(x) - 100)) + 50;
    if (startPlaceX + width > 375) {
      startPlaceX = startPlaceX - width - 50;
    }
    myObstacles.push(new Obstacle(width, 10, "#A52A2A", startPlaceX, 0));
  }
}

// Crash test

function checkGameOver() {
  const crashed = myObstacles.some(function (obstacle) {
    return player.crashWith(obstacle);
  });

  if (crashed) {
    road.stop(player);
  }
}

// Restart Game

function newGame() {
  road = new Road();
  player = new Player();
  myObstacles = [];
}
