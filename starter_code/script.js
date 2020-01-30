const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');

let gameIsRunning = true;

function paintRoad() {
  context.fillStyle = 'green';
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  context.fillStyle = 'grey';
  context.fillRect(20, 0, 8, context.canvas.height);
  context.fillStyle = 'white';
  context.fillRect(28, 0, 8, context.canvas.height);
  context.fillStyle = 'grey';
  context.fillRect(36, 0, 250, context.canvas.height);
  context.fillStyle = 'white';
  context.fillRect(285, 0, 8, context.canvas.height);
  context.fillStyle = 'grey';
  context.fillRect(293, 0, 8, context.canvas.height);
  context.beginPath();
  context.setLineDash([15, 18]);
  context.moveTo(160, -10);
  context.lineTo(160, context.canvas.height);
  context.strokeStyle = 'white';
  context.lineWidth = 4;
  context.stroke();
}

class Car {
  constructor() {
    this.positionX = 135;
    this.positionY = 450;
    this.width = 45;
    this.height = 80;

    this.setKeyboardEventListeners();
  }

  paint() {
    const carPath = './images/car.png';
    const car = new Image();
    car.src = carPath;

    context.drawImage(car, this.positionX, this.positionY, this.width, this.height);
    console.log('Drawing Player Car');
  }

  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37:
          if (this.positionX > 0) {
            this.positionX -= 10;
          }
          console.log('Going left');
          break;
        case 39:
          if (this.positionX + this.width < context.canvas.width) {
            this.positionX += 10;
          }
          console.log('Going right');
          break;
      }
    });
  }
}

const newCar = new Car();

class Obstacle {
  constructor(positionY) {
    this.positionX = 0;
    this.positionY = positionY;
    this.height = 20;
    this.width = 0;

    this.setRandomPosition();
  }

  paint() {
    context.fillStyle = 'red';
    context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }

  setRandomPosition() {
    this.positionX = Math.random() * 200;
    this.width = 90 + Math.random() * 100;
  }

  checkCollision() {
    const carX = newCar.positionX;
    const carY = newCar.positionY;
    const carWidth = newCar.width;
    const carHeight = newCar.height;

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
      console.log('Hit');
    }
  }

  runLogic() {
    this.positionY += 2.5;
    this.checkCollision();
  }
}

const obstacles = [];

for (let i = 0; i < 100; i++) {
  const obstacle = new Obstacle(i * 250 * -1);
  obstacles.push(obstacle);
}

const runLogic = () => {
  for (let obstacle of obstacles) {
    obstacle.runLogic();
  }
};

const cleanCanvas = () => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
};

const paint = () => {
  cleanCanvas();
  paintRoad();
  newCar.paint();

  for (let obstacle of obstacles) {
    obstacle.paint();
  }
};

const loop = timestamp => {
  runLogic();
  paint();
  if (gameIsRunning) {
    window.requestAnimationFrame(loop);
  }
};

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
  };

  function startGame() {
    loop();
  }
};
