function Canvas(assets){
  this.assets = assets;
}

Canvas.prototype.clearCanvas = function(){
  this.assets.ctx.clearRect(0,0,this.assets.ctx.width, this.assets.ctx.height);
}

Canvas.prototype.drawRoad = function(){
  var width = this.assets.ctx.width;
  var height = this.assets.ctx.height;
  this.assets.ctx.fillStyle = this.assets.green;
  this.assets.ctx.fillRect(0,0, width, height);
  this.assets.ctx.fillStyle = this.assets.gray;
  this.assets.ctx.fillRect(40,0, width-80, height);
  this.assets.ctx.fillStyle = this.assets.white;
  this.assets.ctx.fillRect(60,0, 20, height);
  this.assets.ctx.fillRect(width-80,0, 20, height);
  this.assets.ctx.fillStyle = this.assets.white;
}

Canvas.prototype.drawLines = function(){
  this.assets.roadIncrement += 5;
  var width = this.assets.ctx.width;
  var height = this.assets.ctx.height + 50;
  this.assets.ctx.fillStyle = this.assets.white;
  for (var i=0; i<this.assets.numLines + 10; i++)
  {
    var posY = (10 + this.assets.lineHeight * i + this.assets.roadIncrement) % height - 20;
    this.assets.ctx.fillRect(width/2 - 5, posY - 20, 10,  height/this.assets.numLines - this.assets.lineSeparation);
  }
}