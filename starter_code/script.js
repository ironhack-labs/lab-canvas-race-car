window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var myBoard = new Board();
  }
};

 function Board () {
	this.ctx = document.getElementById('boardgame').getContext('2d');
	this.drawBoard();
}

Board.prototype.drawBoard = function() {
	this.ctx.clearRect(0,0, 400, 800);
  	this.ctx.fillStyle ="green";
  	this.ctx.fillRect(0,0, 40,800);
  	this.ctx.fillStyle ="green";
  	this.ctx.fillRect(400-40,0, 40,800);
  	this.ctx.fillStyle ="gray";
  	this.ctx.fillRect(40,0, 10,800);
  	this.ctx.fillStyle ="gray";
  	this.ctx.fillRect(400-40-10,0, 10,800);
  	this.ctx.fillStyle ="gray";
  	this.ctx.fillRect(40+10+10,0, 400 - 2*(40+10+10),800);
  	this.ctx.strokeStyle ="white";
  	this.ctx.setLineDash([10,4]);
  	this.ctx.moveTo(200, 0);
  	this.ctx.lineTo(200, 800);
  	this.ctx.stroke();
}