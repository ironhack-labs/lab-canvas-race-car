"use strict";
var gameBoard;
var framerate = 0;
var imgCar = new Image();
imgCar.src = "images/car.png";
var obstacles = [];

// GAME BOARD constructor
function GameBoardConstr() {
  this.width = document.getElementById("mycanvas").getAttribute("width");
  this.height = document.getElementById("mycanvas").getAttribute("height");
  this.score = 0;
  this.ctx = document.getElementById("mycanvas").getContext("2d");
  this.clearCanvas = this.ctx.clearRect(0, 0, this.width, this.height);
  this.borderLeft = 45;
  this.borderRight = this.width - 50 - car.width;
  this.obstacleInterval = 250;
  this.obstacleSpeed = 2;
  this.ctx.font = "20px Arial";
};

// CAR object
var car = {
  x: 150,
  y: 500,
  width: 158 * 0.25,
  height: 319 * 0.25
}

// OBSTACLE constructor
function ObstacleConstr() {
  // 45 to 175
  this.x = Math.random() * 130 + 45;
  this.y = -10;
  // 45 to 130
  this.width = Math.random() * 85 + 45;
  this.xmax = this.x + this.width;
  this.height = -15; // draw the Y up :)
  this.draw = function () {
    gameBoard.ctx.fillStyle = "red";
    gameBoard.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowLeft":
      if (car.x > gameBoard.borderLeft) {
        car.x -= 5;
      }
      console.log("left is pressed" + car.x);
      break;
    case "ArrowRight":
      if (car.x < gameBoard.borderRight) {
        car.x += 5;
      }
      console.log("right is pressed " + car.x)
      break;
  }
})

// Initializing the board
window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    gameBoard = new GameBoardConstr();
    requestAnimationFrame(updateCanvas); // no function parantheses 
  }
};

function updateCanvas() {
  framerate++;
  gameBoard.ctx.clearRect(0, 0, gameBoard.width, gameBoard.height)
  gameBoard.createRoad();
  gameBoard.createCar();
  gameBoard.createScore();
  // console.log(framerate); 
  if (framerate % gameBoard.obstacleInterval === 0) {
    var obstacle = new ObstacleConstr;
    obstacles.push(obstacle);
    // console.log(obstacles);
    gameBoard.score++;
  };
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].y += gameBoard.obstacleSpeed;
    obstacles[i].draw();
    // delete item when out of sight
    if (obstacles[i].y > gameBoard.height) {
      obstacles.splice(i, 1);
    };
    // collision check here  
    if (obstacles[i].y == car.y && car.x + car.width >= obstacles[i].x && car.x <= obstacles[i].xmax) {
      gameBoard.createGameOver();
      return;
    }
  };
  requestAnimationFrame(updateCanvas);
};

// draw score
GameBoardConstr.prototype.createScore = function() { 
  this.ctx.fillStyle = "white";
  this.ctx.fillText("Score: " + this.score, 60, 60);
}

// draw gameover
GameBoardConstr.prototype.createGameOver = function() { 
  this.ctx.font = "40px Arial";
  this.ctx.fillStyle = "black";
  this.ctx.fillRect(0,0,this.width,190);
  this.ctx.fillStyle = "red";
  this.ctx.textAlign = "center";
  this.ctx.fillText("Game Over!", this.width / 2, 60)
  this.ctx.fillStyle = "white";
  this.ctx.fillText("Your final score:", this.width / 2, 110);
  this.ctx.fillText(this.score, this.width / 2, 160);
}

// draw road
GameBoardConstr.prototype.createRoad = function () {
  // start grey
  this.ctx.fillStyle = "grey";
  this.ctx.fillRect(0, 0, this.width, this.height);
  // green lanes
  var widthGr = 25;
  this.ctx.fillStyle = "green";
  this.ctx.fillRect(0, 0, widthGr, this.height);
  this.ctx.fillRect(this.width - widthGr, 0, widthGr, this.height);
  // white lines (outer)
  var widthWi = 10;
  this.ctx.clearRect(widthGr + widthWi, 0, widthWi, this.height);
  this.ctx.clearRect(this.width - widthGr - widthWi * 2, 0, widthWi, this.height);
  // white lines (dashed)
  this.ctx.beginPath();
  this.ctx.setLineDash([15, 15]);
  this.ctx.strokeStyle = "white";
  this.ctx.lineWidth = 4;
  this.ctx.moveTo(this.width / 2, this.height + 15 / 2);
  this.ctx.lineTo(this.width / 2, 0);
  this.ctx.stroke();
};

// draw car
GameBoardConstr.prototype.createCar = function () {
  // console.log("create car");

  var that = this;
  // imgCar.onload = function () { 
  //   that.ctx.drawImage(imgCar, car.x, car.y, car.width, car.height);
  // };
  that.ctx.drawImage(imgCar, car.x, car.y, car.width, car.height);
};


