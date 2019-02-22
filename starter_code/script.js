window.onload = function() {
  var canvas = document.getElementById("road");
  var ctx = canvas.getContext("2d");
  var player = '';
  var score = 0;
  var obstacle = [];
  var interval = '';

  
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    myGameArea.start();
    player = new Car();
   
  }

  var myGameArea = {
    canvas: document.getElementById("road"),
    start: function(){
      ctx.fillStyle = 'green';
      ctx.fillRect(50, 20, 60, 760);  
      ctx.fillStyle = 'gray';
      ctx.fillRect(110, 20, 20, 760);
      ctx.fillStyle = 'gray';
      ctx.fillRect(150, 20, 500, 760);
      ctx.fillStyle = 'gray';
      ctx.fillRect(670, 20, 20, 760);
      ctx.fillStyle = 'green';
      ctx.fillRect(690, 20, 60, 760);
      ctx.fillStyle = 'white';
      ctx.fillRect(400, 60, 7, 35);
      ctx.fillStyle = 'white';
      ctx.fillRect(400, 130, 7, 35);
      ctx.fillStyle = 'white';
      ctx.fillRect(400, 200, 7, 35);
      ctx.fillStyle = 'white';
      ctx.fillRect(400, 270, 7, 35);
      ctx.fillStyle = 'white';
      ctx.fillRect(400, 340, 7, 35);
      ctx.fillStyle = 'white';
      ctx.fillRect(400, 410, 7, 35);
      ctx.fillStyle = 'white';
      ctx.fillRect(400, 480, 7, 35);
      ctx.fillStyle = 'white';
      ctx.fillRect(400, 550, 7, 35);
      ctx.fillStyle = 'white';
      ctx.fillRect(400, 620, 7, 35);
      ctx.fillStyle = 'white';
      ctx.fillRect(400, 690, 7, 35);
      ctx.fillStyle = 'white';
      ctx.fillRect(400, 760, 7, 35);
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

function Car(){
  width = width,
    height = height,
    x = x,
    y = y,
    speedX = 0
    var img = new Image();
    img.src = "..images/car.png"
}

 function Component(width, height, color, x, y) {
    width = width,
    height = height,
    x = x,
    y = y,
    speedX = 0,
    update = function(){
      ctx = myGameArea.context;
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

function moveLeft() {
  player.speedX -= 1;
}

function moveRight() {
  player.speedX += 1;
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
  player.speedX = 0;
 
}
}
};
