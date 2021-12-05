const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  
function startGame() {
  document.getElementById('start-button').onclick = function(){
    drawCar ();
    
}
}
    function drawCar () {
    const carImage = new Image();
    carImage.src = '/images/car.png';
    carImage.onload = () => {
    ctx.drawImage(carImage, 175, 500, 50, 100);
    }
  }

  class Car {
    constructor() {
      this.x = 225;
      this.y = 580;
      this.speed = 0;
      this.height = 100;
      this.width = 50;
    }

    updatePosition() {
      
      this.x += this.speed;
    }
    }

  const car = new Car();

  const CANVAS_WIDTH = canvas.width;
  const CANVAS_HEIGHT = canvas.height;
  const totalOfImages = 2;
  let counterForLoadedImages = 0;


window.addEventListener('keydown', event => {
  event.preventDefault();
    switch (event.keyCode) {
      case 37:
        car.moveLeft();
        break;
      case 39:
        car.moveRight();
        break;
    } 
});

startGame()