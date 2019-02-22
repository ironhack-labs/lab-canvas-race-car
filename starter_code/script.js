"use strict";
var gameBoard;
var framerate;
var imgCar = new Image();
imgCar.src = "images/car.png";
var obstacles;
var status = 1;

// GAME BOARD constructor
function GameBoardConstr(setWidth) {
  document.getElementById("mycanvas").setAttribute("width", setWidth);
  this.width = setWidth;
  this.height = document.getElementById("mycanvas").getAttribute("height");
  this.score = 0;
  this.ctx = document.getElementById("mycanvas").getContext("2d");
  this.clearCanvas = this.ctx.clearRect(0, 0, this.width, this.height);
  this.borderLeft = 45;
  this.borderRight = this.width - 45 - car.width;
  this.obstacleInterval = 200;
  this.obstacleSpeed = 2;
  this.ctx.font = "20px Arial";
};

// CAR object
var car = {
  x: 150,
  y: 500,
  width: 158 * 0.25,
  height: 319 * 0.25,
  speed: 5
}

// OBSTACLE constructor
function ObstacleConstr() {
  // 175 is 45 + 130. 45 is right grasslane. 130 is max width block.
  this.x = Math.random() * (gameBoard.width - 175) + 45;
  this.y = -10;
  // 45 to 130
  this.width = Math.random() * 85 + 45;
  this.xmax = this.x + this.width;
  this.height = -15; // draw the Y up, easier for colission checks :)
  this.draw = function () {
    gameBoard.ctx.fillStyle = "red";
    gameBoard.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
};

// Moving the car
addEventListener("keydown", function (e) {
  switch (e.key) {
    case "ArrowLeft":
      if (car.x - car.speed >= gameBoard.borderLeft) {
        car.x -= car.speed;
        // make sure you can also go to the max left/right, even if speed car is changed
      } else if (car.x > gameBoard.borderLeft) {
        car.x = gameBoard.borderLeft;
      }
      break;
    case "ArrowRight":
      if (car.x + car.speed <= gameBoard.borderRight) {
        car.x += car.speed;
      } else if (car.x < gameBoard.borderRight) {
        car.x = gameBoard.borderRight;
      }
      break;
  };
});

// Initializing the board
window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame(350);
  };
  document.getElementById("mode-easy").onclick = function () {
    startGame(600);
  };

    function startGame(width) {
      if (status == 1) {
        gameBoard = new GameBoardConstr(width);
        obstacles = [];
        framerate = 0;
        status = 0; // status is reset after game over. Otherwise you can press start game forever.
        car.speed = 5;
        requestAnimationFrame(updateCanvas); // no function parantheses 
      } else {
        var warning = document.getElementById("warning");  
        warning.style.color = "red";
        setTimeout(function() {
          warning.style.color = "black";
        }, 1000);
      }
    }
  };

function updateCanvas() {
  framerate++;
  gameBoard.ctx.clearRect(0, 0, gameBoard.width, gameBoard.height)
  gameBoard.createRoad();
  gameBoard.createCar();
  gameBoard.createScore();
  // create obstacle
  if (framerate % gameBoard.obstacleInterval === 0) {
    var obstacle = new ObstacleConstr;
    obstacles.push(obstacle);
    gameBoard.score++;
  };
  // increase speed
  if (framerate % (gameBoard.obstacleInterval * 3) === 0) {
    gameBoard.obstacleSpeed += 1;
    if (car.speed < 26) {
      framerate = 0; // reset, otherwise the new interval will cause double objects etc.
      gameBoard.obstacleInterval -= 10;
      car.speed += 2;
    };
  };
  // move obstacles and check colission
  for (var i = 0; i < obstacles.length; i++) {
    obstacles[i].y += gameBoard.obstacleSpeed;
    obstacles[i].draw();
    // collision check here  
    if (obstacles[i].y >= car.y && obstacles[i].y <= car.y + car.height && car.x + car.width >= obstacles[i].x && car.x <= obstacles[i].xmax) {
      gameBoard.createGameOver();
      return;
    };
    // delete item when out of sight
    if (obstacles[i].y > gameBoard.height) {
      obstacles.splice(i, 1);
    }
  };
  requestAnimationFrame(updateCanvas);
};

// draw score
GameBoardConstr.prototype.createScore = function () {
  this.ctx.fillStyle = "white";
  this.ctx.fillText("Score: " + this.score, 60, 60);
};

// draw gameover
GameBoardConstr.prototype.createGameOver = function () {
  status = 1;
  this.ctx.font = "40px Arial";
  this.ctx.fillStyle = "black";
  this.ctx.fillRect(0, 0, this.width, 190);
  this.ctx.fillStyle = "red";
  this.ctx.textAlign = "center";
  this.ctx.fillText("Game Over!", this.width / 2, 60)
  this.ctx.fillStyle = "white";
  this.ctx.fillText("Your final score:", this.width / 2, 110);
  this.ctx.fillText(this.score, this.width / 2, 160);
};

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
  this.ctx.moveTo(this.width / 2, this.height + 157.5);
  this.ctx.lineTo(this.width / 2, 7.5);
  this.ctx.stroke();
  this.ctx.closePath();
};

// draw car
GameBoardConstr.prototype.createCar = function () {
  var that = this;
  // imgCar.onload = function () { 
  //   that.ctx.drawImage(imgCar, car.x, car.y, car.width, car.height);
  // };
  that.ctx.drawImage(imgCar, car.x, car.y, car.width, car.height);
};
 