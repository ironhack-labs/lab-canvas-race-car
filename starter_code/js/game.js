window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  function Canvas(id) {
      this.canvas = document.getElementById(id);
      this.ctx = this.canvas.getContext("2d");
      this.w = 800;
      this.h = 700;
    
      this.roads = [ new Road(this.canvas, this.ctx) , new Road(this.canvas, this.ctx)];


  }
  
  Canvas.prototype.drawRect = function(x, y, width, height) {
    this.ctx.fillRect(x, y, width, height)
  }
  
  Canvas.prototype.drawSquare = function(x, y, width) {
    this.drawRect(x, y, width, width);
  }

  Canvas.prototype.drawMessage = function(x, y, message) {
    this.ctx.font = "30px sans-serif";
    this.ctx.lineWidth = 1;
    this.ctx.fillText(message, x, y, 250);
  }
  
  Canvas.prototype.clear = function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  Canvas.prototype.dashedLine = function(sX, sY, dX, dY, lineLength,lineSpacing){
    this.ctx.beginPath();
    this.ctx.lineWidth = 12;
    this.ctx.setLineDash([lineLength, lineSpacing]);
    this.ctx.moveTo(sX, sY);
    this.ctx.lineTo(dX,dY);
    this.ctx.stroke();
  }
  
  }
  
  Canvas.prototype.draw = function() {
    this.ctx.fillStyle = "rgb(0,139,0)"
    this.drawRect(0,0,canvas.w,canvas.h)
    this.ctx.fillStyle = "rgb(128,128,128)"
    this.drawRect(60,0,canvas.w-120,canvas.h)
    this.ctx.fillStyle = "rgb(255,255,255)"
    this.drawRect(80,0,20,canvas.h)
    this.drawRect(700,0,20,canvas.h)
    this.ctx.strokeStyle = "rgb(255,255,255)"
    this.dashedLine(400, 0, 400, 700, 40, 30)
    
  }
  
  var canvas = new Canvas("my-canvas");
  canvas.draw();
  

  function startGame() {

  }
};
