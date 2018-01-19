function GameBoard(ctx) {
    this.ctx = document.getElementById('myCanvas').getContext('2d');
}

GameBoard.prototype.drawRoad = function(lado){
    this.ctx.fillStyle = "#00b200";
    this.ctx.fillRect(0, 0, 330, 750);
    this.ctx.fillStyle = "#808080";
    this.ctx.fillRect(10, 0, 310, 750);
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillRect(15, 0, 5, 750);
    this.ctx.fillRect(310, 0, 5, 750);
    this.ctx.strokeStyle = "#FFF";
    this.ctx.setLineDash([10, 20]);
    this.ctx.moveTo(165, 0);
    this.ctx.lineTo(165, 750);
    this.ctx.stroke();
  }

  GameBoard.prototype.clean = function() {
    this.ctx.clearRect(0, 0, 330, 750)
  }