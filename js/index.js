// jshint esversion:6
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    updateCanvas();
  }
};

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const img = new Image();
img.addEventListener('load', ()=>{
  this.img = img;
  this.drawBoard();
});
img.src = "images/road.png";



function drawBoard(){
  context.drawImage(img, 0, 0, canvas.width, canvas.height);
}


class PlayersCar {

  constructor(){  

    this.x = 200;
    this.y = 500;

    const img = new Image();
    img.addEventListener('load', () => {
      this.img = img;
      this.drawCar();
    });
    img.src = "images/car.png";
  }
  
  moveRight(){
    if(this.x === 375) {
      return;
    }
    this.x+= 25;
  }
  moveLeft() {
    if(this.x === 50) {
      return;
    }
    this.x-= 25;

  }
  drawCar(){
    context.drawImage(this.img, this.x, this.y, 75, 150);
  }
}


function obstacles (x, y) {

  context.fillStyle = "#F00";
  context.fillRect(x, y, x, 25);

  
}

const car = new PlayersCar();

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      car.moveLeft(); //left
      break;
    case 39:
      car.moveRight(); //right
      break;
  }
  updateCanvas();
});

function clearCanvas(){
  context.clearRect(0,0,width,height);  
  drawBoard();
  car.drawCar();
}
let speed = 0;

//Could not understand how to make obstacles (iteration 4)...
function updateCanvas() {

  speed+=5; 
  clearCanvas();
  obstacles(0,speed, Math.floor(Math.random() * 8) * 50, 25);
  requestAnimationFrame(updateCanvas);
}
