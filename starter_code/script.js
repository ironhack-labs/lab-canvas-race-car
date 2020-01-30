const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
let gameIsRunning = false;
let gameEnd = true;

class Car {
  constructor() {
    this.positionX = context.canvas.width / 2;
    this.positionY = context.canvas.height - 75;
    this.dimensionsX = 50;
    this.dimensionsY = 75;
    this.speed = 20;

    this.setKeyboardEventListeners();
  }
  paint() {
    const imageUrl = './images/car.png';
    const image = new Image();
    image.src = imageUrl;
    context.drawImage(image, this.positionX, this.positionY, 50, 75);
  }

  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.key) {
        case 'ArrowRight':
          if (this.positionX + this.dimensionsX < context.canvas.width - 50) {
            this.positionX += this.speed;
          }
          break;
        case 'ArrowLeft':
          if (this.positionX + this.dimensionsX > 0) {
            this.positionX -= this.speed;
          }
          break;
      }
    });
  }
}
const car = new Car();
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

  paint() {
    context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }

  runLogic() {
    this.positionY += 1.5;
    this.checkCollision();
  }
  checkCollision() {
    const carX = car.positionX;
    const carY = car.positionY;
    const carWidth = car.dimensions;
    const carHeight = car.dimensions;

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
      gameEnd = false;
    }
  }
}

const obstacles = [];

for (let i = 0; i < 100; i++) {
  const obstacle = new Obstacle(200 - i * 150);
  obstacles.push(obstacle);
}

const runLogic = () => {
  for (let obstacle of obstacles) {
    obstacle.runLogic();
  }
};

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    gameIsRunning = true;

    const paint = () => {
      drawBackground();
      car.paint();

      for (let obstacle of obstacles) {
        obstacle.paint();
      }
    };

    function startGame() {
      paint();
    }

    const cleanCanvas = () => {
      startGame();
    };

    startGame();

    function drawBackground() {
      context.beginPath();
      context.fillStyle = 'green';
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
      context.closePath();

      context.beginPath();
      context.fillStyle = 'grey';
      context.fillRect(25, 0, context.canvas.width - 50, context.canvas.height);
      context.closePath();

      context.beginPath();
      context.fillStyle = 'white';
      context.fillRect(35, 0, 5, context.canvas.height);
      context.closePath();

      context.beginPath();
      context.fillStyle = 'white';
      context.fillRect(360, 0, 5, context.canvas.height);
      context.closePath();

      context.beginPath();
      context.lineWidth = 5;
      context.strokeStyle = 'white';
      context.setLineDash([15, 30]);
      context.moveTo(context.canvas.width / 2, 0);
      context.lineTo(context.canvas.width / 2, context.canvas.height);
      context.stroke();

      context.closePath();
    }

    const loop = timestamp => {
      if (gameIsRunning && gameEnd) {
        paint();
        runLogic();
      }
      window.requestAnimationFrame(loop);
    };

    loop();
  };
};
