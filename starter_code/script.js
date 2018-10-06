window.onload = function() {
  
  document.getElementById("start-button").onclick = function() {
    startGame()};


  function startGame() {}
  var myObstacles = [];

  function startGame() {
      myGameArea.start();
      player = new component(30, 30, "red", 200, 500);
  }
  
  var myGameArea = {
      canvas : document.createElement("canvas"),
      start : function() {
          this.canvas.width = 400;
          this.canvas.height = 600;
          this.context = this.canvas.getContext("2d");
          document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 30);
      },
      frames: 0,
      clear : function() {
            this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        },
    score: function() {
      points = (Math.floor(this.frames/5))
      this.context.font = '18px serif';
      // ctx.fillStyle = "green";
      // ctx.fillRect(0, 0, 400, 600);
      // ctx.fillStyle = "gray";
      // ctx.fillRect(50, 0, 300, 600);
      // ctx.fillStyle = "white";
      // ctx.fillRect(60, 0, 10, 600);
      // ctx.fillRect(330, 0, 10, 600);
      // ctx.lineWidth = "15";
      // ctx.setLineDash([40, 20]);
      // ctx.strokeStyle = "white";
      // ctx.moveTo(200, 600);
      // ctx.lineTo(200, 0);
      // ctx.stroke();
      this.context.fillText('Score: '+points, 350, 50);
    },
    stop : function() {
          clearInterval(this.interval);
      }
  }
  
  function component(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y; 
      this.speedX = 0;
      this.update = function(){
          ctx = myGameArea.context;
          ctx.fillStyle = color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
      }
      this.newPos = function() {
          this.x += this.speedX; 
      }
      this.left   = function() { return this.x                 }
      this.right  = function() { return (this.x + this.height)  }
      this.top    = function() { return this.y                 }
      this.bottom = function() { return this.y + (this.width) }
      
      this.crashWith = function(obstacle) {
        return !((this.bottom() < obstacle.top())    ||
                 (this.top()    > obstacle.bottom()) ||
                 (this.right()  < obstacle.left())   ||
                 (this.left()   > obstacle.right())) 
      }
  }
  
  function updateGameArea() {
      for (i = myObstacles.length-1; i >=0; i -= 1) {
          if (player.crashWith(myObstacles[i])) {
              myGameArea.stop();
              return;
          } 
      }
      myGameArea.clear();
      myGameArea.frames -=1;
      if (myGameArea.frames % 150 === 0) {
          y = myGameArea.canvas.width;
          minWidth = 50;
          maxWidth = 300;
          width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
          minGap = 50;
          maxGap = 100;
          gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
          myObstacles.push(new component(width, 10, "red", 0, 0));
          myObstacles.push(new component(y - width - gap, 10, "red", width + gap, 0));
      }
      for (i = myObstacles.length-1; i >=0; i -= 1) {
          myObstacles[i].y += 1;
          myObstacles[i].update();
      }
      player.newPos();
      player.update();
      myGameArea.score();
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
  
  };