class Component {
  constructor(x, y, imageSrc, width, height) {
    this.x = x;
    this.y = y;
    this.image = document.createElement("img");
    this.image.src = imageSrc;
    this.width = width;
    this.height = height;
  }
  draw() {
    myGameArea.ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

class Car extends Component {
  constructor(x, y, imageSrc, width, height) {
    super(x, y, imageSrc, width, height);
    this.speedX = 0;
  }

  newPos() {
    this.x += this.speedX;
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
  checkCrashWith(obstacle) {
    return (
      this.right() > obstacle.left() &&
      this.top() < obstacle.bottom() &&
      this.bottom() > obstacle.top() &&
      this.left() < obstacle.right()
    );
  }
}
class Obstacle {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  draw() {
    myGameArea.ctx.fillStyle = this.color;
    myGameArea.ctx.fillRect(this.x, this.y, this.width, this.height);
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

const myGameArea = {
  canvas: document.querySelector("#canvas"),
  ctx: this.canvas.getContext("2d"),
  frames: 0,
  gameOver: false,
  score: 0,
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.gameOver = false;
  },
};

const car = new Car(230, 580, "../images/car.png", 40, 100);
const road = new Component(
  0,
  0,
  "../images/road.png",
  myGameArea.canvas.width,
  myGameArea.canvas.height
);
const obstacles = [];

function startGame() {
  myGameArea.clear();
  console.log("reset");
  updateGame();
}

function updateGame() {
  road.draw();
  car.draw();
  car.newPos();
  updateObstacles();
  printScore();
  checkGameOver();
  if (!myGameArea.gameOver) requestAnimationFrame(updateGame);
}

function updateObstacles() {
  myGameArea.frames += 1;
  if (myGameArea.frames % 150 === 0) {
    let minWidth = 20;
    let maxWidth = 200;
    let width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    obstacles.push(
      new Obstacle(width, 20, "red", 40 + Math.floor(Math.random() * 420), 0)
    );
  }

  obstacles.forEach((obstacle) => {
    // Supprime les obstacles qui sont hors de l'air de jeu et incrémente le score
    if (obstacle.y > myGameArea.canvas.height) {
      obstacles.splice(obstacles.indexOf(obstacle), 1);
      myGameArea.score++;
    }
    obstacle.draw();
    obstacle.y += 1;
  });
}

function checkGameOver() {
  myGameArea.gameOver = obstacles.some((obstacle) =>
    car.checkCrashWith(obstacle)
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

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

document.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "ArrowLeft":
      if (car.x > 40) car.speedX = -1;
      break;
    case "ArrowRight":
      if (car.x < myGameArea.canvas.width - 80) car.speedX = 1;
      break;
  }
});
document.addEventListener("keyup", function (event) {
  switch (event.code) {
    case "ArrowLeft":
      car.speedX = 0;
      break;
    case "ArrowRight":
      car.speedX = 0;
      break;
  }
});
