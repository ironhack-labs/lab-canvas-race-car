
//fetching the canvas
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d')

const cWidth = canvas.width;
const cHeight = canvas.height;


//drawing the road


// Draw the car
class Car {
  constructor() {
    this.x = cWidth / 2 - 50;
    this.y = cHeight - 150;
    this.width = 100;
    this.height = 150;
    this.img = new Image();
  } 
  draw() {
    this.img.src = '../images/car.png';
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveLeft() {
    console.log('LEFT')
    this.x -= 25;
  }
  moveRight() {
    console.log('RIGHT')
    this.x += 25;
  }
}
const car = new Car();

function drawBackground() {
  const road = new Image();
  road.src = '../images/road.png';
  ctx.drawImage(road, 0, 0, cWidth, cHeight);
}


function startGame() {
 
  drawBackground();
  car.draw();



}



window.onload = () => {

  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};
