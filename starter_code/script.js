window.onload = function () {

  var canvas = new Canvas;
  canvas.draw()

  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {


  }
};

function Canvas(id, color) {
  this.canvas = document.getElementById('canv');
  this.ctx = this.canvas.getContext("2d");
  this.fps = 60;
  this.counter = 0;
  this.x = 0;
  this.y = 0;
  this.grassWidth = 50;
  this.sideLineWidth = 16;
  // this.width = document.querySelector('#canv').getAttribute("width");
  // this.height
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
  //MidDashedLine
  this.ctx.strokeStyle = "white";
  this.ctx.setLineDash([35, 25]);
  this.ctx.lineDashOffset = 65;
  this.ctx.beginPath();
  this.ctx.moveTo(200, 0);
  this.ctx.lineTo(200, 622);
  this.ctx.lineWidth = 10;
  this.ctx.stroke();
}