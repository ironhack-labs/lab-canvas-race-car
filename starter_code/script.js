window.onload = function() {
var redColor = 'rgb(136, 0, 0)';
var greyColor = 'rgb(128, 128, 128)';
var greenColor = 'rgb(0, 129, 0)';
var whiteColor = '#fff';
var carRoute = './images/car.png';
var carRatio = 158/310;
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var car = new Car(187.5, 500);
var obstacles = [];

function Car(x, y){
  this.x = x;
  this.y = y;
  this.image = new Image();
  this.maxX = 330;
  this.minX = 40;
  this.image.src = carRoute;
}

Car.prototype.moveRight = function (){if(this.x<this.maxX) this.x+=10;};
Car.prototype.moveLeft = function(){if(this.x>this.minX) this.x-=10;};
Car.prototype.draw = function(context){ context.drawImage(this.image, this.x, this.y, 150*carRatio, 150);};

function Obstacle(width, position){
  this.obstacles = [];
  this.x=position;
  this.y=0;
  this.height = 40;
  this.width = width;
  this.maxWith = 300;
  this.speed = 3;
}

Obstacle.prototype.draw = function(context){
  context.fillStyle = redColor;
  context.fillRect(this.x, this.y, this.width, this.height);
};

Obstacle.prototype.move = function(){
  this.y += this.speed;
};


  document.getElementById("start-button").onclick = function() {
    startGame();
    window.requestAnimationFrame(updateCanvas);
  };

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: car.moveLeft(); break;
      case 39: car.moveRight(); break;
    }
  };

  function clearStage(){
    ctx.clearRect(0,0,450,700);
  }

  function animateRoad(){
    ctx.lineDashOffset = (ctx.lineDashOffset+3) % 70;
  }

  function drawStage(){
    clearStage();
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
    clearStage();
    drawStage();
    car.draw(ctx);
    if(obstacles.length){
      obstacles.forEach(function(e){
        e.draw(ctx);
      });
    }
  }

  function draw(context){
    clearStage();
    drawStage();
    animateRoad();
    car.draw(context);
    if(obstacles.length){
      obstacles.forEach(function(e){
        if(e.y > 700){
          obstacles.shift();
          delete e;
        } else{
          e.draw(ctx);
        }
      });
    }
  }

  setInterval(function(){
    console.log(obstacles);
    obstacles.push(new Obstacle(Math.floor(Math.random()*300+40), Math.floor(Math.random()*300)));
  }, 2000);

  function updateCanvas() {  
    clearStage();
    draw(ctx);
    if(obstacles.length){
      obstacles.forEach(function(e){
        e.move();
      });
    }
    window.requestAnimationFrame(updateCanvas);
  }
};

