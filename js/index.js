window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.fillStyle = '#FF0000';
var score = 0;

let frames = 0;
let requestID;

class gameBoard {
  constructor()
  {
    this.image = new Image();
    this.image.src = '/images/road.png';
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
  }

  draw(){
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  gameOver(){
    ctx.font = "40px Arial"
    ctx.fillText("Game Over", 150,200);
    ctx.fillStyle = '#000';
  }
}

class Car{
  constructor(x,y){
    this.image = new Image();
    this.image.src = '/images/car.png';
    this.width = 50;
    this.height = 90;
    this.x = x;
    this.y = y;
  }
}
