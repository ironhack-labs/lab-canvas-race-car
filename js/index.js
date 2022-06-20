const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  const img = new Image();
  img.addEventListener('load', () => {
  ctx.drawImage(img, 0, 0, 500, 700);
  });
  img.src = '../images/road.png';
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

function startGame() {

  class Car {
    constructor() {
      this.x = 225;
      this.speed = 0;
   
      // Load the image
      const car = new Image();
      car.addEventListener('load', () => {
        // Once image loaded => draw
        this.car = car;
        this.draw();
        this.obstacles();
      });
      car.src = '../images/car.png';
    }
    moveLeft() {
      this.x -= 25;
    }
    moveRight() {
      this.x += 25;
    }
    draw() {
      ctx.drawImage(img, 0, 0, 500, 700);
      if (this.x >= 450) {
        this.x = 450;
      } else if (this.x <= 0) {
        this.x = 0;
      } else { 
        this.x = this.x;
      }
        ctx.drawImage(this.car, this.x, 560, 50, 100);
        this.obstacles();
    }
    obstacles() {
      ctx.fillStyle = 'red';
      ctx.fillRect(75, 0, 100, 30);
    }
  }
   
  const car = new Car();
  document.addEventListener('keydown', e => {
    switch (e.code) {
      case "ArrowLeft":
        car.moveLeft();
        console.log('left', car);
        break;
      case "ArrowRight":
        car.moveRight();
        console.log('right', car);
        break;
    }
    updateCanvas();

  });

  function updateCanvas() {
    ctx.clearRect(0, 0, 600,800);
    //ctx.fillText('car_x: ' + car.x, 580, 40);
    car.draw();
    img.draw();
    img.obstacles();
  
  }
  updateCanvas();
}
};