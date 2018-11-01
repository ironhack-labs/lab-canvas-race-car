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
    this.vx = 10;
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
          this.x -= this.vx;
          break;
        case KEY_RIGHT:
          this.x += this.vx;
          break;
      }
    }.bind(this);
  };

  Car.prototype.carDraw = function() {
    this.ctx.drawImage(this.img, this.x, this.y, 40, 80);
  };

  Car.prototype.move = function() {
    if (this.x >= this.canvas.width || this.x < 0) {
      this.vx *= -1;
    }
  };

  function Canvas(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    this.counter = 0;
    this.carA = new Car(this.canvas, 250, 560);
    this.offset = 0;
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

  Canvas.prototype.drawAll = function() {
    setInterval(
      function() {
        this.roadDraw();
        this.drawLines();
        this.carA.carDraw();
        this.offset++
      }.bind(this),
      1000 / this.fps
    );
  };

  function startGame() {
    var canvas = new Canvas("raceCanvas");
    canvas.drawAll();
  }
};
