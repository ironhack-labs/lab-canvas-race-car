window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
  };

  const $canvas = document.querySelector('canvas');
  const context = $canvas.getContext('2d');

  //--ROW CONSTRUCTION
  const drawRow = () => {
    context.fillStyle = 'green';
    context.fillRect(0, 0, 600, 600);

    context.fillStyle = 'gray';
    context.fillRect(50, 0, 500, 600);

    ///-----LINES ---

    //Line 01
    context.strokeStyle = 'white';
    context.lineWidth = 10;
    context.beginPath();
    context.setLineDash([]);
    //inicio do desenho da linha
    context.moveTo(50, 0);
    //primeiro ponto
    context.lineTo(50, 600);
    context.stroke();
    context.closePath();

    //Line 03
    context.strokeStyle = 'white';
    context.lineWidth = 10;
    context.beginPath();
    //inicio do desenho da linha
    context.moveTo(550, 0);
    //primeiro ponto
    context.lineTo(550, 600);
    context.stroke();
    context.closePath();

    //Line 02
    context.strokeStyle = 'white';
    context.lineWidth = 5;
    context.setLineDash([50, 50]);
    context.beginPath();
    //inicio do desenho da linha
    context.moveTo(300, 0);
    //primeiro ponto
    context.lineTo(300, 600);
    context.stroke();
    context.closePath();
  };

  //--CAR-------------------------------------------------
  class Car {
    constructor() {
      this.positionX = 270;
      this.positionY = 500;
      this.speed = 20;

      this.setKeyboardEventListeners();
    }

    setKeyboardEventListeners() {
      window.addEventListener('keydown', event => {
        switch (event.key) {
          case 'ArrowLeft':
            if (this.positionX > 0) {
              this.positionX += this.speed;
            }
            break;
          case 'ArrowRight':
            if (this.positionX < context.canvas.width) {
              this.positionX -= this.speed;
            }
            break;
        }
      });
    }

    paint() {
      const carUrl = './images/car.png';
      const imageCar = new Image();
      imageCar.src = carUrl;
      context.drawImage(imageCar, this.positionX, this.positionY, 50, 100);
    }
  }

  //---CRIAÇÃO DO CARRO:----------------------------------
  const car = new Car();

  //---CLEAN CANVAS---------------------------
  const cleanCanvas = () => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  };

  //--CAR-------------------------------------------------

  //---PAINT FUNCTION
  const paint = () => {
    cleanCanvas();
    drawRow();
    car.paint();

    /*
    for (let obstacle of obstacles) {
      obstacle.paint();
    }*/
  };

  const loop = timestamp => {
    //runLogic();
    paint();
    //rowConstruction();

    /*if (gameIsRunning) {
      window.requestAnimationFrame(loop);
    }*/
  };

  function startGame() {
    loop();
  }
};
