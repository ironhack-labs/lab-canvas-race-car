const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Iteration 1
const roadImg = new Image();
roadImg.src = "images/road.png"


function drawBackground () {
  ctx.drawImage(roadImg, 0, 0, 500, 700);
}
// Iteration 2

class car {
  constructor() {
    this.x = 50;
    this.y = 50;
 
  
    const carImg = new Image();
    carImg.addEventListener('load', () => {

      this.carImg = carImg;
      this.draw();
    });
    carImg.src = "images/car.png";
  }
  moveUp() {
    this.y -= 25;
  }
  moveDown() {
    this.y += 25;
  }
  moveLeft() {
    this.x -= 25;
  }
  moveRight() {
    this.x += 25;
  }
  drawCar () {
  ctx.drawImage(carImg, 225, 600, 50, 90);
  }
}
new car();


document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 38:
      car.moveUp();
      console.log('up', ghost);
      break;
    case 40:
      car.moveDown();
      console.log('down', ghost);
      break;
    case 37:
      car.moveLeft();
      console.log('left', ghost);
      break;
    case 39:
      car.moveRight();
      console.log('right', ghost);
      break;
  }
  updateCanvas();
});






// Iteration 3



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    drawBackground();
    drawCar();
    moveLeft();
    moveRight();

  }
};
