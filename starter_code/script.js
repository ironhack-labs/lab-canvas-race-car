window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var myObstacles = [];
  function startGame() {
    myGameArea.start();
    player = new car(180,410,40,70);
    obstacle = new component(30, 30, "blue", 0, 110);
  }
  
  var myGameArea = {
    canvas : document.getElementById('game-board-canvas'),
    start : function (){
      this.ctx = this.canvas.getContext("2d");
      this.ctx.fillStyle = 'rgb(0, 129, 36)';
      this.ctx.fillRect(0,0,25,500);
      this.ctx.fillStyle = "rgb(128,128,128)";
      this.ctx.fillRect(25,0,350,500);
      this.ctx.fillStyle = 'rgb(0, 129, 36)';
      this.ctx.fillRect(375,0,25,500);
      this.ctx.clearRect(35,0,10,500);
      this.ctx.clearRect(355,0,10,500);
      for (i = 0; i < 15; i++) {
        this.ctx.clearRect(198,0 + i * 35, 4, 18);
      }
      this.interval = setInterval(updateGameArea, 10);
    },
    frames: 0,
    clear : function() {
      this.ctx = this.canvas.getContext("2d");
      this.ctx.fillStyle = 'rgb(0, 129, 36)';
      this.ctx.fillRect(0,0,25,500);
      this.ctx.fillStyle = "rgb(128,128,128)";
      this.ctx.fillRect(25,0,350,500);
      this.ctx.fillStyle = 'rgb(0, 129, 36)';
      this.ctx.fillRect(375,0,25,500);
      this.ctx.clearRect(35,0,10,500);
      this.ctx.clearRect(355,0,10,500);
      for (i = 0; i < 15; i++) {
        this.ctx.clearRect(198,0 + i * 35, 4, 18);
      }
      },
      score: function() {
        points = (Math.floor(this.frames/5))
        this.ctx.font = '20px arial';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText('Score: '+points, 50, 50);
      },
      stop : function() {
        clearInterval(this.interval);
        this.ctx.fillStyle = 'rgb(0, 0, 0)';
        this.ctx.fillRect(0,0,400,500);
        this.ctx.font = '32px arial';
        this.ctx.fillStyle = 'rgb(139, 0, 7)';
        this.ctx.fillText('GAME OVER!', 100, 100);
        this.ctx.font = '20px arial';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText('Your final score: '+points, 110, 200);
      }
    }

    function car(x,y,width,height){
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y; 
      this.speedX = 0;
      this.img = new Image();
      this.img.src = '../starter_code/images/car.png'; 
      this.img.onload = function(){
        this.update();
      }.bind(this);
      this.update = function(){
        ctx = myGameArea.ctx;
        ctx.drawImage(this.img,this.x, this.y,this.width, this.height);
      };
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
    }

    function component(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y; 
      this.speedX = 0;
      this.speedY = 0;
      this.update = function(){
          ctx = myGameArea.ctx;
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
            return;
        } 
      }
      myGameArea.clear();
      myGameArea.frames += .5;
      if (myGameArea.frames % 100 === 0) {
        y = 0;
        x = 300;
        minWidth = 50;
        maxWidth = 200;
        width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
        minGap = 80;
        maxGap = 120;
        gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
        myObstacles.push(new component(width, 20, 'rgb(139, 0, 7)', 0, y));
        myObstacles.push(new component(x - width, 20, 'rgb(139, 0, 7)',width + gap , y));
      }
      for (i = 0; i < myObstacles.length; i += 1) {
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