function Canvas() {
  var canvas = document.getElementById("road");
  this.ctx = canvas.getContext("2d");
  this.w = 550;
  this.h = 520;
  this.car = new Car()
}

Canvas.prototype.drawRect = function(x, y, width, height) {
  this.ctx.fillStyle='green';
  this.ctx.fillRect(0, 0, this.w, this.h)
  this.ctx.fillStyle='grey';
  this.ctx.fillRect(50, 0,this.w-100, this.h)
  this.ctx.fillStyle='white';
  this.ctx.fillRect(60, 0, 10, this.h)
  this.ctx.fillStyle='white';
  this.ctx.fillRect(this.w-70, 0, 10, this.h)
  this.ctx.setLineDash([10,45]);
  this.ctx.strokeStyle="white";
  this.ctx.beginPath();
  this.ctx.moveTo(275, 520);
  this.ctx.lineTo(275, 0);
  this.ctx.stroke();
}

Canvas.prototype.draw= function(x, y, width, height){
  this.drawRect();
}

Canvas.prototype.clean= function(){
  this.ctx.clearRect(0,0,this.w, this.h);
}
