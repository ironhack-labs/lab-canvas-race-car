window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

var canvas  = document.getElementById('canvas');
var ctx     = canvas.getContext('2d');
var y       = 0;
var linea   = new Board;

function Board(){

  this.drawRoad = function (){
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 50, canvas.height);
    ctx.fillRect(450, 0, 50, canvas.height);
    ctx.fillStyle = "gray";
    ctx.fillRect(50, 0, 10, canvas.height);
    ctx.fillRect(440, 0, 10, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(60, 0, 10, canvas.height);
    ctx.fillRect(430, 0, 10, canvas.height);
    ctx.fillStyle = "gray";
    ctx.fillRect(70, 0, 360, canvas.height);
    ctx.closePath();
  }

  this.lines = function(y){
    ctx.strokeStyle = "white";
    ctx.lineWidth = 20;
    ctx.setLineDash([50, 30]);
    ctx.moveTo((canvas.width / 2) - 10, y - canvas.height)
    ctx.lineTo((canvas.width/ 2) -10, canvas.height)
    ctx.stroke(); 
  }
}

function Car (){
  this.x = canvas.width / 2 - 35;
  this.y = canvas.height / 2 + 250;
  this.width = canvas.width;
  this.height = canvas.height;
  this.img = new Image();
  this.img.src= 'images/car.png'
  this.img.onload = function(){
    this.drawCar();
  }.bind(this);
  this.drawCar = function(x){
    ctx.drawImage(this.img, this.x, this.y, 50, 70);
  }
  this.goLeft = function(){
    this.x -= 15;
  }
  this.goRigth = function(){
    this.x += 15;
  }
  this.goUp = function(){
    this.y -= 15;
  }
  this.goDown = function(){
    this.y += 15;
  }  
};

function startGame() {    
  var car = new Car()
  linea.drawRoad(); 
  linea.lines(y);
  car.drawCar();
  setInterval (function(){
    if (y === 100) y = 0;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    linea.drawRoad();
    linea.lines(y);
    car.drawCar();
    y += 10;
  }, 1000/60);

  addEventListener('keydown', function(e){
    if(e.keyCode === 37){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      linea.drawRoad();
      linea.lines(y);
      car.goLeft();
      car.drawCar();      
    }
    if(e.keyCode === 38){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      linea.drawRoad();
      linea.lines(y);
      car.goUp();
      car.drawCar();
    }
    if(e.keyCode === 39){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      linea.drawRoad();
      linea.lines(y);
      car.goRigth();
      car.drawCar();
    }
    if(e.keyCode === 40){
      ctx.clearRect(0,0,canvas.width, canvas.height);
      linea.drawRoad();
      linea.lines(y);
      car.goDown();
      car.drawCar();
    }
  });
  }
  
};
