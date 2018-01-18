var RaceCanvas = function(){
  this.width = 300;
  this.height = 500;
  this.ctx = document.getElementById('game-canvas').getContext('2d');
}

RaceCanvas.prototype.createCanvas = function(){
  this.ctx.clearRect(0,0,this.width,this.height);
  this.ctx.fillStyle="#666";
  this.ctx.fillRect(0,0,this.width,this.height);
  this.ctx.fillStyle="#13b226";
  this.ctx.fillRect(0,0,20,this.height); 
  this.ctx.fillRect(this.width-20,0,20,this.height);
  this.ctx.fillStyle="#fff";
  this.ctx.fillRect(28,0,8,this.height);
  this.ctx.fillRect(this.width-36,0,8,this.height);
  this.ctx.strokeStyle="#fff";
  this.ctx.lineWidth = 5;
  this.ctx.setLineDash([20, 15]);
  this.ctx.beginPath();
  this.ctx.moveTo(this.width/2, 0);
  this.ctx.lineTo(this.width/2, this.height);
  this.ctx.stroke();
}

RaceCanvas.prototype.createCar = function(x,y){
  var that = this;
  var img = new Image();
  img.onload = function() {
    that.ctx.drawImage(img,x,y,50,100);
  };
  img.src = 'images/car.png'; 
}