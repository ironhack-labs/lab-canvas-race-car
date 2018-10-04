var roadLines = [];

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    myGameArea.start();
    myGameArea.drawRoad();
    var line = new Component(15, 20, "white", myGameArea.canvas.width/2, 0);
    line.update();
    drawCar();
  }
};

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
      this.canvas.width = 470;
      this.canvas.height = 730;
      this.ctx = this.canvas.getContext("2d");
      document.getElementById("game-board").appendChild(this.canvas);
      this.interval = setInterval(updateGameArea, 20);
  },
  drawRoad : function() {
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 36, this.canvas.height);
    this.ctx.fillRect(this.canvas.width - 36, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(48, 0, 12, this.canvas.height);
    this.ctx.fillRect(this.canvas.width - 60, 0, 12, this.canvas.height);
  },
  roadLines : function() {

  },
  clear : function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}

function Component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y; 
  this.speedX = 0;
  this.speedY = 0;
  this.update = function(){
    myGameArea.ctx.fillStyle = color;
    myGameArea.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function drawRoadLines() {
  for(var i = 0; i < myGameArea.canvas.height; i += 40) {

  }
}

function drawCar() {
  var car = new Image();
  var imgScale = 158/319;
  var carH = 100;
  var carW = carH*imgScale;
  var carX = myGameArea.canvas.width/2 - carW/2;
  var carY = myGameArea.canvas.height - carH;
  var carNewX = carX;
  car.onload = function() {
      myGameArea.ctx.drawImage(car, carX, carY,carW,carH);
  };
  car.src = 'images/car.png';
  car.update = function(num) {
    carNewX = carNewX + num;
    if(carNewX < 36) {
      carNewX = 36;
    }
    if(carNewX > myGameArea.canvas.width -36) {
      carNewX = myGameArea.canvas.width - 37;
    }
    myGameArea.ctx.drawImage(car, carNewX, carY,carW,carH);
  }
  window.car = car;
}

function updateGameArea() {
  /* for (i = 0; i < myObstacles.length; i += 1) {
      if (car.crashWith(myObstacles[i])) {
          myGameArea.stop();
          return;
      } 
  } */
  // myGameArea.clear();
  myGameArea.drawRoad();
  car.update(0);
  // myGameArea.frames +=1;
  // if (myGameArea.frames % 100 === 0) {
  //     x = myGameArea.canvas.width;
  //     minHeight = 20;
  //     maxHeight = 200;
  //     height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
  //     minGap = 50;
  //     maxGap = 200;
  //     gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
  //     myObstacles.push(new component(10, height, "green", x, 0));
  //     myObstacles.push(new component(10, x - height - gap, "green", x, height + gap));
  // }
  // for (i = 0; i < myObstacles.length; i += 1) {
  //     myObstacles[i].x += -1;
  //     myObstacles[i].update();
  // }
  // car.newPos();
  // car.update();
  // myGameArea.score();
}


function moveLeft() {
  window.car.update(-10);
}

function moveRight() {
  window.car.update(10);
}

document.onkeydown = function(e) {
switch (e.keyCode) {
  case 37:
    moveLeft();
    break;
  case 39:
    moveRight();
    break;
}
}

document.onkeyup = function(e) {
stopMove();
}

function stopMove() {
  // car.speedX = 0;
  // car.speedY = 0; 
}