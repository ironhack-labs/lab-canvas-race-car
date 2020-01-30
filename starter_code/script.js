const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
let gameIsRunning = true;


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
   
  }

  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.keyCode) {
        case 37:
          if (this.positionX > 0) {
            this.positionX -= 10;
          }
     
          break;
        case 39:
          if (this.positionX + this.width < context.canvas.width) {
            this.positionX += 10;
          }
       
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
  const obstacle = new Obstacle(200 - i * 150);
  obstacles.push(obstacle);
}

const cleanCanvas = () => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
};

const runLogic = () => {
  for (let obstacle of obstacles) {
    obstacle.runLogic();
  }
}; 


const paint = () => {
      cleanCanvas();
      drawBackground();
      newCar.paint();

      for (let obstacle of obstacles) {
        obstacle.paint();
      }
    };


 
    

 

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
      runLogic();
      paint();
      if (gameIsRunning){
       window.requestAnimationFrame(loop);
      }
    };

    window.onload = function() {
      document.getElementById("start-button").onclick = function() {
   
        startGame();
      };
    
      function startGame() {
    
        loop();
      }
    };