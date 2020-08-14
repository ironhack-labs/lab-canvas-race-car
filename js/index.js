const $canvas = document.querySelector("canvas");
const context = $canvas.getContext("2d");
let score = 0;
class Car {
  constructor(x, y, imageUrl) {
    this.x = x;
    this.y = y;
    this.image = new Image();
    this.image.src = imageUrl;
    this.width = 40;
    this.height = 80;
  }
  draw() {
    context.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  moveRight() {
    if (this.x > 440) this.x = 440;
    this.x += 10;
  }
  moveLeft() {
    if (this.x < 20) this.x = 20;
    this.x -= 10;
  }
  isTouching(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    );
  }
}
class Obstacle extends Car {
  constructor(x, width) {
    super(x, -30);
    this.width = width;
    this.height = 30;
    this.color = "red";
  }
  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
    this.y += 3;
  }
}
const car = new Car(
  canvas.width / 2 - 20,
  canvas.height - 100,
  "../images/car.png"
);
let obstacles = [];
let intervalId,
  frames = 0;
document.addEventListener("keydown", (e) => {
  if (e.keyCode === 39) car.moveRight();
  else if (e.keyCode === 37) car.moveLeft();
});
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  function startGame() {
    score = 0;
    clearInterval(intervalId);
    intervalId = setInterval(updateCanvas, 1000 / 60);
    frames = 0;
    obstacles = [];
  }
};
function updateCanvas() {
  frames++;
  score = Math.floor(frames / 120) - 2 < 0 ? 0 : Math.floor(frames / 120) - 2;
  clearCanvas();
  createObstacle();
  drawBoard();
  checkCollision();
}
function clearCanvas() {
  context.clearRect(0, 0, $canvas.width, $canvas.height);
}
function drawBoard() {
  //board background
  context.fillStyle = "gray";
  context.fillRect(0, 0, $canvas.width, $canvas.height);
  //grass
  context.fillStyle = "green";
  context.fillRect(0, 0, 20, $canvas.height);
  context.fillRect($canvas.width - 20, 0, 20, $canvas.height);
  //outside white lines
  context.fillStyle = "white";
  context.fillRect(25, 0, 10, $canvas.height);
  context.fillRect($canvas.width - 35, 0, 10, $canvas.height);
  //white stripes
  for (let i = 0; i < 20; i++) {
    context.fillRect($canvas.width / 2 - 3, i * 35, 6, 20);
  }
  car.draw();
  obstacles.forEach((obstacle, index) => {
    if (obstacle.y > 700) {
      obstacles.slice(index, 1);
    } else obstacle.draw();
  });
  printScore();
}
function createObstacle() {
  if (frames % 120 === 0) {
    const minWidth = 50;
    const maxWidth = 360;
    const randomWidth = Math.floor(
      Math.random() * (maxWidth - minWidth) + minWidth
    );
    const minX = 20;
    const maxX = 480 - randomWidth;
    const randomX = Math.floor(Math.random() * (maxX - minX) + minX);
    obstacles.push(new Obstacle(randomX, randomWidth));
  }
}
function checkCollision() {
  obstacles.forEach((obstacle) => {
    if (car.isTouching(obstacle)) {
      gameOver();
      clearInterval(intervalId);
    }
  });
}
function printScore() {
  context.fillStyle = "black";
  context.font = "40px Sans-serif";
  context.fillText(`score : ${score}`, 170, 40);
}

function gameOver() {
  context.fillStyle = "black";
  context.fillRect(50, 150, 400, 400);
  context.font = "50px Sans-serif";
  context.fillStyle = "red";
  context.fillText("Game Over", 60, 200);
  context.fillStyle = "white";
  context.font = "40px Sans-serif";
  context.fillText(`Your final score is ${score}`, 50, 300, 350);
}
