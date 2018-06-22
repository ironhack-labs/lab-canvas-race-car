window.onload = function() {

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  document.getElementById('start-button')
  .addEventListener('click', startGame);


//constantes
var interval;

//clases
function Road(x,y,width,height,color){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.color = color;

  this.draw = function() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x,this.y,this.width,this.height);
      }
  }

function Line(x,width,dashLength,dashGap){
  this.x = x;
  this.y = 40;
  this.movey = 640;
  this.width = width;
  this.color = 'white';
  this.dashLength = dashLength ? dashLength : null;
  this.dashGap = dashGap ? dashGap : null;
  // this.speed = 3;

  this.stroke = function() {
      // if(this.y > this.height*2) this.y = 40;


      ctx.beginPath();
      ctx.strokeStyle = this.color;
      ctx.lineWidth = this.width;
      ctx.setLineDash([this.dashLength, this.dashGap]);
      ctx.moveTo(this.x,this.y);
      ctx.lineTo(this.x,this.movey);
      ctx.closePath();
      ctx.stroke();

      // ctx.beginPath();
      // ctx.strokeStyle = this.color;
      // ctx.lineWidth = this.width;
      // ctx.setLineDash([this.dashLength, this.dashGap]);
      // ctx.moveTo(this.x,this.y*2);
      // ctx.lineTo(this.x,this.movey*2);
      // ctx.closePath();
      // ctx.stroke();

  }
}


function Car(){
  this.x = 120;
  this.y = 490;
  this.width = 60;
  this.height = 120;
  this.direction = '';
  this.img = new Image();
  this.img.src = './images/car.png'
  this.img.onload = function(){
    this.draw();
  }.bind(this);

  this.draw = function(){
    ctx.drawImage(this.img, this.x,this.y,this.width,this.height);
  }
  
  this.goLeft = function(){
    if (this.x > 20) this.x -=5;
  }
  
  this.goRight = function(){
    if (this.x < 220) this.x +=5;
  }
  
}

function Obstacle(x,width){
    this.x = x;
    this.width = width;
    this.height = 15;
    this.y = 40;
    this.color = 'darkred';

    this.draw = function() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x,this.y,this.width,this.height);
      }
}


//instancias

var green = new Road(0,40,300,600,'green');
green.draw();

var road = new Road(20,40,260,600,'gray');
road.draw();

var leftLine = new Line(35,8);
leftLine.stroke();

var rightLine = new Line(265,8);
rightLine.stroke();

var dashedLine = new Line(150,4,5,15)
dashedLine.stroke();

var myCar = new Car();
myCar.draw();

var firstObstacle = new Obstacle(40,120);
firstObstacle.draw();


//main functions

  function update() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    green.draw();
    road.draw();
    leftLine.stroke();
    rightLine.stroke();
    dashedLine.stroke();
    firstObstacle.draw();
    myCar.draw();
  }

  function startGame() {
    interval = setInterval(update,1000/60);
  };



//listeners

addEventListener('keydown', function(e){
  switch(e.keyCode){      
      case 39:
          myCar.goRight();
          break;
      case 37:
          myCar.goLeft();
      break;
  }
});

}

