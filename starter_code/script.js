var gameBoard = document.getElementById("game-board");
var car;
var myObstacles = [];

function startGame() {
  myGameArea.start();
  car = new componentCar(62,125,270,600);
}

var myGameArea = {
  canvas : document.createElement("canvas"),
  start: function () {
    this.canvas.width = 600;
    this.canvas.height = 750;
    this.ctx = this.canvas.getContext("2d");
    this.canvas.classList.add("red");
    gameBoard.appendChild(this.canvas);
    this.interval = setInterval(updateGameArea,200);  
  },
  frames : 0,
  clear : function () {
    this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
  },
  stop: function() {
    clearInterval(this.interval);
  }
}

function componentCar(width,height,x,y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  };
  // this.left = function() {return this.x};
  // this.right = function () {return(this.x + this.width)};
  // this.top = function() {return this.y};
  // this.bottom = function() {return (this.y + this.height)};
  // this.crashWith = function (obstacle) {
  //   return !((this.bottom() < obstacle.top()) ||
  //   (this.top()    > obstacle.bottom()) ||
  //   (this.right()  < obstacle.left()) ||
  //   (this.left()   > obstacle.right())) 
  // }
}

// function componentObstacle (width,height,color,x,y) {
//   this.width = width;
//   this.height = height;
//   this.x = x;
//   this.y = y;
//   this.speedX = 0;
//   this.speedY = 0;
//   this.update = function() {
//     var ctx = myGameArea.context;
//     ctx.fillStyle = color;
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
//   this.newPos = function() {
//     this.x+= this.speedX;
//     this.y += this.speedY;
//   };
//   this.left = function() {return this.x};
//   this.right = function () {return(this.x + this.width)};
//   this.top = function() {return this.y};
//   this.bottom = function() {return (this.y + this.height)};
// }


function updateGameArea() {
  // for (var i = 0; i < myObstacles.length; i++) {
  //   if(car.crashWith(myObstacles[i])) {
  //     myGameArea.stop();
  //     return;
  //   }
  // }
  myGameArea.clear();
  // myGameArea.frames ++;
  // if(myGameArea.frames % 100 === 0) {
  //   y = 0;
  //   var totalWidth = myGameArea.canvas.width;
  //   var minWidth = 50;
  //   var maxWidth = 380;
  //   var width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
  //   var x = Math.floor(Math.random()*(530-width-70+1)+70)
  //   myObstacles.push(new componentObstacle(width,20,"red",x,y));
  // }
  // for (var i = 0; i < myObstacles.length;i++) {
  //   myObstacles[i].y ++;
  //   myObstacles[i].update();
  // }
  car.newPos();
  paintMyGameArea();
  updateCar();
  // Aqui deberia ir el update del score
}

function paintMyGameArea() {
  var ctx = myGameArea.ctx;
  paintGreenZone(ctx);
  paintGreySides(ctx);
  paintGreyRoad(ctx);
  paintWhiteLine(ctx);
}

function paintGreenZone (ctx) {
  ctx.fillStyle = "green";
  ctx.fillRect(0,0,40,750);
  ctx.fillRect(560,0,40,750);
}

function paintGreySides (ctx) {
  ctx.fillStyle = "grey";
  ctx.fillRect(40,0,10,750);
  ctx.fillRect(550,0,10,750);
}

function paintGreyRoad (ctx) {
  ctx.fillStyle = "grey";
  ctx.fillRect(70,0,460,750);
}

function paintWhiteLine (ctx) {
  ctx.strokeStyle = "white";
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.setLineDash([20,20]);
  ctx.moveTo(297,0);
  ctx.lineTo(297,750);
  ctx.stroke();
}

// function stopMove() {
//   car.speedX = 0;
//   car.speedY = 0; 
// }

function moveUp(obj) {
  obj.speedY -= 1; 
}

function moveDown(obj) {
  obj.speedY += 1; 
}

function moveLeft(obj) {
  obj.speedX -= 1;
}

function moveRight(obj) {
  obj.speedX += 1;
}

function updateCar() {
  var ctx = myGameArea.ctx;
  var img = new Image();
  img.src = "images/car.png";
  img.onload = function () {
    ctx.drawImage(img,car.x,car.y,car.width,car.height);
  };
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      moveUp(car);
      break;
    case 40:
      moveDown(car);
      break;
    case 37:
      moveLeft(car);
      break;
    case 39:
      moveRight(car);
      break;
  }
}

// document.onkeyup = function(e) {
//   stopMove();
// }

// window.onload = function() {
//   // Borrar simpemente para pintar el canvas
//   document.getElementById("start-button").onclick = function() {
//     startGame();
//   };

// };

startGame();
