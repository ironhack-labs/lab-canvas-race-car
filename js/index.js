const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//ROAD GAME
class RoadGame {
  constructor(){
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
  }

  drawBackground(){
    let imgBackground = new Image();
    imgBackground.src = "../images/road.png";
    ctx.drawImage(imgBackground, 0, 0, this.width, this.height);
  }

}

let roadGame = new RoadGame();


//CAR GAME
class Car {
  constructor(){
    this.width = 52.6;
    this.height = 106.3;
    this.x = canvas.width/2 - this.width/2;
    this.y = canvas.height - this.height -10;
    this.speedX = 20;
  }

  drawCar(){
    let imgCar = new Image();
    imgCar.src = "../images/car.png";
    ctx.drawImage(imgCar, this.x, this.y, this.width, this.height);
  }

  moveRight(){
    this.x += this.speedX;
  }

  moveLeft(){
    this.x -= this.speedX;
  }
}

let car = new Car();

class Obstacles {
  constructor(){
    this.width = 30 * Math.floor(Math.random() * 10);
    this.height = 30;
    this.x = Math.floor(Math.random() * 400);
    this.y = 0;
    this.color = "#880000";
    this.obstaclesNum = [];
  }

  drawObstacle(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move(){
    this.y += 4;
  }


}

let obstacles = new Obstacles();




function drawObstacles(){
  obstacles.drawObstacle();
  obstacles.move();
}

function moveObstacles(){
  obstacles.move();
}

function updateGame(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  roadGame.drawBackground();
  car.drawCar();
  drawObstacles();
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    
    setInterval(function(){
      updateGame();
    }, 1000/24);
    
  };

  document.addEventListener('keydown', (event) => {
    if (event.key == "ArrowRight"){
      car.moveRight();
    } else if (event.key == "ArrowLeft") {
      car.moveLeft();
    }
  });

  
    
};
