var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

//test
//ctx.fillRect(0,0,50,50);
//constantes

//Clases
function Background(x, y, w, h, color){
  this.x = x ? x : 100;
  this.y = y ? y : 0;
  this.w = w ? w : 400;
  this.h = h ? h : 700;
  this.color = color ? color : "grey";

  this.draw = function(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y, this.w, this.h);
    ctx.stroke();
  }
}

function Lines (y){
  this.x = 300;
  this.y = y ? y : 0;
  this.w = 10;
  this.h = 70;
  this.color = "white";

  this.draw = function(){
    this.move();
    if(this.y > 700) this.y = 0;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x,this.y, this.w, this.h);
    ctx.fillRect(this.x,this.y, this.w, this.h);
  }
  this.move = function(){
    this.y+=8;
  }
}

function Car (){
  this.x = 250;
  this.y = 610;
  this.w = 50;
  this.h = 70;
  this.direction = "";
  this.image = new Image();
  this.image.src = "./images/car.png";

  this.draw = function(){
    this.move();
    ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
  }

  this.move = function(){
    if(this.direction === "left") this.x-=5;
    if(this.direction === "right") this.x+=5;
  }
}

function Obstacle (x,y,w, ejex){
  this.x = x ? x :150;
  this.y = y ? y : 0;
  this.w = w ? w : 50;
  this.h = 20;
  this.color = "red"
  this.directiony = "down"
  this.directionx = ejex ? ejex : "right"

  this.draw = function(){
    this.move();
    if(this.y > 700) this.y = 0;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  this.move = function(){
    if(this.y<1) this.directiony = "down";
    if(this.directiony === "down") this.y+=5;
    if(this.x>400) this.directionx = "left";
    if(this.x<150) this.directionx = "right";
    if(this.directionx === "right") this.x+=5;
    if(this.directionx === "left") this.x-=5;
  }
}

//Instancias
var calle = new Background();
var pasto = new Background(0,0,50,700,"green");
var pastod = new Background(450,0,50,700,"green");
var linea = new Background(165,0,10,700,"white");
var linead = new Background(425,0,10,700,"white");
var lineMid1 = new Lines();
var lineaMid2 = new Lines(90);
var lineaMid3 = new Lines(180);
var lineaMid4 = new Lines(270);
var lineaMid5 = new Lines(360);
var lineaMid6 = new Lines(450);
var lineaMid7 = new Lines(540);
var lineaMid8 = new Lines(640);
var carro1 = new Car();
var obstacle = new Obstacle();
var obstacle2 = new Obstacle(200,400,90,"left");
var obstacle3 = new Obstacle(250,200,100,"right");

//Main Functions
function update(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  calle.draw();
  pasto.draw();
  pastod.draw();
  linea.draw();
  linead.draw();
  lineMid1.draw();
  lineaMid2.draw();
  lineaMid3.draw();
  lineaMid4.draw();
  lineaMid5.draw();
  lineaMid6.draw();
  lineaMid7.draw();
  lineaMid8.draw();
  carro1.draw();
  obstacle.draw();
  obstacle2.draw();
  obstacle3.draw();
}

function start(){
  interval = setInterval(update,1000/60);
}

//Listeners
document.getElementById("start-button")
    .addEventListener("click",start);

addEventListener("keydown", function(e){
  switch(e.keyCode){
    case 39:
      carro1.direction = "right"
      break;
    case 37:
      carro1.direction = "left"
      break;
  }
})

