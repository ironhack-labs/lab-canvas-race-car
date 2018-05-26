window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var myObstacles = []; 
  
function startGame() {
    myGameArea.start();
    var draw = function(){
      var img = new Image();
      img.onload = function(){
      myGameArea.context.drawImage(img, player.x,player.y);
    }
    img.src = "/images/car.png";
    }
    
    player = new component(40, 60, "blue", 230, 430);
    draw(player);

}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 500;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    frames: 1,
    clear : function() {
          this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.context.fillStyle = "green";
          this.context.fillRect(0,0,30,500);
          this.context.fillRect(470,0,30,500);
          this.context.fillStyle = "grey";
          this.context.fillRect(30,0,5,500);
          this.context.fillRect(470,0,5,500);
          this.context.fillRect(40,0,425,500);
          this.context.fillRect(250,150,10,100);
          this.context.fillStyle = "white";
          this.context.fillRect(250,0,10,100);
          this.context.fillRect(250,250,10,100);
      },
  score: function() {
    points = (Math.floor(this.frames/4))
    this.context.font = '18px serif';
    this.context.fillStyle = 'black';
    this.context.fillText('Score: '+points, 350, 50);
  },
  stop : function() {
        clearInterval(this.interval);
    },
  gameOver: function(){
    this.fillStyle = "black";
    this.context.fillRect(0,0,500,500);
    this.context.font = '45px serif';
    this.context.fillStyle = "red";
    this.context.fillText("Game Over", 140,200);
    this.context.fillStyle = "white";
    this.context.fillText("Your score is: " + points, 100, 250)

  }
}

function component(width, height, color, x, y,img) {
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
            myGameArea.gameOver();
            return;
        } 
    }
    myGameArea.clear();
    myGameArea.frames +=1;
    if (myGameArea.frames % 100 === 0) {
        myGameArea.frames += 3;
        y = -myGameArea.canvas.height;
        minWidth = 200;
        maxWidth = 250;
        width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
        randomX = Math.floor(Math.random()*300);
        myObstacles.push(new component(width, 20, "red", randomX, y));
    }
  
    for (i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].y += 2;
        myObstacles[i].update();
    }
    player.newPos();
    player.update();
    myGameArea.score();
}

function moveLeft() {
    player.speedX -= 3;
}

function moveRight() {
    player.speedX += 3;
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
    player.speedY = 0; 
}
};
