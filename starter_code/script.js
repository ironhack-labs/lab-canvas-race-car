window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var gameBoard = new GameBoard();

  function startGame() {
    
  }
};

function GameBoard(){
  this.canvas = document.querySelector("canvas");
  this.ctx = this.canvas.getContext("2d");
  this.height = this.canvas.height;
  this.width = this.canvas.width;


  this.render();
}

GameBoard.prototype.drawBackground = function() {
  this.ctx.fillStyle = '#7f7f7f';
  this.ctx.fillRect(0,0,this.width,this.height);

  this.ctx.fillStyle = '#009200';
  this.ctx.fillRect(0,0,30,this.height);

  this.ctx.fillRect(this.width,0,-30,this.height);

  this.ctx.fillStyle = '#fff';
  this.ctx.fillRect(40,0,10,this.height);

  this.ctx.fillRect(this.width-40,0,-10,this.height);

  
}

GameBoard.prototype.render = function() {
  var yLine = -this.height;
  setInterval(function() {
    
    // Line 1
    this.clear();
    this.drawBackground();
    
    yLine++;
    if(yLine === 0) yLine = -this.height;
    this.drawLines(yLine);
    
    

  }.bind(this), 1000/60)
}

GameBoard.prototype.drawLines = function(y) {
  this.ctx.beginPath();
  this.ctx.lineWidth = 3;
  this.ctx.strokeStyle = "#fff";
  this.ctx.setLineDash([20,15]);
  this.ctx.moveTo(this.width/2, y);
  this.ctx.lineTo(this.width/2, this.height);
  this.ctx.stroke();
  
  

  
}

GameBoard.prototype.clear = function() {
  this.ctx.clearRect(0,0,this.width, this.height);
}

