window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
      game.drawBackground()
  }

  var game = new Game();

  function Game () {
    this.canvas = document.getElementById("canvasExp");
    this.ctx = this.canvas.getContext('2d');
    this.width =  this.canvas.width;
    this.height = this.canvas.height;
    this.img = new Image();
    this.img.src = "images/car.png";

  };
  Game.prototype.drawBackground = function (){
    this.ctx.fillStyle = ("#008200");
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.fillStyle = ("#D3D3D3");
    this.ctx.fillRect(30, 0, this.width-60, this.height);
    this.ctx.clearRect(50, 0, 20, this.height);
    this.ctx.clearRect(this.width-70, 0, 20, this.height);
    
    /* this.ctx.beginPath();
    this.ctx.setLineDash([50, 5]);
    this.ctx.moveTo(400, 10);
    this.ctx.lineTo(400, 50);
    this.ctx.stroke(); */

    this.ctx.drawImage(this.img, 330, 550)
  }

  Image.prototype.drawImage = function(){
  }
};


