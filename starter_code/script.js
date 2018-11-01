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
  this.car = new Car(this.width,this.height);


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

    //this.ctx.drawImage(this.car.img, 0, 0);
    this.car.draw(this.ctx);
    
    

  }.bind(this), 1000/60)
}

GameBoard.prototype.drawLines = function(y) {
  this.ctx.beginPath();
  this.ctx.lineWidth = 4;
  this.ctx.strokeStyle = "#fff";
  this.ctx.setLineDash([20,15]);
  this.ctx.moveTo(this.width/2, y);
  this.ctx.lineTo(this.width/2, this.height);
  this.ctx.stroke();
  
  

  
}

GameBoard.prototype.clear = function() {
  this.ctx.clearRect(0,0,this.width, this.height);
}

function Car(canvasWidth, canvasHeight) {
  this.KEY_LEFT = 37;
  this.KEY_RIGHT = 39;
  this.img = new Image();
  this.img.src = "images/car.png";

  this.canvasWidth = canvasWidth;

  this.width = this.img.width * .4;
  this.height = this.img.height * .4;

  this.vel = 5;

  this.x = canvasWidth/2 - this.width/2;
  this.y = canvasHeight-this.height-30;

    this.setListeners();
}

Car.prototype.draw = function (ctx) {
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}

Car.prototype.setListeners = function () {
  document.onkeydown = function (e) {
    e.preventDefault();
    
    switch(e.keyCode) {
      case this.KEY_LEFT:
        if (this.x > 0) this.x -= this.vel;
        break;
      case this.KEY_RIGHT:
        if (this.x < this.canvasWidth - this.width) this.x += this.vel;
        break;
    }
    
  }.bind(this);
}