class Road {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    const img = document.createElement("img");
    img.src = "../images/road.png";
    img.addEventListener("load", () => {
      this.image = img;
    });
  }
  draw() {
    if (!this.image) return;
    ctx.drawImage(
      this.image,
      this.x,
      this.y,
      myGameArea.canvas.width,
      myGameArea.canvas.height
    );
  }
}

class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = 0;

    const img = document.createElement("img");
    img.src = "../images/car.png";
    img.addEventListener("load", () => {
      this.image = img;
    });
  }
  draw() {
    if (!this.image) return;
    ctx.drawImage(this.image, this.x, this.y, 40, 100);
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
    return false;
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
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.fillStyle = this.color;
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
  frames: 0,
  gameOver: false,
};

const ctx = myGameArea.canvas.getContext("2d");

const car = new Car(230, 580);
const road = new Road(0, 0);
const obstacles = [];

function startGame() {
  updateGame();
}

function updateGame() {
  ctx.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
  road.draw();
  car.draw();
  car.newPos();
  updateObstacles();
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
    obstacle.draw();
    obstacle.y += 1;
  });
}

function checkGameOver() {
  myGameArea.gameOver = obstacles.some((obstacle) =>
    car.checkCrashWith(obstacle)
  );
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

document.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "ArrowLeft":
      if (car.x > 40) car.speedX -= 1;
      break;
    case "ArrowRight":
      if (car.x < myGameArea.canvas.width - 80) car.speedX += 1;
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
