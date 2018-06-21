var greyColor = 'rgb(128, 128, 128)';
var greenColor = 'rgb(0, 129, 0)';
var whiteColor = '#fff';
var carRoute = './images/car.png';
var carImg = new Image();
var carRatio = 158/310;

function Car(x, y){
  this.x = x;
  this.y = y;
  this.image = new Image();
  this.maxX = 400;
  this.minX = 40;
  this.image.src = carRoute;
}

Car.prototype.moveRight = function (){if(this.x<this.maxX) this.x++;};
Car.prototype.moveLeft = function(){if(this.x>this.minX) this.x--;};
Car.prototype.draw = function(context){ context.drawImage(this.image, this.x, this.y, 150*carRatio, 150);};

function Obstacle(width, position){
  this.height = 40;
  this.width = width;
  this.position = position;
  this.speed = 20;
}

window.onload = function() {
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  var car = new Car(187.5, 500);
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: car.moveLeft(); break;
      case 39: car.moveRight(); break;
    }
  };

  function drawStage(){
    ctx.clearRect(0,0,450,700);
    ctx.moveTo(0,0);
    ctx.fillStyle = greenColor;
    ctx.fillRect(0,0,25,700);
    ctx.fillRect(425,0,25,700);
    ctx.fillStyle = greyColor;
    ctx.fillRect(25,0,400,700);
    ctx.clearRect(35,0,10,700);
    ctx.clearRect(405,0,10,700);
    ctx.moveTo(225,700);
    ctx.lineTo(225,0);
    ctx.setLineDash([40,30]);
    ctx.lineWidth = 15;
    ctx.strokeStyle = whiteColor;
    ctx.stroke();
  }

  function startGame() {
    drawStage();
    car.draw(ctx);
  }
};
