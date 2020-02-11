window.onload = function() {
  const $canvas = document.querySelector('canvas');
  const context = $canvas.getContext('2d');
  document.getElementById('start-button').onclick = function() {
    startGame();
  };

  let gameIsRunning = true;

  function drawBoard() {
    context.fillStyle = 'green';
    context.fillRect(0, 0, 550, 800);

    context.fillStyle = 'gray';
    context.fillRect(20, 0, 510, 800);

    context.strokeStyle = 'white';
    context.beginPath();
    context.setLineDash([]);
    context.lineWidth = 10;
    context.moveTo(40, 0);
    context.lineTo(40, 800);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = 10;
    //context.strokeStyle = 'white';
    context.moveTo(510, 0);
    context.lineTo(510, 800);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.setLineDash([25, 20]);
    context.lineWidth = 5;
    context.moveTo(275, 0);
    context.lineTo(275, 800);
    context.stroke();
    context.closePath();
  }

  //CAR SECTION
  let speed = 40;
  let obTime = 0;

  class Car {
    constructor() {
      this.x = 235;
      this.y = 600;

      this.setKeyboardEventListeners();
    }

    drawCar() {
      const carImageUrl = './images/car.png';
      const carImage = new Image();
      carImage.src = carImageUrl;

      carImage.addEventListener('load', () => {
        context.drawImage(carImage, this.x, this.y, 80, 160);
      });
      context.drawImage(carImage, this.x, this.y, 80, 160);
    }

    setKeyboardEventListeners() {
      window.addEventListener('keydown', event => {
        event.preventDefault();
        switch (event.key) {
          case 'ArrowLeft':
            if (this.x > 50) {
              this.x -= 50;
            }
            break;
          case 'ArrowRight':
            if (this.x < 400) {
              this.x += 50;
            }
            break;
        }
      });
    }
  }

  const car = new Car();

  function drawBoard() {
    context.fillStyle = 'green';
    context.fillRect(0, 0, 550, 800);

    context.fillStyle = 'gray';
    context.fillRect(20, 0, 510, 800);

    context.strokeStyle = 'white';
    context.beginPath();
    context.setLineDash([]);
    context.lineWidth = 10;
    context.moveTo(40, 0);
    context.lineTo(40, 800);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.lineWidth = 10;
    //context.strokeStyle = 'white';
    context.moveTo(510, 0);
    context.lineTo(510, 800);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.setLineDash([25, 20]);
    context.lineWidth = 5;
    context.moveTo(275, 0);
    context.lineTo(275, 800);
    context.stroke();
    context.closePath();
  }

  function startGame() {
    //console.log('im running');
    loop();
  }

  //OBSTACLES SECTION

  class Obstacle {
    constructor() {
      this.x = 0;
      this.y = -30;
      this.height = 20;
      this.width = 0;

      this.setRandomPosition();
    }

    setRandomPosition() {
      this.x = Math.random() * 400;
      this.width = 100 + Math.random() * 100;
    }

    runLogic() {
      this.y += 1.5;
    }

    drawObstacle() {
      context.fillStyle = 'black';
      context.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  const obstacles = [];

  const runLogicForAll = () => {
    for (let obstacle of obstacles) {
      obstacle.runLogic();
    }
  };

  function obUpdate(timestamp) {
    if (obTime < timestamp - speed) {
      const obstacle = new Obstacle();
      obstacles.push(obstacle);
      this.obTime = timestamp;
    }
  }

  const loop = timestamp => {
    context.clearRect(0, 0, $canvas.width, $canvas.height);
    drawBoard();
    car.drawCar();
    for (let obstacle of obstacles) {
      obstacle.drawObstacle();
    }
    runLogicForAll();
    obUpdate(timestamp);
    window.requestAnimationFrame(loop);
  };
};

// this.setRandomPosition();

// setRandomPosition () {
//   this.x = Math.random() * 400;
//   this.width = 100 + Math.random() * 100;
