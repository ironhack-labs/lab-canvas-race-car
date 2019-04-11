const myCanvas = document.getElementById("canvas");
const ctx = myCanvas.getContext("2d");

var speedY = 0;
var speedX = 0;
var posY = 450;
var posX = 162;
var myObstacles = [];
// var obstacle = {
//   color: 'red',
//   x: Math.floor((Math.random() * 300) + 25),
//   y: 0,
//   width: 30,
//   height: 40
// }

class Obstacle {
  constructor() {
    this.color = "red";
    this.x = Math.floor(Math.random() * 300 + 25);
    this.y = 0;
    this.width = 30;
    this.height = 40;
    this.move();
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    setInterval(() => {
      this.y += 5;
    }, 100);
  }
}

window.onload = function() {
  var imgCar = new Image();
  imgCar.src = "./images/car.png";

  // var myGameArea = {
  //   canvas: document.createElement("canvas"),
  //   start: function() {
  //     this.canvas.width = 337;
  //     this.canvas.height = 550;
  //     this.context = this.canvas.getContext("2d");
  //     document.body.insertBefore(this.canvas, document.body.childNodes)[0];
  //   }
  // };

  document.getElementById("start-button").onclick = function() {
    startGame();
    frames = 0;
  };

  function startGame() {
    draw(160, 460);

    clearCanvas();
    setInterval(() => {
      createObstacles();
    }, 2000);
  }

  setInterval(function() {
    clearCanvas();
    draw(162, 460);
  }, 20);

  function draw(x, y) {
    frames++;
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 40, 550);
    ctx.fillStyle = "gray";
    ctx.fillRect(40, 0, 10, 550);
    ctx.fillStyle = "white";
    ctx.fillRect(50, 0, 10, 550);
    ctx.fillStyle = "gray";
    ctx.fillRect(60, 0, 250, 550);
    ctx.fillStyle = "white";
    ctx.fillRect(310, 0, 10, 550);
    ctx.fillStyle = "gray";
    ctx.fillRect(320, 0, 10, 550);
    ctx.fillStyle = "green";
    ctx.fillRect(330, 0, 40, 550);

    if (frames % 30 === 0) {
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.setLineDash([20, 10]);
      ctx.moveTo(181, 0);
      ctx.lineTo(181, 580);
      ctx.lineWidth = 8;
      ctx.stroke();
    } else {
      ctx.strokeStyle = "white";
      ctx.beginPath();
      ctx.setLineDash([19, 19]);
      ctx.moveTo(181, 20);
      ctx.lineTo(181, 580);
      ctx.lineWidth = 8;
      ctx.stroke();
    }

    // ctx.strokeStyle = "white";
    // ctx.beginPath();
    // ctx.setLineDash([20, 20]);
    // ctx.moveTo(181, 0);
    // ctx.lineTo(181, 550);
    // ctx.lineWidth = 8;
    // ctx.stroke();

    posX += speedX; // 45
    posY += speedY;

    if (posX < 50 || posX > 280) {
      posX += speedX * -1;
    }

    if (posY < 0 || posY > 470) {
      posY += speedY * -1;
    }

    ctx.drawImage(imgCar, posX, posY, 158 / 4, 319 / 4);

    for (let i = 0; i < myObstacles.length; i++) {
      myObstacles[i].draw();
    }
  }

  function createObstacles() {
    var obstacle = new Obstacle();
    myObstacles.push(obstacle);
  }

  //  function updateObstacles(){

  //   var obstaclesFrames = 0
  //  }

  function clearCanvas() {
    ctx.clearRect(0, 0, 10000, 10000);
  }

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 39:
        speedX += 5;
        break;
      case 37: // left arrow
        speedX -= 5;
        break;
      case 38: // up arrow
        speedY -= 5;
        break;
      case 40: // down arrow
        speedY += 5;
        break;
    }
  };

  // if(posX < 50){
  //   posX +=15;
  //  } else {
  //    posX -= 15;
  //  }
  // }
  // document.onkeydown = function(e) {
  //   switch (e.keyCode) {
  //     case 39:
  //       speedX += 10;
  //       break;
  //     case 37: // left arrow
  //       speedX -= 10;
  //       break;
  //   }
  // };

  document.onkeyup = function() {
    speedX = 0;
    speedY = 0;
  };
};
