// constructor
function Board (canvas, ctx) {
  this.canvas = canvas;
  this.ctx = ctx;
  this.w = 300;
  this.h = 600;

  this.x = 0;
  this.y = 0;
}

// Carretera
Board.prototype.drawRect = function (x, y, width, height) {
  this.ctx.fillStyle = 'rgb(0,145,0)';
  this.ctx.fillRect(x, y, width, height);
  this.ctx.fillStyle = 'gray';
  this.ctx.fillRect(50,y,200,600);
}

// clear
Board.prototype.clear = function () {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

// lineas
Board.prototype.drawLines = function () {

  this.ctx.fillStyle = 'white';
  for (var i = this.y; i < this.canvas.height; i += 40) {    
    this.ctx.fillRect(this.x + (this.canvas.width / 2) - 5, i, 10, 15);
  }

}


// Pintamos en el canvas
Board.prototype.draw = function () {
  this.drawRect(this.x, this.y, this.w, this.h);
  this.drawLines();
}

