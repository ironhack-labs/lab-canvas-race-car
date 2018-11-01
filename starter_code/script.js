window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var KEY_RIGHT = 39;
  var KEY_LEFT = 37;

  function Car(canvas, x, y) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.vx = 15;
    this.setListeners();
    this.img = new Image();
    this.img.src = "images/car.png";
    this.setListeners();
  }

  Car.prototype.setListeners = function() {
    document.onkeydown = function(e) {
      e.preventDefault();
      switch (e.keyCode) {
        case KEY_LEFT:
          if (this.x > 0) this.x -= this.vx;
          break;
        case KEY_RIGHT:
          if (this.x <= this.canvas.width - 50) this.x += this.vx;
          break;
      }
    }.bind(this);
  };

  Car.prototype.carDraw = function() {
    this.ctx.drawImage(this.img, this.x, this.y, 40, 80);
  };

  function Obstacle(canvas, x, y, vy) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = x;
    this.y = y;
    this.vy = vy;
  }

  Obstacle.prototype.draw = function() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, 200, 30);
    this.ctx.closePath();
  };

  Obstacle.prototype.move = function() {
    this.y += this.vy;
  };
  function Canvas(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    this.counter = 0;
    this.car = new Car(this.canvas, 250, 560);
    this.offset = 0;
    this.obstacleArray = [];
  }

  Canvas.prototype.roadDraw = function() {
    this.ctx.beginPath();
    this.ctx.fillStyle = "#008500";
    this.ctx.fillRect(0, 0, 500, 650);
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.fillStyle = "#808080";
    this.ctx.fillRect(30, 0, 440, 650);
    this.ctx.closePath();
    this.ctx.beginPath();
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(50, 0, 20, 650);
    this.ctx.closePath();
    this.ctx.fillStyle = "#ffffff";
    this.ctx.fillRect(430, 0, 20, 650);
    this.ctx.closePath();
  };

  Canvas.prototype.drawLines = function() {
    this.ctx.setLineDash([4, 2]);
    this.ctx.lineDashOffset = -this.offset;
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.setLineDash([50, 50]);
    this.ctx.moveTo(250, 0);
    this.ctx.lineTo(250, 1300);
    this.ctx.lineWidth = 10;
    this.ctx.stroke();
    this.ctx.closePath();
  };

  Canvas.prototype.checkCollision = function() {
    this.obstacleArray.forEach(
      function(obstacle) {
        if (
          this.car.x + this.car.width >= obstacle.x &&
          obstacle.x + obstacle.width >= this.car.x &&
          this.car.y + this.car.height >= obstacle.y &&
          obstacle.height + obstacle.y >= this.car.y
        ) {
          return true;
        }
      }.bind(this)
    );
  };

  Canvas.prototype.drawAll = function() {

    this.intervalID = setInterval(
      function() {
        this.roadDraw();
        this.drawLines();
        this.car.carDraw();
        this.offset++;
        if (this.offset % 150 === 0) {
          this.obstacleArray.push(
            new Obstacle(this.canvas, Math.floor(Math.random() * 301), 0, 3)
          );
        }
        this.obstacleArray.forEach(function(obstacle) {
          obstacle.draw();
          obstacle.move();
        });
        if(this.checkCollision()) clearInterval(this.intervalID);
      }.bind(this),
      1000 / this.fps
    );
  };

  function startGame() {
    var canvas = new Canvas("raceCanvas");
    canvas.drawAll();
  }
};
