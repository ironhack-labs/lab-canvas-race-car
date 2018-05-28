var centerLines=[];
var obstacles=[];
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  }; 

  function startGame() {
    gameArea.start();
    gameArea.draw();
    player =new Car();

  }
};

let gameArea={
  canvas: document.createElement("canvas"),
  start: function(){
    this.canvas.width=500;
    this.canvas.height=850;
    this.context=this.canvas.getContext("2d");
    document.getElementById('game-board').insertBefore(this.canvas, document.getElementById('game.board'));
    this.crashImage=new Image();
    this.crashImage.src='./images/flames.png';
    this.interval=setInterval(update,1000/60); 
  },
  frames: 0,
  draw: function(){
    this.context.fillStyle = 'green';
    this.context.fillRect(0,0,40,850);
    this.context.fillRect(460,0,40,850);
    this.context.fillStyle = 'gray';
    this.context.fillRect(40,0,420,850);
    this.context.fillStyle = 'white';
    this.context.fillRect(60,0,15,850);
    this.context.fillRect(425,0,15,850);

  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop : function() {
        clearInterval(this.interval);
    },
  score: function(){
    points=(Math.floor(this.frames/10))
    this.context.font = '18px serif';
    this.context.fillStyle = 'yellow';
    this.context.fillText('Score: '+points, 100, 50);
  },
  drawfire: function(x,y){
    ctx=this.context;
    ctx.drawImage(this.crashImage,x,y,100,100);  
  },
  finalScore: function(){
    this.context.fillStyle ='black';
    this.context.fillRect(0,20,500,200)
    points=(Math.floor(this.frames/10))
    this.context.font = '58px serif';
    this.context.fillStyle = 'red';
    this.context.fillText('Game over!', 100, 70);
    this.context.font = '58px serif';
    this.context.fillStyle = 'white';
    this.context.fillText('Your final score', 60, 120);
    this.context.fillText(points, 200, 170);
  }
  
}
function centerLine(y){
  this.width=10;
  this.height=70;
  this.x=245;
  this.y=y;
  this.speedX=0;
  this.speedY=0;
  this.update =function(){
    ctx=gameArea.context;
    ctx.fillStyle='white';
    ctx.fillRect(this.x, this.y,this.width,this.height);
  }
}


function Car(){
  this.x=225;
  this.y=750;
  this.width=50;
  this.height=100;
  this.speedX=0;
  this.speedY=0;
  this.img=new Image();
  this.img.src="./images/car.png";
  this.img.onload=function(){
    this.draw();
  }.bind(this);

  this.draw=function(){
    ctx=gameArea.context;
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
  }
  this.newPos = function(){
    this.x+=this.speedX;
    this.y+=this.speedY;
  }
  this.left   = function() { return this.x                 }
    this.right  = function() { return (this.x + this.width)  }
    this.top    = function() { return this.y                 }
    this.bottom = function() { return this.y + (this.height) }
    
    this.crashWith = function(obstacle) {
      return !((this.bottom() < obstacle.top())    ||
               (this.top()    > obstacle.bottom()) ||
               (this.right()  < obstacle.left())   ||
               (this.left()   > obstacle.right())) 
    }
}

function obstacle(width, height,x,y){
  this.width=width;
  this.height=height;
  this.x=x;
  this.y=y;
  this.update=function(){
    ctx=gameArea.context;
    ctx.fillStyle="red";
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY; 
  }
  this.left   = function() { return this.x                 }
  this.right  = function() { return (this.x + this.width)  }
  this.top    = function() { return this.y                 }
  this.bottom = function() { return this.y + (this.height) }


}

function update(){
  
  gameArea.clear();
  gameArea.draw();
  gameArea.frames+=1;
  if(gameArea.frames%80===0){
    console.log(gameArea.frames); 
    centerLines.push(new centerLine(-60));
    if(gameArea.frames>1000){
      centerLines.shift();
    }
  }

  for(i=0;i<centerLines.length;i++){
    console.log(i);
    centerLines[i].y +=1;
    centerLines[i].update();
  }
  if(gameArea.frames%260==0){
    
    y=-20;
    xleft=40;
    xright=350;
    x=Math.floor(Math.random()*(xright-xleft+1)+xleft);
    minWidth=130;
    maxWidth=280;
    width=Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
    obstacles.push(new obstacle(width,20,x,y));
    if(gameArea.frames>1000){
      obstacles.shift();
    }    
  }
  for(let i=0;i<obstacles.length;i++){
    console.log(i);
    obstacles[i].y +=1;
    obstacles[i].update();
  }
  player.newPos();
  player.draw();
  gameArea.score();
  for (let i = 0; i < obstacles.length; i++) {
    if (player.crashWith(obstacles[i])) {
      gameOver();
      gameArea.stop();
        return;
    } 
  }
}


function acelera(){
  player.speedY-=1;
}
function frena(){
  player.speedY+=1;
}
function derecha(){
  player.speedX+=1
}
function izquierda(){
  player.speedX-=1;
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      player.y>0 ? acelera():stopMove();
      break;
    case 40:
      player.y<755? frena():stopMove();
      break;
    case 37:
    player.x>=75 ? izquierda():stopMove();
      break;
    case 39:
      derecha();
      player.x<=400 ? derecha():stopMove();
      break;
  }
}
document.onkeyup = function(e) {
  stopMove();
}
function gameOver(){
  //console.log("x: "+player.x+" y:"+player.y);
  
  gameArea.drawfire(player.x-25,player.y-90);
  gameArea.finalScore();
}

function stopMove() {
    player.speedX = 0;
    player.speedY = 0; 
}