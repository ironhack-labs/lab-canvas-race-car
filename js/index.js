//JS
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


//CANVAS
class Obstacle {
  constructor() {
  this.obstacleX = Math.floor(Math.random() * 450 + 1);
  this.obstacleY = 0;
  this.width = 200;
  this.height = 20;
  this.canvas = document.getElementById(`canvas`);
  this.ctx = this.canvas.getContext(`2d`);
  }

  drawObstacle() {
    this.ctx.fillRect(this.obstacleX, this.obstacleY, this.width, this.height)
  }

  updatePosition() {
    console.log(this.obstacleY)
    if(this.obstacleY <= 710) {
    this.obstacleY += 2;
    } else {
    this.obstacleY = 0;
    this.obstacleX = Math.floor(Math.random() * 450 + 1);
    }

    // gameOver() {
      
    // }

  }
 }

//JS
  let playerX = 225;
  let playerY = 250;

  let canvas = document.getElementById(`canvas`);
  let ctx = canvas.getContext(`2d`);

  let imgRoad = new Image();
  imgRoad.src = `images/road.png`;
  let imgCar = new Image();
  imgCar.src = `images/car.png`;


  function startGame() {
    let imgRoad = new Image();
    imgRoad.src = `images/road.png`;

    let imgCar = new Image();
    imgCar.src = `images/car.png`;
    imgRoad.onload = function() {
      ctx.drawImage(imgRoad, 0, 0, canvas.width, canvas.height);
    };
    imgCar.onload = function() {
      ctx.drawImage(imgCar, playerX, playerY, 50, 100);
    }

    interval = setInterval(updateGameArea, 20);
    };


function clear() {
  let canvas = document.getElementById(`canvas`);
  let ctx = canvas.getContext(`2d`);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(imgRoad, 0, 0, canvas.width, canvas.height);
}


document.onkeydown = function (key) {
  switch(key.keyCode) {
    case 37:
    if(playerX >= 50) {
    playerX -= 5;
    console.log(playerX)
    }
      break;

    case 39:
    if(playerX <= 400) {
    playerX += 5;
    }
      break;
  }

}

function updatePlayer() {
  let imgCar = new Image();
  imgCar.src = `images/car.png`;
  ctx.drawImage(imgCar, playerX, playerY, 50, 100)
}

let obstacle = new Obstacle();
//CORE
function updateGameArea() {
clear();
updatePlayer();
obstacle.drawObstacle();
obstacle.updatePosition();
// move();
}

}

