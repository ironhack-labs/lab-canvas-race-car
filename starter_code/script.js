const canvas = document.createElement('canvas');
canvas.width = 680;
canvas.height = 720;
const ctx = canvas.getContext('2d');
const button = document.querySelector('#start-button');
let frames = 0;
let intervalId;
let arrObstacles = [];
let car;

class GameObject {
  constructor(width, height, x, y, scale = 1) {
    this.img = new Image();
    this.img.src =
      'https://raw.githubusercontent.com/ironhack-labs/lab-canvas-race-car/master/starter_code/images/car.png';
    this.width = width;
    this.height = height;
    this.scaleWidth = Math.floor(width * scale);
    this.scaleHeight = Math.floor(height * scale);
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.scorePoints = 0;
  }

  update() {
    ctx.drawImage(this.img, 0, 0, this.width, this.height, this.x, this.y, this.scaleWidth, this.scaleHeight);
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + this.scaleWidth;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + this.scaleHeight;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }

  score() {
    this.scorePoints = Math.floor(frames / 100);
    ctx.font = '18px serif';
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + this.scorePoints, 600, 50);
  }
}

class Obstacle extends GameObject {
  constructor(width, height, x, y, color) {
    super(width, height, x, y);
    this.color = color;
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function drawBackground() {
  ctx.fillStyle = 'green';
  ctx.moveTo(0, 0);
  ctx.fillRect(0, 0, 80, canvas.height);
  ctx.fillRect(600, 0, 80, canvas.height);
  ctx.fillStyle = 'white';
  ctx.fillRect(80, 0, 10, canvas.height);
  ctx.fillRect(590, 0, 10, canvas.height);
  ctx.fillStyle = 'gray';
  ctx.fillRect(90, 0, 500, canvas.height);
  ctx.strokeStyle = 'white';
  ctx.setLineDash([20, 20]);
  ctx.lineWidth = 5;
  ctx.moveTo(340, 0);
  ctx.lineTo(340, canvas.height);
  ctx.stroke();
}

function updateObstacles() {
  if (frames % 250 === 0 || frames === 30) {
    const y = canvas.height;
    const x = 500;
    const minWidth = Math.floor(x * 0.075);
    const maxWidth = Math.floor(x * 0.7);
    const width = Math.floor(Math.random() * (maxWidth - minWidth + 1 + minWidth));
    const minGap = x * 0.6;
    const maxGap = x * 0.85;
    const gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    arrObstacles.push(new Obstacle(width, 25, 90, 0, 'black'));
    arrObstacles.push(new Obstacle(700 - width - gap, 25, width + gap - 110, 0, 'black'));
    //width, height, x, y, color
  }
}

function startGame() {
  if (!intervalId) {
    clearInterval(intervalId);
    car = new GameObject(158, 319, 310, canvas.height - 135, 0.4);
    arrObstacles = [];
    intervalId = setInterval(() => updateCanvas(), 15);
  }
}

function updateCanvas() {
  frames++;
  drawBackground();
  car.update();
  updateObstacles();
  arrObstacles.forEach(obstacle => {
    obstacle.y += 1;
    obstacle.draw();
    checkGameOver(car.crashWith(obstacle));
  });
  car.score();
}

function printLoserScreen() {
  ctx.font = '62px Courier';
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  ctx.fillText('Game Over!', 160, 70, 600);
  ctx.fillText(`Score: ${car.scorePoints}`, 170, 250, 620);
}

function checkGameOver(crashed) {
  if (crashed) {
    stopGame();
  }
}

function stopGame() {
  clearInterval(intervalId);
  intervalId = undefined;
  arrObstacles = [];
  printLoserScreen();
}

button.onclick = function() {
  document.querySelector('#game-board').appendChild(canvas);
  startGame();
};

document.onkeydown = e => {
  switch (e.keyCode) {
    case 37:
      car.x -= 8;
      break;
    case 39:
      car.x += 8;
      break;
  }
};
