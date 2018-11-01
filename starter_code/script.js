window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {}

  function Canvas(myCanvas) {
    var canvas = document.getElementById(myCanvas);
    this.w = 350;
    this.h = 600;
    this.ctx = canvas.getContext("2d");
    
    
  }
  
  function Road(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.width = 350;
    this.height = 600;
    this.imageCar= new Image();
    this.imageCar.src="./images/car.png";
  }

  Road.prototype.green = function() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  Road.prototype.grey = function() {
    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(this.x +25, this.y, this.width-50, this.height );
  }
  
  Road.prototype.white= function(){
    this.ctx.fillStyle= "white"
    this.ctx.fillRect(this.x +37,this.y,this.width -337,this.height);
    this.ctx.fillRect(this.x+300,this.y, this.width-337,this.height)
  }
  Road.prototype.line=function(){
   
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.setLineDash([20,15]);
    this.ctx.moveTo(this.x+175, this.y);
    this.ctx.lineTo(this.x+175, this.y+600);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  Road.prototype.car =function(){
  
  this.imageCar.onload=function(){
  this.ctx.drawImage(this.imageCar, this.x+150, this.y +470, 50, 100);

  }.bind(this)

}

  


  var canvas = new Canvas('myCanvas');
  var road = new Road(canvas.ctx);

    road.green();
    road.grey();
    road.white();
    road.line();
    road.car();

};
