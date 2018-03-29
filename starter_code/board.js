function Canvas(id) {
  var canvas = document.getElementById(id);
  this.ctx = canvas.getContext("2d");
  this.w = 550;
  this.h = 520;
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
  this.ctx.fillStyle='white';
  this.ctx.fillRect(270, 10, 10, 50)
  this.ctx.fillStyle='white';
  this.ctx.fillRect(270, 90, 10, 50)
  this.ctx.stroke("white");

  /*var speed1=0;
  var speed2=0;
  
  function clearCanvas(){
    ctx.clearRect(270, 10, 10, 50)
    ctx.clearRect(270, 90, 10, 50)
  }

  function updateCanvas() {
    speed1+=1;
    speed2+=2;
    clearCanvas();
    this.ctx.fillRect(270, speed1, 10, 50)
    this.ctx.fillRect(270, speed2, 10, 50)
    window.requestAnimationFrame(updateCanvas);
  }

  window.requestAnimationFrame();*/
}

Canvas.prototype.draw= function(x, y, width, height){
  this.drawRect();
}

