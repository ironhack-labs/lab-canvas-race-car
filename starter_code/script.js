
var myObstacles = [];

function startGame () {
    myGameArea.start();
    player =  new plyrCar(30, 50, 150, 500);
}

function updateGame() {
  
  for (i = 0; i < myObstacles.length; i++) {
    if (player.crashWith(myObstacles[i]) || player.x < 0 || player.x > 320) {
      myGameArea.stop();
      myGameArea.over();
      myGameArea.frames = 0;
      return;
    }
  }
  myGameArea.clear();
  myGameArea.back();
  myGameArea.frames += 1;
  if (myGameArea.frames % 120 == 0) {
    y = 0;
    minWidth = 20;
    maxWidth = 200;
    width = Math.floor(Math.random()*(maxWidth - minWidth + 1) + minWidth);
    minGap = 50;
    maxGap = 200;
    gap = Math.floor(Math.random()*(maxGap - minGap + 1) + minGap);
    myObstacles.push(new Component(width, 10, 'darkred', 0, y));
    myObstacles.push(new Component(myGameArea.canvas.height - width - gap, 10, 'darkred', width + gap, y));
  }
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }
  
  player.newPos();  
  myGameArea.score();
  player.update();
  
}

var myGameArea = {
  canvas:document.createElement('canvas'),
  start: function () {
    this.canvas.width = 350;
    this.canvas.height = 600;
    this.context = this.canvas.getContext('2d');
    document.getElementById('game-board').insertBefore(this.canvas, document.getElementById('game-board').childNodes[3]);
    this.interval = setInterval(updateGame, 10);
  },
  frames: 0,
  clear: function() {
    this.context.clearRect(0,0,this.canvas.width, this.canvas.height);
  },
  score: function() {
    points = (Math.floor(this.frames/5));
    this.context.font =  "18px serif";
    this.context.fillStyle = "white";
    this.context.fillText ("Score: " + points, 80, 70 )
  },
  back: function() {
    this.context.fillStyle = "grey";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    this.context.fillStyle = "green";
    this.context.fillRect(0, 0, 50, this.canvas.height);
    this.context.fillStyle = "green";
    this.context.fillRect(this.canvas.width-50, 0, 50, this.canvas.height);
    
    this.context.fillStyle = "white";
    this.context.fillRect(170, 0, 10, 50);
    this.context.fillRect(170, 100, 10, 50);
    this.context.fillRect(170, 200, 10, 50);
    this.context.fillRect(170, 300, 10, 50);
    this.context.fillRect(170, 400, 10, 50);
    this.context.fillRect(170, 500, 10, 50);
 
    this.context.fillStyle = "white";
    this.context.fillRect(55, 0, 20, this.canvas.height);
    this.context.fillStyle = "white";
    this.context.fillRect(this.canvas.width-75, 0, 20, this.canvas.height);
  },
  over: function() {
    this.context.fillStyle = "black";
    this.context.fillRect(70, 100, 210, 100);

    this.context.font =  "18px serif";
    this.context.fillStyle = "red";
    this.context.fillText ("Game Over!", 130, 120)

    this.context.font =  "18px serif";
    this.context.fillStyle = "white";
    this.context.fillText ("Your final score: " + points, 100, 150)
  },
  stop: function() {
    clearInterval(this.interval);
    myGameArea.clear();
    myObstacles = [];
  }
}

function Component (width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  
  this.newPos = function() {
    this.x += this.speedX ;
    this.y += this.speedY ;
  }

  this.left = function(){
    return this.x;
  }

  this.right = function(){
    return this.x + this.width;
  }

  this.top = function(){
    return this.y;
  }

  this.bottom = function(){
    return this.y + this.height;
  }

  this.crashWith = function(obstacle) {
    return !((this.bottom() < obstacle.top()) || 
    (this.top() > obstacle.bottom()) ||
    (this.right() < obstacle.left()) ||
    (this.left() > obstacle.right()))
  }
}

function plyrCar (width, height, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.img = new Image();
  this.img.src = 'images/car.png';
  this.img.onload = function(){
    this.update()
  }.bind(this)

  this.update = function() {
    ctx = myGameArea.context;
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  
  this.newPos = function() {
    this.x += this.speedX ;
    this.y += this.speedY ;
  }

  this.left = function(){
    return this.x;
  }

  this.right = function(){
    return this.x + this.width;
  }

  this.top = function(){
    return this.y;
  }

  this.bottom = function(){
    return this.y + this.height;
  }

  this.crashWith = function(obstacle) {
    return !((this.bottom() < obstacle.top()) || 
    (this.top() > obstacle.bottom()) ||
    (this.right() < obstacle.left()) ||
    (this.left() > obstacle.right()))
  }
}

function moveUp() {
  player.speedY -= 1;
  console.log(player.speedY, player.y)
}

function moveDown() {
  player.speedY += 1;
}

function moveRight() {
  player.speedX += 1;
}

function moveLeft() {
  player.speedX -= 1;
}

document.onkeydown =  function (e) {
switch (e.keyCode) {
  // case 38:
  //   return moveUp();
  //   break;
  // case 40:
  //   return moveDown();
  //   break;
  case 39:
    return moveRight();
    break;
  case 37:
    return moveLeft();
    break;
}
}

document.onkeyup = function (e) {
  stopMove();
}

function stopMove () {
  player.speedX = 0;
  player.speedY = 0;
}

function prueba () {
startGame();
}


