 var myObstacles = [];

function startGame() {
    myGameArea.start();
    myGameArea.score();
    player(car);
}

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {
    this.canvas.width = 480;
    this.canvas.height = 640;
    this.context = this.canvas.getContext("2d");
    document.getElementById('game-board').appendChild(this.canvas);
    createBoard()
  },
  frames: 0,
  clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
  score: function() {
    new Component (100, 40, 'rgba(200,205,205, 0.5)', 105, 5)
    points = (Math.floor(this.frames/5))
    this.context.font = '24px arial bold';
    this.context.fillStyle = 'blue';
    this.context.fillText('score: '+points, 110, 32);
  },
  stop : function() {
        clearInterval(this.interval);
    }
}


function updateGameArea() {
    for (i = 0; i < myObstacles.length; i++) {
        if (player.crashWith(myObstacles[i])) {
            myGameArea.stop();
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frames +=1;
    if (myGameArea.frames % 100 === 0) {
        y = myGameArea.canvas.height;
        minHeight = 20;
        maxHeight = 200;
        height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
        minGap = 50;
        maxGap = 200;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(height, 10, "green", y, 0));
        myObstacles.push(new component( y - height - gap, 10, "green", height + gap, y));
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].y += -1;
        myObstacles[i].update();
    }
    player.newPos();
    player.update();
    myGameArea.score();
}
/* 
function moveUp() {
    player.speedY -= 1; 
}

function moveDown() {
    player.speedY += 1; 
}
 
function moveLeft() {
    player.speedY -= 1;
}

function moveRight() {
    player.speedY += 1;
}

document.onkeydown = function(e) {
  switch (e.keyCode) {/* 
    case 38:
      moveUp();
      break; 
    case 40:
      moveDown();
      break;
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
    player.speedX = 0;
    player.speedY = 0; 
}

window.onload = function() {

  var myGameArea = new GameArea();
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  

};


function GameArea() {
  this.canvas = document.createElement("canvas"),
  this.start = function() {
    this.canvas.width = 480;
    this.canvas.height = 270;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
    };
  this.frames = 0;
  this.clear = function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
  this.score = function() {
    points = (Math.floor(this.frames/5))
    this.context.font = '18px serif';
    this.context.fillStyle = 'black';
    this.context.fillText('Score: '+points, 350, 50);
  };
  this.stop = function() {
    clearInterval(this.interval);
  };
} */

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

};

function Component(width, height, color, x, y){
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.update = function(){
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
      this.x += this.speedX;
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
  ctx = myGameArea.context;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}

function createBoard() {
  elementGreen = new Component(480, 640, '#288200', 0, 0);
  elementGrey = new Component(400, 640, '#808080', 40, 0);
  elementWhite = new Component(20, 640, 'rgb(255,255,255', 60, 0);
  elementWhite2 = new Component(20, 640, 'rgb(255,255,255', 400, 0);
  for (i = 0; i <= 11; i++) {
    var elementDiscWhite = [];
    elementDiscWhite[i] = new Component(10, 30, 'rgb(255, 255, 255', 235, 0 - 30 + (i*70));
  };
};

function car(){
  x = 150;
  y = 480;
  moveLeft =  function() {
    this.x -= 5;
    if(this.x <= 80){
      this.x = 80;
    }};
  moveRight = function() { 
    this.x += 5;
    if(this.x >= 330){
      this.x = 330;
    }};
  this.img = new Image();
  this.imgScale = 159/319;
  this.xScale = 150 * imgScale;
  this.img.onload = function() { 
    ctx.drawImage(img, car.x, car.y, xScale, 150); 
  };
  this.  img.src = "./images/car.png";
}
var car = {
  x : 150,
  y : 480,
  moveLeft :  function() {
    this.x -= 5;
    if(this.x <= 80){
      this.x = 80;
    }},
  moveRight : function() { 
    this.x += 5;
    if(this.x >= 330){
      this.x = 330;
    }},
}

function player(car) {
  var img = new Image();
  var imgScale = 159/319;
  var xScale = 150 * imgScale;
  img.onload = function() { 
     ctx.drawImage(img, car.x, car.y, xScale, 150); 
  }
  img.src = "./images/car.png";
}


document.onkeydown = function(e) {
  if (e.keyCode == 37) {
    car.moveLeft();
  } else if (e.keyCode == 39) {
    car.moveRight();
  }
  updatePlayer();
}

function updatePlayer() {
  ctx = myGameArea.context;
  ctx.clearRect(0, 0, myGameArea.width, myGameArea.height);
  createBoard()
  player(car)
}
