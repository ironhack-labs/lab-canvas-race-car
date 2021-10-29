const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let requestID;
let frames = 0;

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    gameOn()
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

    collision(item){
      return (
        this.x < item.x + item.width &&
        this.x + this.width > item.x &&
        this.y < item.y + item.height &&
        this.y + this.height > item.y
      )
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
    // Same speed as abstacles
    if(frames <= 1000) this.y += 4;
    if(frames > 1000) this.y += 5;
    if(frames >= 2000) this.y += 6;
    // Bring the image again to the beginning
    if(this.y > canvas.height) this.y = 0;

    ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
    // Repetitive Background
    ctx.drawImage(this.image,this.x,this.y - this.height,this.width, this.height);
  }

  gameOver(){
    ctx.fillStyle = "red";
    ctx.font="50px Arial"
    ctx.fillText('Game Over!',120,350,400);
    ctx.fillStyle = "#fff";
    ctx.font="30px Arial"
    ctx.fillText('Your final Score',150,390,400);
    ctx.font="35px Arial"
    ctx.fillText(`${score}`,250,430,400)
  }
}

const background = new Background(0,0,canvas.width,canvas.height);


class Obstacle {
  constructor(x,w){
    this.x = x;
    this.y = 0; // Obstacles will be coming from the top
    this.width = w;
    this.height = 30; // Always has the same heigth
  }

  draw(){
    // Dificulty adjusted every 10seg as the background speed
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
                  
    let x = Math.floor(Math.random() * (220 - 50) + 50); // Range from 50 to 220
    let w = Math.floor(Math.random() * (250 - 125) + 125); // Range from 125 to 250

    const obstacle = new Obstacle(x,w);
    // console.log(obstacle) To check objets are being created

    obstaclesArr.push(obstacle)
  }
}

function drawObstacles(){
  obstaclesArr.forEach((obstacle,index_obstacle)=>{
    obstacle.draw()

    //  Lines commented. Canvas was blinking with each splice
    // if(obstacle.y + obstacle.height >= 700){
    //  obstaclesArr.splice(index_obstacle,1)
    // }

    if(car.collision(obstacle)){
      // console.log('Crash!') Validating collision
      endGame()
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
  if(frames > 200){
  if(frames % 97 === 0) score++
  }
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
  drawScore()
  countScore()

  if(requestID){
    requestID = requestAnimationFrame(startGame)
  }

}

