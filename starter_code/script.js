window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var myObstacles = [];

function startGame() {
    myGameArea.start();
    player = new component(30, 30, "red", 150, 0);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 600;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    frames: 0,
    clear : function() {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      },
    score: function() {
      points = (Math.floor(this.frames/5))
      this.context.font = '18px serif';
      this.context.fillStyle = 'black';
      this.context.fillText('Score: '+points, 350, 50);
      },
    stop : function() {
        clearInterval(this.interval);
      }
}


// DIBUJAR COCHE - PLAYER
// function componentCAR(x, y) {
    
     
    
//     this.x = x;
//     this.y = y; 
//     this.speedX = 0;
//     this.speedY = 0;
//     this.update = function(){
//         this.canvas = myGameArea.context;
//         this.canvas.fillStyle = color;
//         this.canvas.fillRect(this.x, this.y, this.width, this.height);
//     }
//     this.newPos = function() {
//         this.x += this.speedX;
//         this.y += this.speedY; 
//     }
//     this.left   = function() { return this.x                 }
//     this.right  = function() { return (this.x + this.width)  }
//     this.top    = function() { return this.y                 }
//     this.bottom = function() { return this.y + (this.height) }
    
//     this.crashWith = function(obstacle) {
//       return !((this.bottom() < obstacle.top())    ||
//                (this.top()    > obstacle.bottom()) ||
//                (this.right()  < obstacle.left())   ||
//                (this.left()   > obstacle.right())) 
//     }
// }

//DIBUJAR OBSTACULOS
function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y; 
    this.speedX = 0;
    this.speedY = 0;
    this.update = function(){
        this.canvas = myGameArea.context;
        this.canvas.fillStyle = color;
        this.canvas.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY; 
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



function updateGameArea() {
    for (i = 0; i < myObstacles.length; i += 1) {
        if (player.crashWith(myObstacles[i])) {
            myGameArea.stop();
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frames +=1;
    if (myGameArea.frames % 100 === 0) {
        y = myGameArea.canvas.width;
        minWidth = 90;
        maxWidth = 190;
        width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
        minGap = 120;
        maxGap = 190;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(width, 20, "brown", 0, y));
        myObstacles.push(new component(y-width-gap, 20, "brown", width + gap, y));

    
    }
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].y += -1;
        myObstacles[i].update();
    }
    player.newPos();
    player.update();
    myGameArea.score();
}

function moveUp() {
    player.speedY -= 1; 
}

function moveDown() {
    player.speedY += 1; 
}

function moveLeft() {
    player.speedX -= 1;
}

function moveRight() {
    player.speedX += 1;
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
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



};
