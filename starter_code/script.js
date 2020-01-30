const $canvas = document.querySelector('canvas');
const $score = document.querySelector('h1 span');

const context = $canvas.getContext('2d');

const playerUrl = './images/car.png';
const playerImage = new Image();
playerImage.src = playerUrl;
const playerWidth = 30;
const playerHeight = 60;
let gameStarted = false;
let gameIsRunning = true;

let counter = 0;

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
    playerCar.paint();
    gameStarted = true;
  };
};
function startGame() {
  context.beginPath();
  context.fillStyle = 'green';
  context.fillRect(0, 0, 500, 700);
  context.closePath();

  context.beginPath();
  context.fillStyle = 'grey';
  context.fillRect(30, 0, 440, 700);
  context.closePath();

  context.beginPath();
  context.fillStyle = 'white';
  context.fillRect(40, 0, 15, 700);
  context.closePath();

  context.beginPath();
  context.fillStyle = 'white';
  context.fillRect(445, 0, 15, 700);
  context.closePath();

  context.beginPath();
  context.strokeStyle = 'white';
  context.setLineDash([15, 30]);
  context.moveTo(250, 0);
  context.lineTo(250, 700);
  context.lineWidth = 5;
  context.stroke();
  context.closePath();
}

class Car {
  constructor() {
    this.positionX = 250 - playerWidth / 2;
    this.positionY = 700 - playerHeight * 2;
    this.speed = 20;
    this.width = playerWidth;
    this.height = playerHeight;
    this.keyboardEventListeners();
  }

  keyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.key) {
        case 'ArrowRight':
          if (this.positionX + this.width / 2 < 430) {
            this.positionX += this.speed;
          }
          break;
        case 'ArrowLeft':
          if (this.positionX + this.width / 2 > 70) {
            this.positionX -= this.speed;
          }
          break;
      }
    });
  }

  paint() {
    context.drawImage(playerImage, this.positionX, this.positionY, this.width, this.height);
  }
}

const playerCar = new Car();

class Obstacle {
  constructor(positionY) {
    this.positionX = 0;
    this.positionY = positionY;
    this.height = 30;
    this.width = 30;

    this.setRandomPosition();
  }

  setRandomPosition() {
    this.positionX = Math.random() * 400;
    this.width = 100 + Math.random() * 100;
  }

  checkCollision() {
    const carX = playerCar.positionX;
    const carY = playerCar.positionY;
    const carWidth = playerCar.width;
    const carHeight = playerCar.height;

    const obstacleX = this.positionX;
    const obstacleY = this.positionY;
    const obstacleWidth = this.width;
    const obstacleHeight = this.height;

    if (
      carX + carWidth > obstacleX &&
      carX < obstacleX + obstacleWidth &&
      carY + carHeight > obstacleY &&
      carY < obstacleY + obstacleHeight
    ) {
      gameIsRunning = false;
    } else if (obstacleY === carY + carHeight) {
      counter = counter + 1;
      $score.innerHTML = counter;
    }
  }

  runLogic() {
    this.positionY += 2;
    this.checkCollision();
  }

  paint() {
    context.beginPath();
    context.fillStyle = 'red';
    context.fillRect(this.positionX, this.positionY, this.width, this.height);
    context.closePath();
  }
}

const obstacles = [];

for (let i = 0; i < 100; i++) {
  const obstacle = new Obstacle((200 + i * 250) * -1);
  obstacles.push(obstacle);
}

const runLogic = () => {
  for (let obstacle of obstacles) {
    obstacle.runLogic();
  }
};

const cleanCanvas = () => {
  startGame();
};

const paint = () => {
  playerCar.paint();
  for (let obstacle of obstacles) {
    obstacle.paint();
  }
};

const loop = timestamp => {
  if (gameStarted && gameIsRunning) {
    cleanCanvas();
    paint();
    runLogic();
  }
  window.requestAnimationFrame(loop);
};

loop();
