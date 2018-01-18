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
