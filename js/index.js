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

const car = new Car(225,575,50,100);


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

  gameOver(){
    ctx.font="75px Arial"
    ctx.fillText("Game Over!",150,150)
  }
}

const background = new Background(0,0,canvas.width,canvas.height)


class Obstacle {
  constructor(x,w){
    this.x = x;
    this.y = 0; // Obstacles will be coming from the top
    this.width = w;
    this.height = 30; // Always has the same heigth
  }

  draw(){
    // Dificulty adjusted every 10seg
    if(frames <= 1000) this.y += 4;
    if(frames > 1000) this.y += 5;
    if(frames >= 2000) this.y += 6;
    ctx.fillStyle = "#930000";
    ctx.fillRect(this.x,this.y,this.width,this.height)
  }
}

let obstaclesArr = [];

function generateObstacles(){
  if(frames % 100 == 0){
          // New obstacle (X= 50-220, W= 125-250)
    let x = Math.floor(Math.random() * (220 - 50) + 50);
    let w = Math.floor(Math.random() * (250 - 125) + 150);

    const obstacle = new Obstacle(x,w);
    console.log(obstacle)

    obstaclesArr.push(obstacle)
  }
}

function drawObstacles(){
  obstaclesArr.forEach((obstacle,index_obstacle)=>{
    obstacle.draw()

    if(obstacle.y + obstacle.height >= 700){
      obstaclesArr.splice(index_obstacle,1)
    }
  })
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

// When the key is pressed car is in movement
document.onkeydown = function(e){
  if(e.key === 'ArrowLeft') left = true;
  if(e.key ==='ArrowRight') right = true;
}

// When the key is released car is stopped
document.onkeyup = function(e){
  if(e.key === 'ArrowLeft') left = false;
  if(e.key ==='ArrowRight') right = false;
}

// Limit Car Boundaries (Highway)
function limitCarMovement (){
  if (car.x > 405) {
    car.x = 405
  }

  if(car.x < 50) {
    car.x = 50
  }
}

let score = 0;

function countScore(){

}

// Show white score on the upper left side 
function drawScore(){
  ctx.fillStyle = "#fff";
  ctx.font="28px Arial"
  ctx.fillText("Score: "+score, 70, 40);
}

function gameOn(){
  requestID = requestAnimationFrame(startGame)
}

function endGame(){
  background.gameOver();
  requestID = undefined;
}

function startGame (){
  frames++;
  ctx.clearRect(0,0,canvas.width,canvas.height)
  background.draw();
  car.draw();
  move();
  limitCarMovement();
  generateObstacles();
  drawObstacles();
  gameOn();
  drawScore()
  
}