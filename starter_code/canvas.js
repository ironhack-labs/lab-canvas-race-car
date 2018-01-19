function GameBoard(){
  this.ctx = document.getElementById('cargame').getContext('2d');

}

GameBoard.prototype.drawGameBoard = function(){

  this.ctx.fillStyle = "#00AA00";
  this.ctx.fillRect(0, 0, 330, 700);
  this.ctx.fillStyle = "#808080";
  this.ctx.fillRect(15, 0, 300, 700); //x,y
  this.ctx.fillStyle = "#FFF";
  this.ctx.fillRect(20, 0, 5, 700);
  this.ctx.fillRect(305, 0, 5, 700);
  this.ctx.moveTo(160, 0);// x, Y
  this.ctx.strokeStyle = "#FFF";
  this.ctx.setLineDash([10, 20]); //líneas cortadas
  this.ctx.lineWidth=5;
  this.ctx.lineTo(160, 700);
  this.ctx.stroke();

}

GameBoard.prototype.cleanGameBoard = function(){

  this.ctx.clearRect(0,0,330,700);
}

function Car(){
  //this.speed = 10;
  this.imgUrl = "images/car.png";
  this.x = 140;
  this.y = 580;
  this.scale = 158/319;
}

Car.prototype.drawCar = function(ctx){

   var img = new Image();
   imgScale = this.scale;
   var x= this.x;
   var y = this.y;
   img.onload = function() {
       ctx.drawImage(img, x , y, 90*imgScale, 90);
   };
  img.src = this.imgUrl;


}