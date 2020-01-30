const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
let cWidth = context.canvas.width;
let cHeigth = context.canvas.height;
let speed = 2;

class Car {
  constructor() {
    this.positionX = 180;
    this.positionY = 450;
    this.width = 60;
    this.heigth = 90;

    this.setKeyboardEventListeners();
  }

  setKeyboardEventListeners() {
    window.addEventListener('keydown', event => {
      switch (event.key) {
        case 'ArrowRight':
          if (this.positionX < 350) {
            this.positionX += speed;
          }
          break;
        case 'ArrowLeft':
          if (this.positionX > 0) {
            this.positionX -= speed;
          }
          break;
      }
    });
  }
}

let car = new Car();

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
  };

  function startGame() {
    car.setKeyboardEventListeners();
    context.fillStyle = 'green';
    context.fillRect(0, 0, cWidth, cHeigth);
    context.fillStyle = '#A9A9A9';
    context.fillRect(25, 0, 370, 600);
    context.beginPath();
    context.strokeStyle = 'white';
    context.lineWidth = 8;
    context.moveTo(38, 0);
    context.lineTo(38, 600);
    context.moveTo(382, 0);
    context.lineTo(382, 600);
    context.stroke();
    context.closePath();

    context.beginPath();
    context.strokeStyle = 'white';
    context.setLineDash([20, 20]);
    context.lineWidth = 5;
    context.moveTo(210, 0);
    context.lineTo(210, 600);
    context.stroke();
    context.closePath();

    const characterImageUrl = './images/car.png';
    const characterImage = new Image();
    characterImage.src = characterImageUrl;
    characterImage.addEventListener('load', () => {
      context.drawImage(characterImage, car.positionX, car.positionY, 60, 90);
    });
  }
};
