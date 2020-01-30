window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
  };

  const $canvas = document.querySelector('canvas');
  const context = $canvas.getContext('2d');

  //--ROAD CONSTRUCTION
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
    context.setLineDash([]); /// NECESSITA COLOCAR PARA NÃO GERAR NOVA LINHA
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

    context.restore();
  };

  //--CAR-------------------------------------------------
  class Car {
    constructor() {
      this.positionX = 100;
      this.positionY = 500;
      this.speed = 50;

      this.setKeyboardEventListeners();
    }

    setKeyboardEventListeners() {
      window.addEventListener('keydown', event => {
        // Stop the default behavior (moving the screen to the left/up/right/down)
        event.preventDefault();

        switch (event.keyCode) {
          case 37:
            console.log('LEFT');
            if (this.positionX > 50) {
              //console.log('teste no left');
              this.positionX -= this.speed;
              ///console.log(this.positionX + ' left');
            }

            break;

          case 39:
            console.log('Right');
            if (this.positionX < context.canvas.width-100) {
              //console.log('test Right');
              this.positionX += this.speed;
              //console.log(this.positionX + ' right');
            }
            break;
          }
      });
    }

    paint() {
      const carUrl = './images/car.png';
      const imageCar = new Image();
      imageCar.src = carUrl;
      context.drawImage(imageCar, this.positionX, 500, 50, 100);//STATIC!!!!!!!!!!!!!!!!!
      //console.log(this.positionX + '!!!!!!!!! in the car.paint()');
    }
  }

  //---CRIAÇÃO DO CARRO:----------------------------------
  const car = new Car();

  //---CLEAN CANVAS---------------------------
  const cleanCanvas = () => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  };

  //--OBSTACLES-------------------------------------------------

  class Obstacle {
    constructor(positionY) {
      this.positionX = 0;
      this.positionY = positionY;
      this.height = 30;
      this.width = 0;

      this.setRandomPosition();
    }

    setRandomPosition() {
      this.positionX = Math.random() * 400;
      this.width = 100 + Math.random() * 100;
    }

    /*
    checkCollision () {
      const blockX = block.positionX;
      const blockY = block.positionY;
      const blockWidth = block.dimensions;
      const blockHeight = block.dimensions;
  
      const obstacleX = this.positionX;
      const obstacleY = this.positionY;
      const obstacleWidth = this.width;
      const obstacleHeight = this.height;
      
      if (
        blockX + blockWidth > obstacleX &&
        blockX < obstacleX + obstacleWidth &&
        blockY + blockHeight > obstacleY &&
        blockY < obstacleY + obstacleHeight
      ) {
        gameIsRunning = false;
      }
    }*/

    runLogic() {
      this.positionY -= 1.5;
      console.log('Position Obstac. ' + this.positionY);
      //this.checkCollision();
    }

    paint() {
      context.save();
      context.fillStyle = 'red';
      context.fillRect(this.positionX, this.positionY, this.width, this.height);

    }
  }

  //-------------------------------------------

  const obstacles = [];

  //-------------------------------------------

  for (let i = 0; i < 100; i++) {
    const obstacle = new Obstacle(i * 200);
    obstacles.push(obstacle);
  }

  //-------------------------------------------
  const runLogic = () => {
    for (let obstacle of obstacles) {
      obstacle.runLogic();
    }
  };

  //---PAINT ALL FUNCTION
  const paint = () => {
    cleanCanvas();
    drawRow();
    car.paint();

    //Paint Obstaculos
    for (let obstacle of obstacles) {
      obstacle.paint();
    }
  };

  const loop = timestamp => {
    paint();
    runLogic();
    

    /*if (gameIsRunning) {
      window.requestAnimationFrame(loop);
    }*/

    window.requestAnimationFrame(loop);
  };

  function startGame() {
    loop();
  }
};
