window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var RaceCanvas = function() {
      this.width = 300;
      this.height = 500;
      this.ctx = document.getElementById("game-canvas").getContext("2d");
    };

    RaceCanvas.prototype.createCanvas = function() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = "#666";
      this.ctx.fillRect(0, 0, this.width, this.height);
      this.ctx.fillStyle = "#13b226";
      this.ctx.fillRect(0, 0, 20, this.height);
      this.ctx.fillRect(this.width - 20, 0, 20, this.height);
      this.ctx.fillStyle = "#fff";
      this.ctx.fillRect(28, 0, 8, this.height);
      this.ctx.fillRect(this.width - 36, 0, 8, this.height);
      this.ctx.strokeStyle = "#fff";
      this.ctx.lineWidth = 5;
      this.ctx.setLineDash([20, 15]);
      this.ctx.beginPath();
      this.ctx.moveTo(this.width / 2, 0);
      this.ctx.lineTo(this.width / 2, this.height);
      this.ctx.stroke();
    };

    RaceCanvas.prototype.createCar = function(x, y) {
      var that = this;
      var img = new Image();
      //img.onload = function() {
      that.ctx.drawImage(img, x, y, 50, 100); //};
      img.src = "images/car.png";
    };

    fps = 50;
    var RaceCar = function(x, y) {
      this.maxSpeed = 100;
      this.pos = { X: x, Y: y };
      this.speed = 0;
    };

    RaceCar.prototype.move = function(direction) {
      this.speed = this.maxSpeed * direction;
    };
    RaceCar.prototype.stop = function() {
      this.speed = 0;
    };
    RaceCar.prototype.render = function(delta) {
      this.pos.X += this.speed / 1000 * delta;

      //canvas.createCar(this.pos.X,this.pos.Y);
      var img = new Image();
      img.src = "images/car.png";
      //img.onload = function() {
      canvas.ctx.drawImage(img, this.pos.X, this.pos.Y, 50, 100); //};
    };

    var canvas = new RaceCanvas();
    var car = new RaceCar(canvas.width / 2 - 25, canvas.height - 120);

    var now = Date.now();
    var delta = 0;

    var rendering = function() {
      then = now;
      now = Date.now();
      delta = now - then;

      canvas.ctx.clearRect(0, 0, canvas.width, canvas.height);
      canvas.createCanvas();
      car.render(delta);

      window.requestAnimationFrame(rendering);
    };
    window.requestAnimationFrame(rendering);

    document.getElementById("game-canvas").setAttribute("width", canvas.width);
    document
      .getElementById("game-canvas")
      .setAttribute("height", canvas.height);
    canvas.createCanvas();
    canvas.createCar(canvas.width / 2 - 25, canvas.height - 120);

    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37: // izquierda
          car.move(-1);
          break;
        case 39: // derecha
          car.move(1);
          break;
      }
    };

    document.onkeyup = function(e) {
      car.stop();
    };
  }
};
