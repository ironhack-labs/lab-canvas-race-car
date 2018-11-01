window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function Canvas() {
    this.canvas = document.querySelector("#my-canvas");
    this.ctx = this.canvas.getContext('2d');
    this.x = 30;
    this.y = 0;
    this.width = 240;
    this.height = 450;
  }

  Canvas.prototype.drawRoad = function () {
    this.ctx.fillStyle = 'gray';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  Canvas.prototype.drawLines = function () {
    this.ctx.setLineDash([0, 0])
    this.ctx.lineWidth = 6;
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 10, this.y);
    this.ctx.lineTo(this.x + 10, this.height);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.moveTo(this.width + 20, this.y);
    this.ctx.lineTo(this.width + 20, this.height);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  Canvas.prototype.drawDashed = function () {
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 4;
    this.ctx.beginPath();
    this.ctx.setLineDash([6, 10]);
    this.ctx.moveTo(this.canvas.width / 2, this.y);
    this.ctx.lineTo(this.canvas.width / 2, this.height);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  Canvas.prototype.setCar = function() {
    var img = new Image();
    img.src = "./images/car.png";

    this.ctx.drawImage(img, this.canvas.width / 2, this.height)
  }

  var canvas = new Canvas();

  function startGame() {
    canvas.drawRoad();
    canvas.drawDashed();
    canvas.drawLines();
    canvas.setCar();
  }


};

