
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

  draw(){
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  collision (i){
    return(
      this.x < i.x + i.width &&
      this.x + this.width > i.x &&
      this.y < i.y +i.height &&
      this.y + this.height >i.y
    )
  }
}

class Obstacle{
  constructor(w,x){
    this.x = x;
    this.y = 0;
    this.width = w;
    this.height = 10;
    this.counter = 0;
  }

  draw(){
    if(frames % 13 === 0){
      this.y += 10;
    }
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

const board = new gameBoard ();
const raceCar = new Car((canvas.width/2)-(25), 590);
const obsta = [];

function generateObstacle(){
  if(frames === 0){
    let w = Math.floor(Math.random()*(300-100)+100)
    let x = Math.floor(Math.random())*(canvas.width-w)
    let object = new Obstacle(w,x);
    obsta.push(object);
  }
}

function drawObstacles(){
  obsta.forEach((element, i)=>{
    ctx.fillStyle = '#FF0000';
    element.draw()


    if(raceCar.collision(element)){
      endGame()
    }
    if(element.y + element.height > raceCar.y + raceCar.height && element.counter === 0){
      score++;
      element.counter++;
    }
    if(element.y >canvas.height){
      obsta.splice(i, 1)
    }
  })
}

function endGame(){
  board.gameOver();
  requestID = undefined
}

function update(){
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  board.draw();
  raceCar.draw();
  ctx.font = "25px Arial";
  ctx.fillStyle = "#FFF";
  ctx.fillText('Score; ${score}', 350, 50);
  generateObstacle();
  drawObstacles();

  if(requestID){
    requestID = requestAnimationFrame(update)
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    score = 0;
    requestID = requestAnimationFrame(update)
  }
};

addEventListener("keydown", (e) => {
  ///left key
  if(e.keyCode === 37 && raceCar.x > 25){
    raceCar.x -= 20;
  }
  ///right key
  if(e.keyCode === 39 && raceCar.x < 420){
    raceCar.x += 20;
  }
});