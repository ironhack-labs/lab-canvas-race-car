const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;
let gameover = false;

class Car{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 80;
    this.speed = 30;
    this.score = 0;
    this.image = new Image(this.width,this.height);
    this.image.src = './images/car.png';
  }
  checkBoundaries(){
    this.x = this.x <= this.width/2 ? this.width/2 : this.x;
    this.x = this.x >= width - this.width/2 ? width - this.width/2 : this.x;
  }
  countScore(){
    this.score += 1/50;
  }
  moveLeft(){
    this.x -= this.speed;
  }
  moveRight(){
    this.x += this.speed;
  }
}

class Obstacle{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.speed = 5;
    this.width = this.setRandomWidth();
    this.height = 40;
    this.color = '#890000';
  }
  setRandomWidth(){
    return Math.random() * (300 - 200) + 200;
  }
  move(){
    this.y += this.speed;
    if(this.y >= height + this.height){
      this.y = -this.height;
      this.x = width*Math.random();
      this.width = this.setRandomWidth();
    }
    gameover = contains(car,this);
  }
}

const bgImage = new Image();
let obstacles = [];
bgImage.src = './images/road.png';

const car = new Car(width/2, height/1.3);

function contains(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.height + a.y > b.y);
}

function drawRoad(){
  ctx.drawImage(bgImage, 0, 0,width, height);
}
function drawCar(){
  ctx.drawImage(car.image, car.x-car.width/2, car.y, car.width,car.height);
}

function drawObstacles(){
  for(const obs of obstacles){
    ctx.fillStyle = obs.color;
    ctx.fillRect(obs.x,obs.y,obs.width,obs.height);
    obs.move();
  }
}

function drawScore(){
  ctx.font = '20px sans-serif';
  ctx.fillStyle = '#ffffff';
  ctx.fillText(`Score:${Math.floor(car.score)}`, 100, 50);
  car.countScore();
}

window.onload = () => {
  
  function init(){

    document.getElementById('start-button').onclick = () => {
      startGame();
    };
  
    obstacles = [];
    for(let i=-2; i<2; i++){
      obstacles.push(new Obstacle(width*Math.random(),i*height/4));
    }
    drawGame();
  }

  function startGame() {

    window.addEventListener('keydown', (event) => {
      // Stop the default behavior (moving the screen to the left/up/right/down)
      event.preventDefault();
    
        // React based on the key pressed
        switch (event.keyCode) {
            case 37:
              car.moveLeft();
            break;
            case 39:
              car.moveRight();
            break;
        }
        car.checkBoundaries();
    });

    requestAnimationFrame(gameStarted);
  }

  function drawGame(){
    ctx.clearRect(0,0,width,height);
    drawRoad();
    drawCar();
    drawObstacles();
    drawScore();
  }
  function gameOver(){
    ctx.clearRect(0,0,width,height);
    ctx.fillStyle = '#000000';
    ctx.fillRect(0,0,width,height);
    ctx.font = '40px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ff0000';
    ctx.fillText(`Game Over`, width/2, height/2);
    ctx.fillStyle = '#fff';
    ctx.fillText(`Your Score`, width/2, height/2 + 50);
    ctx.fillText(Math.floor(car.score), width/2, height/2 + 100);
  }

  function gameStarted(){
    drawGame();
    if(!gameover){
      requestAnimationFrame(gameStarted);
    }else{
      gameOver();
    }
    
  }

  init();

};


