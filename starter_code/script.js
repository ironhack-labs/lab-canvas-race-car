myObstacles= []
var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
      this.canvas.id = "road";
      this.canvas.width = 400;
      this.canvas.height = 500;
      this.context = this.canvas.getContext("2d");
      document.getElementById("game-board").appendChild(this.canvas);
      this.interval = setInterval(updateGameArea, 20);
  },
  frames: 0,
  clear : function() {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      },
  stop : function() {
        clearInterval(this.interval);
}}

var car = {
  x : 188,
  y : 225,
  width : 24,
  height:50,
  moveLeft : function(){x+=25;},
  moveRight : function(){x+=25;},
  crashWith : function(obstacle) {
    return !((car.bottom() < obstacle.top())    ||
              (this.top()    > obstacle.bottom()) ||
              (this.right()  < obstacle.left())   ||
              (this.left()   > obstacle.right())) 
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  }
};  

function startGame() {    
  myGameArea.start()
  generateRoad()
  showPlayerCar()
  }
  
function generateRoad() {
  var canvas = myGameArea.canvas
  var ctx = myGameArea.context;
  ctx.fillStyle = "#44820b"
  ctx.fillRect(0, 0, 30,canvas.height);
  ctx.fillRect(canvas.width-30, 0, 30, canvas.height);
  ctx.fillStyle = "#808080"
  ctx.fillRect(30, 0, 15, canvas.height);
  ctx.fillRect(canvas.width-45,0, 15, canvas.height);
  ctx.fillRect(60,0, canvas.width-120, canvas.height);
  var i = 0;
  ctx.fillStyle = "#fff"
  ctx.fillStyle = "#fff";
  for (var i=0;i<canvas.width;i++){
    ctx.fillRect(196,13+33*i,8,20);
    }
  }
  
function showPlayerCar() {
  var canvas = document.getElementById('road');
  var ctx = canvas.getContext('2d');
  img = new Image();
  img.onload = function() {
    ctx.drawImage(img,car.x,car.y,car.width,car.height);
  }
  img.src="./images/car.png";
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: car.moveLeft();  console.log('left',  car); break;
    case 39: car.moveRight(); console.log('right', car); break;
  }
  updateGameArea();
}

function Component( x, y, width,  height=25) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedY = 0;
  this.update = function(){
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
      this.x += 0
      this.y += this.speedY; 
  }
  this.left   = function() { return this.x                 }
  this.right  = function() { return (this.x + this.width)  }
  this.top    = function() { return this.y                 }
  this.bottom = function() { return this.y + (this.height) }

}
}

function updateGameArea() {
  for (i = 0; i < myObstacles.length; i += 1) {
      if (player.crashWith(myObstacles[i])) {
          myGameArea.stop();
          return;
      } 
  }
  myGameArea.clear();
  generateRoad();
  myGameArea.frames +=1;
  showPlayerCar();
  if (myGameArea.frames % 120 === 0) {
      x = myGameArea.canvas.height;
      minWidth = 60;
      maxWidth = 340;
      width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
      minGap = 50;
      maxGap = 150;
      gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
      myObstacles.push(new Component(width, 10 , "red", 0, 0));
      myObstacles.push(new Component(width-gap, "red", x, height + gap));
  }
  for (i = 0; i < myObstacles.length; i += 1) {
      myObstacles[i].y += +1;
      myObstacles[i].update();
  };
  
};
