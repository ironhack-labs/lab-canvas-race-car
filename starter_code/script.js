const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');

let gameIsRunning = true;

// Iteration 1

function drawBoard() {
  context.fillStyle = 'grey';
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);

  context.fillStyle = 'green';
  context.fillRect(0, 0, 30, context.canvas.height);
  context.fillRect(context.canvas.width - 30, 0, 30, context.canvas.height);

  context.fillStyle = 'white';
  context.fillRect(30 + 10, 0, 10, context.canvas.height);
  context.fillRect(context.canvas.width - 50, 0, 10, context.canvas.height);

  context.strokeStyle = 'white';
  context.lineWidth = 4;
  context.beginPath();
  context.setLineDash([20, 20]);
  context.moveTo(context.canvas.width / 2, 0);
  context.lineTo(context.canvas.width / 2, context.canvas.height);
  context.stroke();
}

// Iteration 2 and 3

class Car {
  constructor() {
    this.positionX = context.canvas.width / 2 - 25;
    this.positionY = context.canvas.height - 200;
    this.width = 50;
    this.height = 100;
    this.setKeyboardEventListeners();
  }

  drawCar() {
    const carImage = new Image();
    carImage.src = 'images/car.png';
    context.drawImage(carImage, this.positionX, this.positionY, this.width, this.height);
  }

  moveLeft() {
    if (this.positionX > this.width) {
      this.positionX -= 40;
      drawEverything();
    }
  }

  moveRight() {
    if (this.positionX + this.width * 2 < context.canvas.width) {
      this.positionX += 40;
      drawEverything();
    }
  }

  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37:
          car.moveLeft();
          break;
        case 39:
          car.moveRight();
          break;
      }
    });
  }
}

let car = new Car();

// Iteration 4

class Obstacle {
  constructor(positionY) {
    this.positionX = 0;
    this.positionY = positionY;
    this.width = 0;
    this.height = 10;
    this.setRandomPosition();
  }

  setRandomPosition() {
    this.width = 100 + Math.random() * 100;
    this.positionX = Math.random() * 250;
  }

  drawObstacle() {
    context.fillStyle = 'red';
    context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }

  checkCollision() {
    let carX = car.positionX;
    let carY = car.positionY;
    let carW = car.width;
    let carH = car.height;

    let obsX = this.positionX;
    let obsY = this.positionY;
    let obsW = this.width;
    let obsH = this.height;

    if (carX + carW > obsX && carX < obsX + obsW && carY + carH > obsY && carY < obsY + obsH) {
      gameIsRunning = false;
    }
  }

  runLogic() {
    this.positionY += 2;
    this.checkCollision();
  }
}

let obstacles = [];
for (let i = 0; i < 50; i++) {
  let obstacle = new Obstacle(i * -200);
  obstacles.push(obstacle);
}

let runLogic = () => {
  for (let obstacle of obstacles) {
    obstacle.runLogic();
  }
};

// const cleanCanvas = () => {
//   context.clearRect(0, 0, context.canvas.width, context.canvas.height);
// };

drawBoard();

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
  };

  function startGame() {
    function drawEverything() {
      // cleanCanvas();
      drawBoard();
      car.drawCar();

      for (let obstacle of obstacles) {
        obstacle.drawObstacle();
      }
    }

    let loop = timestamp => {
      drawEverything();
      runLogic();
      if (gameIsRunning) {
        window.requestAnimationFrame(loop);
      }
    };

    loop();
  }
};
