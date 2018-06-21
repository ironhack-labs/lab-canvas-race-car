function Board(width, height) {
  this.width = width;
  this.height = height;
  this.limitLeft = 40;
  this.limitRight = this.width - 40;
  this.streetColor = '#808080';
  this.grassColor = '#008100';
  this.linesColor = '#ffffff';
  this.centralLineOpts = {
    sep: 20,
    lineSize: 30,
    posY: -30
  }
}

Board.prototype.move = function() {
  this.centralLineOpts.posY++;
  if (this.centralLineOpts.posY === 20) {
    this.centralLineOpts.posY = -30;
  }
}

Board.prototype.draw = function(ctx) {
  this.drawStreet(ctx);
  this.drawGrass(ctx);
  this.drawSideLines(ctx);
  this.drawCentralLines(ctx);
}

Board.prototype.drawStreet = function(ctx) {
  ctx.fillStyle = this.streetColor;
  ctx.fillRect(0, 0, this.width, this.height);
}

Board.prototype.drawGrass = function(ctx) {
  ctx.fillStyle = this.grassColor;
  ctx.fillRect(0, 0, 30, this.height);
  ctx.fillRect(this.width - 30, 0, 30, this.height);
}

Board.prototype.drawSideLines = function(ctx) {
  ctx.beginPath();
  ctx.setLineDash([]);
  ctx.strokeStyle = this.linesColor;
  ctx.lineWidth = 5;

  ctx.moveTo(40, 0);
  ctx.lineTo(40, this.height);

  ctx.moveTo(this.width - 40, 0);
  ctx.lineTo(this.width - 40, this.height);

  ctx.stroke();
}

Board.prototype.drawCentralLines = function(ctx) {
  ctx.beginPath();
  ctx.setLineDash([this.centralLineOpts.lineSize, this.centralLineOpts.sep]);

  ctx.moveTo(this.width / 2, this.centralLineOpts.posY);
  ctx.lineTo(this.width / 2, this.height);

  ctx.stroke();
}