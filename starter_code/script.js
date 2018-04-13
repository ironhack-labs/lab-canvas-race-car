var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext('2d');
var car = new Car;


function Road(){
  this.x = 0;
  this.y= 0;
  this.width = canvas.width;
  this.height= canvas.height;
  ctx.fillStyle='green';
  ctx.fillRect(this.x, this.y, this.width, this.height);
  ctx.closePath();
  ctx.beginPath();
  ctx.fillStyle='grey';
  ctx.fillRect(40,this.y, this.width - 80, this.height);
  ctx.closePath();
  ctx.beginPath();
  ctx.beginPath();
  ctx.fillStyle = 'white';
  ctx.fillRect(60, this.y, 20, this.height);
  ctx.fillRect(this.width - 80, 0, 20, this.height);
  ctx.closePath();
  ctx.beginPath();
}
//Road();

function Line(y){
  this.x = 250;
  this.y = y;
  this.draw = function(){
    this.y+=10;
    if(this.y > canvas.height) this.y = 0;
    ctx.fillRect(this.x, this.y, 8, 50);
  };
}

//var linea = new Line();

var lineas = [];

for(var i=0; i<canvas.height;i+=80){
  lineas.push(new Line(i));
}



function drawLines(){
  lineas.forEach(function(lupe){
    lupe.draw();
  });
}

//poder ver que corre
function update(){
  //console.log(frames);
  //borramos primero
  ctx.clearRect(0,0,canvas.width,canvas.height);
  //dibujamos con orden de tamaños
  Road();
  drawLines();
  car.draw();
}

var interval;
function startGame(){
  console.log("si llego");
  interval = setInterval(function(){
    update();
  }, 1000/60);
}
//test
//drawLines();

function Car(){
this.x = 200;
this.y= 300;
this.width = 120;
this.height= 100;
this.img = new Image();
this.img.src = "images/car.png"
this.img.onload = function (){
  this.draw();
}.bind(this);

this.draw = function (){
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}
 this.moveLeft = function(){
  this.x -= 10;
 } 
 this.moveRight = function(){
  this.x +=10;
 }
}

var car = new Car();

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    console.log("comenzo");
    startGame();
  };

  addEventListener('keydown', function (e) {
    console.log('yolo');
    switch(e.keyCode){
      case 37:
      car.moveLeft();
      break;
      case 39:
      car.moveRight();
      break;
    }
    
  });


};

