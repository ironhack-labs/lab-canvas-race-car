class Component {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  top() {
    return this.y;
  }
  right() {
    return this.x + this.width;
  }
  left() {
    return this.x;
  }
  bottom() {
    return this.height + this.y;
  }
}
class ComponentImage extends Component {
  constructor(x, y, imageSrc, width, height) {
    super(x, y, width, height);
    this.image = document.createElement("img");
    this.image.src = imageSrc;
    this.width = width;
    this.height = height;
  }
  draw() {
    myGameArea.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
class Car extends ComponentImage {
  constructor(x, y, imageSrc, width, height) {
    super(x, y, imageSrc, width, height);
    this.speedX = 0;
  }
  newPos() {
    this.x += this.speedX;
  }

  checkCrashWith(obstacle) {
    return (
      this.right() > obstacle.left() &&
      this.top() < obstacle.bottom() &&
      this.bottom() > obstacle.top() &&
      this.left() < obstacle.right()
    );
  }
}
class Obstacle extends Component {
  constructor(width, height, color, x, y) {
    super(x, y, width, height);
    this.color = color;
  }
  draw() {
    myGameArea.ctx.fillStyle = this.color;
    myGameArea.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const myGameArea = {
  canvas: document.querySelector("#canvas"),
  ctx: this.canvas.getContext("2d"),
  frames: 0,
  gameOver: false,
  score: 0,
  car: null,
  road: null,
  obstacles: [],
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.car = new Car(230, 580, "../images/car.png", 40, 100);
    this.road = new ComponentImage(
      0,
      0,
      "../images/road.png",
      myGameArea.canvas.width,
      myGameArea.canvas.height
    );
    this.frames = 0;
    this.score = 0;
    this.gameOver = false;
    this.obstacles = [];
  },
};

function startGame() {
  myGameArea.clear();
  updateGame();
}

function updateGame() {
  updateRoadAndCar();
  updateObstacles();
  printScore();
  checkGameOver();
  if (!myGameArea.gameOver) requestAnimationFrame(updateGame);
}

function updateRoadAndCar() {
  myGameArea.road.draw();
  myGameArea.car.draw();
  myGameArea.car.newPos();
}

function updateObstacles() {
  myGameArea.frames += 1;
  if (myGameArea.frames % 150 === 0) {
    let minWidth = 20;
    let maxWidth = 200;
    let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    myGameArea.obstacles.push(
      new Obstacle(width, 20, "red", 40 + Math.floor(Math.random() * 420), 0)
    );
  }

  myGameArea.obstacles.forEach((obstacle) => {
    // Supprime les obstacles qui sont hors de l'air de jeu et incrémente le score
    if (obstacle.y > myGameArea.canvas.height) {
      myGameArea.obstacles.splice(myGameArea.obstacles.indexOf(obstacle), 1);
      myGameArea.score++;
    }
    obstacle.draw();
    obstacle.y += 1;
  });
}

function checkGameOver() {
  myGameArea.gameOver = myGameArea.obstacles.some((obstacle) =>
    myGameArea.car.checkCrashWith(obstacle)
  );
  if (myGameArea.gameOver) printGameOver();
}

function printScore() {
  myGameArea.ctx.fillStyle = "white";
  myGameArea.ctx.font = "30px Arial";
  myGameArea.ctx.fillText(`Score : ${myGameArea.score}`, 65, 30);
}

function printGameOver() {
  myGameArea.ctx.fillStyle = "black";
  myGameArea.ctx.fillRect(0, 200, 500, 300);
  myGameArea.ctx.font = "48px Arial";
  myGameArea.ctx.fillStyle = "red";
  myGameArea.ctx.fillText("Game Over", 120, 350);
  myGameArea.ctx.fillStyle = "white";
  myGameArea.ctx.fillText("Your final Score :", 80, 400);
  myGameArea.ctx.fillText(myGameArea.score, 230, 450);
}

document.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "ArrowLeft":
      if (myGameArea.car.x > 40) myGameArea.car.speedX = -5;
      else myGameArea.car.x = 40;
      break;
    case "ArrowRight":
      if (myGameArea.car.x < myGameArea.canvas.width - 80) myGameArea.car.speedX = 5;
      else myGameArea.car.x = myGameArea.canvas.width - 80;
      break;
  }
});
document.addEventListener("keyup", function (event) {
  switch (event.code) {
    case "ArrowLeft":
      myGameArea.car.speedX = 0;
      break;
    case "ArrowRight":
      myGameArea.car.speedX = 0;
      break;
  }
});

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};
