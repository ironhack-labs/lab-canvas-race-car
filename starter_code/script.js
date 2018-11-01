window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  }

  var gameBoard = new GameBoard();
  gameBoard.start();

}

var line = 0;

function Car(canvas){
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d")
  this.img = new Image();
  this.img.src = "./images/car.png";
  
  
  this.x = 150;
  this.y = 600;
  this.vx = 10;
  this.setListeners();
}

Car.prototype.drawCar = function() {
  this.ctx.drawImage(this.img,this.x,this.y,80,190);
}

Car.prototype.moveCar = function() {

  if(this.x + 70 <= this.canvas.width || this.x  > 0) {
    this.vx *= -1;
  }
}

var KEY_RIGHT = 39;
var KEY_LEFT = 37;

Car.prototype.setListeners = function() {
  document.onkeydown = function(e) {
    e.preventDefault();
    switch(e.keyCode) {
      case KEY_LEFT: 
        this.x -= this.vx;
        break; 
      
      case KEY_RIGHT: 
        this.x += this.vx;
        break; 
    } 
  }.bind(this);
}


function GameBoard(){
  this.canvas = document.getElementById("myCanvas");
  this.ctx = this.canvas.getContext("2d");
  this.height = this.canvas.height;
  this.width = this.canvas.width;
  this.x = 0;
  this.vx = 3;
  this.car = new Car(this.canvas);
  
}

GameBoard.prototype.start = function() {
  //debugger
  setInterval(function() {
    this.clear();
    this.drawRoad();
    this.car.drawCar();
  }.bind(this), 1000/60);
}

GameBoard.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}


GameBoard.prototype.drawRoad = function() {

  this.ctx.fillStyle = "#357E1A";
  this.ctx.fillRect(0,0,40,this.height);

  this.ctx.fillStyle = "#808080";
  this.ctx.fillRect(40,0,20,this.height);

  this.ctx.fillStyle = "#FFFFFF";
  this.ctx.fillRect(60,0,20,this.height);

  this.ctx.fillStyle = "#808080";
  this.ctx.fillRect(80,0,400,this.height);
  

  this.ctx.fillStyle = "#FFFFFF";
  this.ctx.fillRect(480,0,20,this.height);


  this.ctx.fillStyle = "#808080";
  this.ctx.fillRect(500,0,20,this.height);

  this.ctx.fillStyle = "#357E1A";
  this.ctx.fillRect(520,0,40,this.height);

  this.ctx.beginPath();
  this.ctx.lineWidth=5;
  this.ctx.strokeStyle = "#FFFFFF";  
  this.ctx.setLineDash([30,20]);
  this.ctx.lineDashOffset = line;
  line -=4;



  this.ctx.moveTo(280,0);
  this.ctx.lineTo(280,900);
  this.ctx.stroke();
  this.ctx.closePath();

  

}







