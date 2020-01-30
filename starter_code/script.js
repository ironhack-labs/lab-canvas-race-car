const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');

//First Iteration

//bg + track
function callBackground() {
  context.fillStyle = 'green';
  context.fillRect(0, 0, 400, 600);
  context.fillStyle = 'gray';
  context.fillRect(50, 0, 300, 600);

  //white side stripes
  context.beginPath();
  context.lineWidth = 5;
  context.strokeStyle = 'white';
  context.moveTo(60, 0);
  context.lineTo(60, 600);
  context.stroke();
  context.closePath();
  context.beginPath();
  context.moveTo(340, 0);
  context.lineTo(340, 600);
  context.stroke();
  context.closePath();

  //white central line //setLineDash()
  context.beginPath();
  context.setLineDash([19, 19]);
  context.moveTo(200, 0);
  context.lineTo(200, 600);
  context.stroke();
}
//Second Iteration

class Car {
  constructor() {
    this.positionX = 175;
    this.positionY = 500;
    this.dimensions = 50;
    this.speed = 20;
    this.leftLimit = 65;
    this.rightLimit = 335;
    this.moveSpeed = 15;
  }

  paint() {
    const carUrl = './images/car.png';
    const imageCar = new Image();
    imageCar.src = carUrl;
    console.log('paint has been called');
    imageCar.addEventListener('load', () => {
      context.drawImage(imageCar, this.positionX, this.positionY, 50, 100);
    });
  }
  moveLeft() {
    if (this.x > this.leftlimit) {
      this.x -= this.moveSpeed;
    }
  }
}
const car = new Car();

function startGame() {
  callBackground();
  car.paint(); //YOU NEED TO CALL THE GOD DAMN FUNCTION!
}

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
  };
};
