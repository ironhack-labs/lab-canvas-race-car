var myObstacles = [];

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.canvas.style.border = "thick solid #0000FF";
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    frames: 100,
    stop: function() {
      clearInterval(this.interval);
    },
    score: function() {
      points = (Math.floor(this.frames/5))
      this.context.font = '18px serif';
      this.context.fillStyle = 'black';
      this.context.fillText('Score: '+points, 350, 50);
    },
}
myGameArea.start()

//Component 
function Component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    this.left   = function() { return this.x };
    this.right  = function() { return (this.x + this.width) };
    this.top    = function() { return this.y };
    this.bottom = function() { return (this.y + this.height) };
  
    this.crashWith = function(obstacle) {
      return !((this.bottom() < obstacle.top())    ||
              (this.top()    > obstacle.bottom()) ||
              (this.right()  < obstacle.left())   ||
              (this.left()   > obstacle.right()))
    }
  
}

player = new Component(30, 30, "red", 0, 110);

function updateGameArea() {
    myGameArea.clear();
    player.newPos();
    player.update();
    myGameArea.frames +=1;
    if (myGameArea.frames % 120 === 0) {
      x = myGameArea.canvas.width;
      minHeight = 20;
      maxHeight = 200;
      height = Math.floor(Math.random()*(maxHeight-minHeight+1)+minHeight);
      minGap = 50;
      maxGap = 200;
      gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
      myObstacles.push(new Component(10, height, "green", x, 0));
      myObstacles.push(new Component(10, x - height - gap, "green", x, height + gap));
    }
    
    for (i = 0; i < myObstacles.length; i++) {
        if (myGameArea.frames % 120 === 0) {
            console.log(myObstacles[i].x)
        }
      myObstacles[i].x += -1;
      myObstacles[i].update();
    }

    var crashed = myObstacles.some(function(obstacle) {
      return player.crashWith(obstacle)
    })

    if (crashed) {
      myGameArea.stop();
    }

    myGameArea.score();

}

function moveUp() {player.speedY -= 1;}
function moveDown() {player.speedY += 1;}
function moveLeft() {player.speedX -= 1;}
function moveRight() {player.speedX += 1;}

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