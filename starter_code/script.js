window.onload = function () {



  document.getElementById("start-button").onclick = function () {

    startGame();
  };

  function startGame() {
    canvas.startRendering();
    canvas.setListeners();
  }

  function Canvas(id, color) {
    this.canvas = document.getElementById('canv');
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    this.counter = 0;
    this.x = 0;
    this.y = 0;
    this.grassWidth = 50;
    this.sideLineWidth = 16;
    this.carPosition = 175;
    this.carSteeringSpeed = 10;
    this.dashedLinePosition = 0;
    this.obstaclesPosition = 0;
    this.obstacleNumber = 6; //length of the roll will be this times 311, which is half the canvas height.
    this.obstacleArray = [];
    this.ourIntervalID = 0;
    this.score = 0;
    this.lapScore = 0;
  }

  Canvas.prototype.draw = function () {
    //Asphalt
    this.ctx.fillStyle = "#808080";
    this.ctx.fillRect(0, 0, 400, 622);
    //Grass
    this.ctx.fillStyle = "#008000";
    this.ctx.fillRect(0, 0, this.grassWidth, 622);
    this.ctx.fillStyle = "#008000";
    this.ctx.fillRect(400 - this.grassWidth, 0, this.grassWidth, 622);
    //Sidelines
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fillRect(this.grassWidth + this.sideLineWidth, 0, this.sideLineWidth, 622);
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fillRect(400 - this.grassWidth - 2 * this.sideLineWidth, 0, this.sideLineWidth, 622);
    this.drawDashedLine();
    this.drawCar();
    this.generateObstacles();
  }

  Canvas.prototype.drawDashedLine = function () {
    //MidDashedLine
    this.ctx.strokeStyle = "white";
    this.ctx.setLineDash([35, 25]);
    this.ctx.lineDashOffset = this.dashedLinePosition;
    this.ctx.beginPath();
    this.ctx.moveTo(200, 0);
    this.ctx.lineTo(200, 622);
    this.ctx.lineWidth = 10;
    this.ctx.stroke();
  }

  Canvas.prototype.drawCar = function () {
    var carImg = new Image();
    carImg.src = "./images/car.png";
    carImg.onload = function () {
      this.ctx.drawImage(carImg, this.carPosition, 500, 50, 100);
    }.bind(this)
  }

  Canvas.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  Canvas.prototype.move = function () {

    this.dashedLinePosition -= this.fps / 30;
    this.obstaclesPosition += this.fps / 30;

    if (this.obstaclesPosition > (293 + this.obstacleNumber * 311)) { //Regenerate the roll.
      this.dashedLinePosition = 0;
      this.obstaclesPosition = 0;
      this.lapScore++
    }
  }

  Canvas.prototype.startRendering = function () {

    this.ourIntervalID = setInterval(function () {
      this.clear();
      this.move();
      this.detectCollisions();
      this.draw();
      this.keepScore()

    }.bind(this), 1000 / this.fps);
  }

  Canvas.prototype.setListeners = function () {
    document.onkeydown = function (e) {
      e.preventDefault();
      var KEY_RIGHT = 39;
      var KEY_DOWN = 40;
      var KEY_LEFT = 37;
      switch (e.keyCode) {
        case KEY_LEFT:
          if (this.carPosition > (this.grassWidth + 2 * this.sideLineWidth)) { this.carPosition -= this.carSteeringSpeed };
          break;
        case KEY_RIGHT:
          if (this.carPosition + 50 < (400 - (this.grassWidth + 2 * this.sideLineWidth))) { this.carPosition += this.carSteeringSpeed };
          break;
        case KEY_DOWN:
          clearInterval(this.ourIntervalID);
          break;
      }
    }.bind(this);
  }

  Canvas.prototype.generateObstacles = function () {

    this.obstacleArray = [
      { x: 180, y: this.obstaclesPosition, x1: 150, y1: 30 },
      { x: 80, y: this.obstaclesPosition - 311, x1: 150, y1: 30 },
      { x: 160, y: this.obstaclesPosition - 622, x1: 150, y1: 30 },
      { x: 110, y: this.obstaclesPosition - 933, x1: 150, y1: 30 },
      { x: 200, y: this.obstaclesPosition - 1244, x1: 150, y1: 30 },
      { x: 100, y: this.obstaclesPosition - 1555, x1: 150, y1: 30 },
    ]

    this.ctx.fillStyle = "#fabada";
    this.ctx.fillRect(180, this.obstaclesPosition, 150, 30);
    this.ctx.fillStyle = "#fabada";
    this.ctx.fillRect(80, this.obstaclesPosition - 311, 150, 30);
    this.ctx.fillStyle = "#fabada";
    this.ctx.fillRect(160, this.obstaclesPosition - 622, 150, 30);
    this.ctx.fillStyle = "#fabada";
    this.ctx.fillRect(110, this.obstaclesPosition - 933, 150, 30);
    this.ctx.fillStyle = "#fabada";
    this.ctx.fillRect(200, this.obstaclesPosition - 1244, 150, 30);
    this.ctx.fillStyle = "#fabada";
    this.ctx.fillRect(100, this.obstaclesPosition - 1555, 150, 30);
  }

  Canvas.prototype.detectCollisions = function () {

    for (i = 0; i < this.obstacleArray.length; i++) {

      var cond1 = (this.carPosition < (this.obstacleArray[i].x + this.obstacleArray[i].x1));
      var cond2 = (this.carPosition + 50 > this.obstacleArray[i].x);
      var cond3 = (500 < (this.obstacleArray[i].y + this.obstacleArray[i].y1));
      var cond4 = (500 + 100 > this.obstacleArray[i].y);

      document.querySelector('.game-intro p').innerText =
        `${cond1} ${cond2} ${cond3} ${cond4}
      ${this.carPosition} ${this.obstacleArray[i].x} ${this.obstacleArray[i].y}
      ${this.obstaclesPosition} ${this.score}`

      if (cond1 && cond2 && cond3 && cond4) {
        clearInterval(this.ourIntervalID);
      }
    }
  }

  Canvas.prototype.keepScore = function () {

    if (this.obstaclesPosition < 811 && 500< this.obstaclesPosition) {
      this.score = 1 + 6*this.lapScore;
    } else if (this.obstaclesPosition < 1122 && 811< this.obstaclesPosition) {
      this.score = 2 + 6*this.lapScore;
    } else if (this.obstaclesPosition < 1433 && 1122< this.obstaclesPosition) {
      this.score = 3 + 6*this.lapScore;
    } else if (this.obstaclesPosition < 1744 && 1433< this.obstaclesPosition) {
      this.score = 4 + 6*this.lapScore;
    } else if (this.obstaclesPosition < 2000 && 1744< this.obstaclesPosition) {
      this.score = 5 + 6*this.lapScore;
    } else if (this.obstaclesPosition < 500 && 0< this.obstaclesPosition) {
      this.score = 6*this.lapScore
    }

  }
  var canvas = new Canvas;
  canvas.draw()
}




