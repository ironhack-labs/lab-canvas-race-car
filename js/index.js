//JS
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  //CANVAS
  class Obstacle {
    constructor() {
      this.obstacleX = Math.floor(Math.random() * 400 + 1) + 50;
      this.obstacleY = 0;
      this.width = 200;
      this.height = 20;
      this.canvas = document.getElementById(`canvas`);
      this.ctx = this.canvas.getContext(`2d`);
    }

    drawObstacle() {
      this.ctx.strokeStyle = `red`
      this.ctx.strokeRect(this.obstacleX, this.obstacleY, this.width, this.height)
      this.ctx.fillRect(this.obstacleX, this.obstacleY, this.width, this.height)
    }

    updatePosition() {
      if (this.obstacleY <= 710) {
        this.obstacleY += 2;
      } else {
        this.obstacleY = 0;
        this.obstacleX = Math.floor(Math.random() * 400 + 1) + 50;
      }
    }

    left() {
      return this.obstacleX;
    }

    right() {
      return this.obstacleX + this.width;
    }

    top() {
      return this.obstacleY;
    }

    bottom() {
      return this.obstacleY + this.height;
    }
  }

  //JS
  let playerLeft = 225;
  let playerTop = 250;
  let playerBottom = playerTop + 100;
  let playerRight = playerLeft + 50;

  let canvas = document.getElementById(`canvas`);
  let ctx = canvas.getContext(`2d`);

  let imgRoad = new Image();
  imgRoad.src = `images/road.png`;
  let imgCar = new Image();
  imgCar.src = `images/car.png`;


  let interval = setInterval(updateGameArea, 20);
  
  function startGame() {
    let imgRoad = new Image();
    imgRoad.src = `images/road.png`;

    let imgCar = new Image();
    imgCar.src = `images/car.png`;
    imgRoad.onload = function () {
      ctx.drawImage(imgRoad, 0, 0, canvas.width, canvas.height);
    };
    imgCar.onload = function () {
      ctx.drawImage(imgCar, playerLeft, playerTop, 50, 100);
    }
  };


  function clear() {
    let canvas = document.getElementById(`canvas`);
    let ctx = canvas.getContext(`2d`);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgRoad, 0, 0, canvas.width, canvas.height);
  }


  document.onkeydown = function (key) {
    switch (key.keyCode) {
      case 37:
        if (playerLeft >= 50) {
          playerLeft -= 5;
          playerRight = playerLeft + 50;;
        }
        break;

      case 39:
        if (playerLeft <= 400) {
          playerLeft += 5;
        }
        break;
      }
      
      playerRight = playerLeft + 50;
  }

  function updatePlayer() {
    let imgCar = new Image();
    imgCar.src = `images/car.png`;
    ctx.strokeStyle = `red`
    ctx.strokeRect(playerLeft, playerTop, 50, 100)
    ctx.drawImage(imgCar, playerLeft, playerTop, 50, 100)
  }

  let obstacle = new Obstacle();

  //CORE
  function updateGameArea() {
    clear();
    updatePlayer();
    obstacle.updatePosition();
    obstacle.drawObstacle();

    if (crash(obstacle)) {
      gameOver();
      
    }
  }
  console.log(Math.floor(Math.random() * 400 + 1) + 50)
  function crash(obstacle) {
    
    return !(playerBottom < obstacle.top() ||
      playerTop > obstacle.bottom() ||
      playerRight < obstacle.left() ||
      playerLeft > obstacle.right())
  }

  function gameOver() {
    clearInterval(interval);
  }
 
}