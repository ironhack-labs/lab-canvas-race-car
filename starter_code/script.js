var initailScreen = document.querySelector(".game-intro")
var firstCanvas = document.querySelector("#inital-canvas")
var myObstacles = [];
var finalPoints;

window.onload = function() {
  initialCanvas(firstCanvas)
  document.getElementById("start-button").onclick = function() {
    initailScreen.classList.add("hide")
    firstCanvas.classList.add("hide")
    startGame();
    player.update()
  };

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        moveLeft();
        break;
      case 39:
        moveRight();
        break;
      case 13:
        myObstacles = [];
        startGame();
        player.update();
        break;
    }
  }


    
  document.onkeyup = function(e) {
    stopMove();
  }
    
};

function startGame() {
  myGameArea.start();
}



var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function(){
    this.canvas.width = 1200;
    this.canvas.height = 800;
    this.context = this.canvas.getContext("2d");
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, 130, 800);
    this.context.fillStyle = 'gray';
    this.context.fillRect(130, 0, 20, 800);
    this.context.fillStyle = 'white';
    this.context.fillRect(150, 0, 30, 800);
    this.context.fillStyle = 'gray';
    this.context.fillRect(180, 0, 840, 800);
    this.context.fillStyle = 'white';
    this.context.fillRect(1020, 0, 30, 800);
    this.context.fillStyle = 'gray';
    this.context.fillRect(1050, 0, 20, 800);
    this.context.fillStyle = 'green';
    this.context.fillRect(1070, 0, 130, 800);
    var midLines = 0
    while(midLines < 800){
      this.context.fillStyle = 'white';
      this.context.fillRect(599, midLines, 2, 30);
      midLines += 50 
    }
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function() {
    this.context = this.canvas.getContext("2d");
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, 130, 800);
    this.context.fillStyle = 'gray';
    this.context.fillRect(130, 0, 20, 800);
    this.context.fillStyle = 'white';
    this.context.fillRect(150, 0, 30, 800);
    this.context.fillStyle = 'gray';
    this.context.fillRect(180, 0, 840, 800);
    this.context.fillStyle = 'white';
    this.context.fillRect(1020, 0, 30, 800);
    this.context.fillStyle = 'gray';
    this.context.fillRect(1050, 0, 20, 800);
    this.context.fillStyle = 'green';
    this.context.fillRect(1070, 0, 130, 800);
    var midLines = 0
    while(midLines < 800){
      this.context.fillStyle = 'white';
      this.context.fillRect(599, midLines, 2, 30);
      midLines += 50 
    }
  },
  frames : 0,
  stop : function() {
    clearInterval(this.interval);
    finalFunction();
  },
  score: function() {
    points = (Math.floor(this.frames/10))
    this.context.font = '25px serif';
    this.context.fillStyle = 'white';
    this.context.fillText('Score: '+points, 0, 20);
  },
}


function Component(width, height, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.update = function(){
    ctx = myGameArea.context;
    var color = "rgb(" + Math.floor(Math.random()*255) + " , " + Math.floor(Math.random()*255) + " , " + Math.floor(Math.random()*255) + ")";
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.left   = function() { return this.x                 }
  this.right  = function() { return (this.x + this.width)  }
  this.bottom    = function() { return this.y + this.height     }
  
  
}

var player = {
  width: 50,
  height: 100,
  x: 575,
  y: 700,
  speedX: 0,
  update : function(){
    ctx = myGameArea.context;
    var img = new Image();
    img.onload = function() { 
      ctx.drawImage(img, player.x, player.y, player.width, player.height); 
    }
    img.src = "images/car.png"
  },

  left: function() { return player.x                 },
  right: function() { return (player.x + player.width)  },
  top: function() { return player.y                 },

  crashWith : function(obstacle) {
    return ((player.top() < obstacle.bottom())    &&
             (player.right()    > obstacle.left()) &&
             (player.left()    < obstacle.right())) 
  },


}


function updateGameArea() {
  for (i = 0; i < myObstacles.length; i += 1) {
    if (player.crashWith(myObstacles[i])) {
        finalPoints = myGameArea.frames/10
        myGameArea.stop();
        return;
    }
  }

  myGameArea.clear();
  myGameArea.frames +=1;

  if (myGameArea.frames % 30 === 0) {
    var x = (Math.floor(Math.random()*(800)));
    var maxRight = 400;
    var oWidth = Math.floor(Math.random()*maxRight) + 50;
    myObstacles.push(new Component(oWidth, (Math.floor(Math.random() * 40) + 10), x, 0));
  };

  for (i = 0; i < myObstacles.length; i += 1) {
    if(myObstacles[i].y >= 800){
      myObstacles.shift(myObstacles[i]);
      i--
      continue
    }
    myObstacles[i].y += 10;
    myObstacles[i].update();
  };


  player.update();
  if(player.x < 130) {player.x = 130}
  if (player.x > 1020) {player.x = 1020}
  myGameArea.score();
}


function moveLeft() {
  player.x -= 10;
}

function moveRight() {
  player.x += 10;
}


function stopMove() {
  player.x = player.x;
}


var finalFunction = function (){
  ctx = myGameArea.canvas.getContext("2d");
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, 1200, 800);
  ctx.font = '50px serif';
  ctx.fillStyle = 'darkred';
  ctx.fillText('Game Over!', 495, 320);
  ctx.font = '50px serif';
  ctx.fillStyle = 'white';
  ctx.fillText('Your final score is ' + finalPoints, 395, 420);
  ctx.font = '50px serif';
  ctx.fillStyle = 'white';
  ctx.fillText('Press Enter to play again', 380, 520);
}

function initialCanvas(selector) {
  var ctx = selector.getContext('2d');
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, 50, 520);
  ctx.fillStyle = 'gray';
  ctx.fillRect(50, 0, 10, 520);
  ctx.fillStyle = 'white';
  ctx.fillRect(60, 0, 15, 520);
  ctx.fillStyle = 'gray';
  ctx.fillRect(75, 0, 200, 520);
  ctx.fillStyle = 'white';
  ctx.fillRect(275, 0, 15, 520);
  ctx.fillStyle = 'gray';
  ctx.fillRect(290, 0, 10, 520);
  ctx.fillStyle = 'green';
  ctx.fillRect(300, 0, 50, 520);

  var ypos = 0
  while(ypos < 520){
    ctx.fillStyle = 'white';
    ctx.fillRect(175, ypos, 2, 25);
    ypos += 45 
  }

}