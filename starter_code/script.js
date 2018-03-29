window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    var canvasDOM = $("<canvas width = '500' height = '600' id = 'myCanvas' >");
    $("#game-board").append(canvasDOM);
    var canvas = new Canvas('myCanvas');
    canvas.draw();
  }

  function Canvas(id) {
    var canvas = document.getElementById(id);
    this.w = 500;
    this.h = 600;
    this.ctx = canvas.getContext("2d");
    this.coche = new Image();
    this.coche.src = "images/car.png";
    console.log(this.coche.width,this.coche.height);
    this.coche.onload = function() {
      this.drawImage();
    }.bind(this);
  }

  Canvas.prototype.drawRect = function (x, y, width, height) {
    this.ctx.fillRect(x, y, width, height)
  }

  Canvas.prototype.drawImage = function () {
    console.log("VEO COCHE", this.coche)
    this.ctx.drawImage(this.coche,  - this.coche.width/2, this.canvas.height-this.coche.height);
  }
  Canvas.prototype.draw = function () {
    this.ctx.fillStyle = "green";
    this.drawRect(0, 0, 500, this.h);
    this.ctx.fillStyle = "grey";
    this.drawRect(40, 0, 420, this.h);
    this.ctx.fillStyle = "white";
    this.drawRect(50, 0, 20, this.h);
    this.drawRect(this.w - 70, 0, 20, this.h);
    this.ctx.beginPath();
    this.ctx.setLineDash([30, 15]);
    this.ctx.lineWidth = 10;
    this.ctx.moveTo(this.w / 2 - 5, 0);
    this.ctx.lineTo(this.w / 2 - 5, this.h);
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
    this.ctx.closePath();
    

  }


};
