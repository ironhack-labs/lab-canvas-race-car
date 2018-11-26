
var myObstacles=[];

var disminuyeVel=15;
var aumentaObst=240;
var aumentaVel=1;
var aumentaVelAutos=2;
window.onload = function() {
  myGameArea.iniciaFondo();
  myGameArea.pintaFondo();
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};

function startGame() {
    myGameArea.stop();
    disminuyeVel=15;
    aumentaObst=240;
    aumentaVel=2;
    aumentaVelAutos=1;
    myGameArea.iniciaFondo();
    while(myObstacles.length)
      myObstacles.pop();
    myGameArea.start();
    player = new Component(50, 80, "red", 200, 510);
}

var myGameArea={
  canvas: document.createElement("canvas"),
  start: function(){
    this.interval=setInterval(updateGameArea,disminuyeVel);
  },
  frames: 0,
  clear: function(){
    this.context.clearRect(0,0,this.canvas.width,this.canvas.height);
  },
  iniciaFondo: function(){
    this.canvas.width=500;
    this.canvas.height=600;
    this.context=this.canvas.getContext('2d');
    document.getElementById("game-board").insertBefore(this.canvas,document.getElementById("game-board").childNodes[0]);
  },
  pintaFondo: function(){
    //Pasto
    this.context.fillStyle="#117A05"
    this.context.fillRect(0, 0, 40, 600);
    this.context.fillRect(410, 0, 40, 600);

    //Carretera
    this.context.fillStyle="#828782"
    this.context.fillRect(40, 0, 370, 600);

    //Divisiones
    this.context.fillStyle="#FFFFFF"

    this.context.fillRect(155, 10, 10, 80);
    this.context.fillRect(155, 110, 10, 80);
    this.context.fillRect(155, 210, 10, 80);
    this.context.fillRect(155, 310, 10, 80);
    this.context.fillRect(155, 410, 10, 80);
    this.context.fillRect(155, 510, 10, 80);

    this.context.fillRect(280, 10, 10, 80);
    this.context.fillRect(280, 110, 10, 80);
    this.context.fillRect(280, 210, 10, 80);
    this.context.fillRect(280, 310, 10, 80);
    this.context.fillRect(280, 410, 10, 80);
    this.context.fillRect(280, 510, 10, 80);

    //Limites
    this.context.fillRect(45, 0, 10, 600);
    this.context.fillRect(395, 0, 10, 600);
  },
  score: function() {
    points = (Math.floor(this.frames/5))
    this.context.font = '18px serif';
    this.context.fillStyle = 'black';
    this.context.fillText('Score: '+points, 350, 50);
  },
  stop: function() {
    clearInterval(this.interval);
  }
}

function Component(width,height,color,x,y){
  this.width=width;
  this.height=height;
  this.x=x;
  this.y=y;
  this.speedX=0;
  this.speedY=0;
  var img = new Image();
  var img2 = new Image();
  ctx=myGameArea.context;

  img.src = "./images/car.png";
  img.onload = function() {
     ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }.bind(this);

  img2.src = "./images/blackCar.png";

  this.update=function(){
    this.draw();
  }

  this.update2=function(){
    ctx=myGameArea.context;
    ctx.fillStyle=color;
    ctx.drawImage(img2, this.x, this.y, this.width, this.height);
  }

  this.newPos=function(){
    this.x+=this.speedX;
    this.y+=this.speedY;
  }

  this.left=function(){
    return this.x;
  }

  this.right=function(){
    return (this.x+this.width);
  }

  this.top=function(){
    return this.y;
  }

  this.bottom=function(){
    return (this.y+this.height);
  }

  this.crashWith = function(obstacle) {
    return !((this.bottom() < obstacle.top())    ||
             (this.top()    > obstacle.bottom()) ||
             (this.right()  < obstacle.left())   ||
             (this.left()   > obstacle.right()))
  }

  this.draw = function() {
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }
}

function updateGameArea(){
  for (i = 0; i < myObstacles.length; i += 1) {
      if (player.crashWith(myObstacles[i])) {
          myGameArea.stop();
          break;
      }
  }
  myGameArea.clear();
  myGameArea.pintaFondo();
  myGameArea.frames+=1;

  if(myGameArea.frames % 2000 === 0){
    if(disminuyeVel > 0)
      disminuyeVel--;
    aumentaVel+=.05;
    aumentaVelAutos +=.5;
    if(aumentaObst > 80)
      aumentaObst-=40;
    myGameArea.stop();
    myGameArea.start(disminuyeVel);
  }

  if (myGameArea.frames % aumentaObst === 0) {
    var pos = Math.floor(Math.random()*3);
    if(pos === 0)
      myObstacles.push(new Component(60, 80, "red", 75, 0));
    if(pos === 1)
      myObstacles.push(new Component(60, 80, "red", 195, 0));
    if(pos === 2)
      myObstacles.push(new Component(60, 80, "red", 315, 0));
  }

  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].y += aumentaVelAutos;
    myObstacles[i].update2();
  }

  player.newPos();
  player.update();
  myGameArea.score();
}

/*function moveUp(){
  player.speedY-=disminuyeVel;
}*/

/*function moveDown(){
  player.speedY+=disminuyeVel;
}*/

function moveLeft(){
  if(player.x<=65)
    stopMove();
  else
    player.speedX-=aumentaVel;
}

function moveRigth(){
  if(player.x >=335)
    stopMove();
  else
    player.speedX+=aumentaVel;
}

document.onkeydown=function(e){
  switch(e.keyCode){
    /*case 38:
      moveUp();
    break;*/
    /*case 40:
      moveDown();
    break;*/
    case 37:
      moveLeft();
    break;
    case 39:
      moveRigth();
    break;
  }
}

document.onkeyup=function(e){
  stopMove();
}

function stopMove(){
  player.speedX=0;
  player.speedY=0;
}
