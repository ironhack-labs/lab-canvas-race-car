// ++ VARIABLES ++
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

let frames = 0;
let requestId = 0;
let obstacles = [];
let score = 0;
let flgGameOver = false;

let _car;
let _background;

const _audio = new Audio();
_audio.src = "";
_audio.loop = true;

// ++ CLASS DEFINITIONS ++

// Background

class Background {
  constructor(canvas_width, canvas_height) {
    this.x = 0;
    this.y = 0;
    this.width = canvas_width;
    this.height = canvas_height;
    this.image = new Image();
    this.image.src = "/images/road.png";
  }

  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
    context.drawImage(
      this.image,
      this.x,
      this.y - this.height,
      this.width,
      this.height
    );
    this.y += 4;
    if (this.y >= this.height) this.y = 0;
  }
}

// Car

class Car {
  constructor(canvas_width) {
    this.x = 250;
    this.y = 520;
    this.width = 70;
    this.height = 170;
    this.canvas_width = canvas_width;
    this.image = new Image();
    this.image.src = "/images/car.png";
  }

  collision(item) {
    return (
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y
    );
  }

  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  moveRight() {
    if (this.x <= this.canvas_width - (this.width + 50)) {
      this.x += 50;
    }
  }

  moveLeft() {
    if (this.x >= 100) {
      this.x -= 50;
    }
  }
}

// Obstacle

class Obstacle {
  constructor(x, width) {
    this.x = x;
    this.y = 0;
    this.width = width;
    this.height = 20;
    // context.fillStyle = "red";
  }

  draw() {
    context.fillRect(this.x, this.y, this.width, this.height);
    this.y += 4;
  }
}

// ++ PRIVATE METHODS ++

function drawObstacles() {
  obstacles = obstacles.filter(obs => {
    obs.draw();
    if (obs.y > canvas.height) score++;
    if (_car.collision(obs)) gameOver();
    return obs.y <= canvas.height;
  });
}

function generateObstacles() {
  if (frames % 150 === 0) {
    const length = Math.random() * 200 + 100;
    const posX = 50 + Math.random() * (canvas.width - length);
    obstacles.push(new Obstacle(posX, length));
  }
}

function moveLeft() {
  if (_car) _car.moveLeft();
}

function moveRight() {
  if (_car) _car.moveRight();
}

function update() {
  frames++;
  context.clearRect(0, 0, canvas.width, canvas.height);
  if (!flgGameOver) {
    _background.draw();
    _car.draw();
    generateObstacles();
    drawObstacles();
    context.fillText("Score: " + score, canvas.width - 210, 60);
    requestId = requestAnimationFrame(update); // Marca error si se manda llamar update()
  } else {
    // Dibuja el GameOver
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "red";
    context.font = "80px sans-serif";
    context.fillText("Game Over!", 30, 200);
    context.fillStyle = "white";
    context.fillText(score, 210, 390);
    context.font = "50px sans-serif";
    context.fillText("Your final score", 50, 280);
  }
}

// ++ START / STOP ++

function restart() {}

function startGame() {
  obstacles = [];
  score = 0;
  context.font = "48px sans-serif";
  context.fillStyle = "red";
  _car = new Car(canvas.width);
  // audio.play();
  requestId = 1;
  flgGameOver = false;
  update();
}

function gameOver() {
  console.log("Game Over");
  car = null;
  flgGameOver = true;
  //audio.currentTime = 0;
  requestId = undefined;
}

window.onload = () => {
  window.addEventListener("keydown", event => {
    if (event.key === "ArrowRight") {
      moveRight();
    }
    if (event.key === "ArrowLeft") {
      moveLeft();
    }
  });

  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  _background = new Background(canvas.width, canvas.height);
};
