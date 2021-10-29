const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let requestID;
let frames = 0;

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}

class Car {
    constructor(x,y,w,h){
      this.x = x;
      this.y = y;
      this.width = w;
      this.height = h;
      this.image = new Image ();
      this.image.src = 'images/car.png'
    }

    draw (){
      ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    }
}

const car = new Car(225,550,50,100);


class Background {
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.image = new Image ();
    this.image.src = 'images/road.png'
  }
  
  draw (){
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
  }
}

const background = new Background(0,0,canvas.width,canvas.height)

let obstacles = [];

function Obstacles(){

}

function generateObstacles(){

}

// Smooth Movement (Right & Left)
let left = false;
let right = false;

function move (){
  if (left){
    car.x -= 4
  }
  if (right){
    car.x += 4
  }
}

// Press down key car is in movement
document.onkeydown = function(e){
  if(e.key === 'ArrowLeft') left = true;
  if(e.key ==='ArrowRight') right = true;
}

// When the key is up car is stopped
document.onkeyup = function(e){
  if(e.key === 'ArrowLeft') left = false;
  if(e.key ==='ArrowRight') right = false;
}


function startGame (){
  frames++;
  ctx.clearRect(0,0,canvas.width,canvas.height)
  background.draw();
  car.draw();
  move();
  requestAnimationFrame(startGame)
}



