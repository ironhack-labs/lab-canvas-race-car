window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};


function startGame() {
  var game = new Game();
  game.drawBackground();  
}


function Game(){
  this.ctx = document.getElementById('game-board').getContext('2d');
}


Game.prototype.drawBackground = function (){
  this.ctx.fillRect(0, 0, 500, 500);
  this.ctx.fillStyle = "green";
  this.ctx.fillRect(0,0,40,500);
  this.ctx.fillStyle = "gray";
  this.ctx.fillRect(40,0,10,500);
  this.ctx.fillStyle = "white";
  this.ctx.fillRect(50,0,10,500);
  this.ctx.fillStyle = "gray";
  this.ctx.fillRect(60,0,380,500);
  this.ctx.fillStyle = "white";
  this.ctx.fillRect(440,0,10,500);
  this.ctx.fillStyle = "gray";
  this.ctx.fillRect(450,0,10,500);
  this.ctx.fillStyle = "green";
  this.ctx.fillRect(460,0,40,500);
}