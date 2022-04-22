//CLASSES
class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.height = 700;
    this.image = new Image();
    this.image.src = "/images/road.png";
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

}

class RaceCar {
  constructor() {
    this.x = 215;
    this.y = 550;
    this.width = 70;
    this.height = 120;
    this.image = new Image();
    this.image.src = "/images/car.png";
  }
  
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  move(keyboard) {
    switch (keyboard) {
      case 37: //left
        if (this.x >= 35) {
          this.x -= 10;
        }
        break;
  
      case 39: //RIGHT
        if (this.x <= 395) {
          this.x += 10;
        }
    }
  }

  collision(obstacle){
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x+ this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    )
  }
}

class Obstacle{
  constructor(x, width){
    this.x = x;
    this.y = 0;
    this.height = 30;
    this.width = width;
    this.image = new Image();
    this.image.src = "/images/obstacle.png"
  }

  draw(){
    this.y += 5;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
}

//VARIABLES NECESSARIAS
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let frames = 0;
const background = new Background();
const raceCar = new RaceCar();
let obstacles = [];

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  addEventListener("keydown", (event)=>{
    raceCar.move(event.keyCode);
  })
  
};


function startGame() {
  requestId = requestAnimationFrame(updateGame);
}

function gameOver(){
  requestId = undefined
}

function updateGame() {
  frames++;
  ctx.clearRect(0, 0, 500, 700);
  background.draw();
  raceCar.draw();
  generateObstacles();
  drawObstacles();

  if (requestId){
    requestAnimationFrame(updateGame);
  }
}

function generateObstacles(){
  if ( !(frames %100 === 0) ){
    return true
  }

  //CAR WIDTH 70
  const width = Math.floor(Math.random() * (canvas.height * 0.6)) + 30;
  const randomX = Math.floor(Math.random() * (canvas.height * 0.6)) + 30;
  const obstacle1 = new Obstacle(randomX, width);

  obstacles.push(obstacle1)
}

function drawObstacles (){
   obstacles.forEach((obstacle, index_obstacle)=>{

    if (obstacle.y > 750){
      obstacles.splice(index_obstacle,1)
    }

    obstacle.draw()

    if (raceCar.collision(obstacle)){
      gameOver()
    }

   })
}