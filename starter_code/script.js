


  var myCar;
  var intervalID;

  function startGame() {
    myGameArea.start(); 
    myCar = new Car(175, 520,50,70); 
    intervalID = setInterval(updateGameArea, 1000/50);
}

function drawRoad() {
  myGameArea.ctx.fillStyle = "green";
  myGameArea.ctx.fillRect(0,0,30,600);
  myGameArea.ctx.fillRect(370,0,30,600);
  myGameArea.ctx.fillStyle = "grey";
  myGameArea.ctx.fillRect(30,0,10,600);
  myGameArea.ctx.fillRect(360,0,10,600);
  myGameArea.ctx.fillRect(50,0,300,600);
  myGameArea.ctx.fillStyle = "white";
  myGameArea.ctx.fillRect(40,0,10,600);
  myGameArea.ctx.fillRect(350,0,10,600);
}

function calcPoints() {
  if (myObstacles.length <= 3) {
    myGameArea.points = 0;
  }
  else if (myObstacles.length > 3) {
    myGameArea.points = myObstacles.length - 3;
  }
}

function drawPoints() {
  myGameArea.ctx.fillStyle = "white";
  myGameArea.ctx.font = "20px monospace";
  myGameArea.ctx.fillText("Points: " + myGameArea.points, 60,30)
}

  var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
      this.canvas.width = 400;
      this.canvas.height = 600;
      this.frames = 0;
      this.ctx = this.canvas.getContext("2d");
      document.body.insertBefore(this.canvas, document.body.childNodes[1]);
      drawRoad();
      this.points = 0;
    },
    clear: function() {
      this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
    },
    stop: function() {
      clearInterval(intervalID);
      this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
      myObstacles = [];
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0,0,this.canvas.width, this.canvas.height);
      this.ctx.font = "40px monospace";
      this.ctx.fillStyle = "red";
      this.ctx.fillText("GAME OVER!", 40,100);
      this.ctx.fillStyle = "white";
      this.ctx.font = "30px monospace";
      this.ctx.fillText("Your final Score: ", 40,200);
      this.ctx.fillText("" + this.points, 40,300);
    }
}

  var img = new Image();
  img.src = "images/car.png";
 

  function Car(x, y, width, height) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.ctx = myGameArea.ctx;
    this.ctx.drawImage(img, x, y, width, height)

 
    this.update = function() {
       this.ctx.drawImage(img, this.x, this.y, width, height)
     };
    this.newPos = function() {
      this.x += this.speedX;

      if (this.x < 0) {
      this.x = 0;
      }
      else if (this.x > (400-this.width)) {
      this.x = 400-this.width;
      }
    }
    this.moveLeft = function() {
      this.speedX -= 1;
    }
    
    this.moveRight = function() {
      this.speedX += 1;
    }
    
    this.stopMove = function() {
      this.speedX = 0;
    }

    this.left = function() {
      return this.x;
    };
    this.right = function() {
      return this.x + this.width;
    };
    this.top = function() {
      return this.y;
    };
    this.bottom = function() {
      return this.y + this.height;
    };
    this.crashWith = function(obstacle) {
      return !(
        this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right()
      );
    }
}

var myObstacles = [];

function createObstacle() {
  var y = 0;
  var minGapRight = 0;
  var maxGapRight = 150;
  var minGapLeft = 0;
  var maxGapLeft = 150;
  var gapLeft = Math.floor(
    Math.random() * (maxGapLeft - minGapLeft + 1) + minGapLeft
  );
  var gapRight = Math.floor(
    Math.random() * (maxGapRight - minGapRight + 1) + minGapRight
  );
  var width = 280 - gapLeft - gapRight;
  myObstacles.push(new Component(width, 10, "red", 60+gapLeft, y));

  // return { x, minHeight, maxHeight, height, minGap, maxGap, gap };
}



function Component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  myGameArea.ctx.save();
  ctx = myGameArea.ctx;
  ctx.fillStyle = color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  this.update = function() {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  };
  this.left = function() {
    return this.x;
  };
  this.right = function() {
    return this.x + this.width;
  };
  this.top = function() {
    return this.y;
  };
  this.bottom = function() {
    return this.y + this.height;
  };
  myGameArea.ctx.restore();
}

  
  document.onkeyup = function(e) {
    myCar.stopMove();
  };
  
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        myCar.moveLeft();
        
        break;
      case 39:
        myCar.moveRight();
        
        break;
    }
  };



  function updateGameArea() {
    myGameArea.clear();
    drawRoad();
    myGameArea.frames += 1

    for (var i = 0; i < myObstacles.length; i++) {
      myObstacles[i].y += 1;
      myObstacles[i].update();
    }
    
    myCar.newPos();
    myCar.update();

    if (myGameArea.frames % 200 === 0) {
      createObstacle();
    }
    calcPoints();
    drawPoints();

    for (var i = 0; i < myObstacles.length; i++) {
      if (myCar.crashWith(myObstacles[i])) {
        console.log(myObstacles[i]);
          myGameArea.stop();
      }
    }
  }

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  
