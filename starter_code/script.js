
// gray #808080
window.onload = function() {
  var myObstacles = [];
  var myGameArea = {
    canvas : document.createElement("canvas"),
    frames: 100,
    start : function() {
        this.canvas.width = 480;
        this.canvas.height = 470;
        this.canvas.style.border = "thick solid #808080";
        this.context = this.canvas.getContext("2d");
        document.getElementById('game-board').appendChild(this.canvas);    
        this.interval = setInterval(updateGameArea, 20);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
      clearInterval(this.interval);
    },
    score: function() {
      points = (Math.floor(this.frames/5))
      this.context.font = '18px serif';
      this.context.fillStyle = 'black';
      this.context.fillText('Score: '+points, 350, 50);
    },
    road: function() {
      let doce = this.canvas.width / 12 
      let dos = this.canvas.width / 2 ; //dot know why the ** this is not the middle. 
      let extra = doce / 3;    
      let top = 0;
      reactangle(this.context, 0 ,this.canvas.width, 0, '#808080', this.canvas.height ) //road    
      reactangle(this.context, 0 ,doce, 0, '#008a06', this.canvas.height) //left green
      reactangle(this.context, 0 ,doce, (this.canvas.width - doce), '#008a06', this.canvas.height) //right green 
      reactangle(this.context, 0 ,extra, extra + doce, '#ffffff', this.canvas.height) // left white
      reactangle(this.context, 0 ,extra, (this.canvas.width - (extra * 2 + doce)), '#ffffff', this.canvas.height) // right white     
        // this should be animated
      for (let i = 0; i < 15; i++) {    
        top = top + i;          
          reactangle(this.context, top, extra, dos - extra, '#ffffff', this.canvas.height / 12) 
          // reactangle(this.context, top + frames , extra, dos - extra, '#ffffff', frame.height / 12) 
        top = (this.canvas.height / 12) + top + 15 ;
      }
    }
  }
  //document.getElementById("start-button").onclick = function() {
  myGameArea.start()
  //}
  function Component(width, height, color, x, y, image) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function(){
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        if(image){
          var img = document.getElementById("car");
          ctx.drawImage(img, this.x, this.y, this.width, this.height)
        } else{
          console.log(this.x, this.y, this.width, this.height)
          ctx.fillRect(this.x, this.y, this.width, this.height);
        }
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
  player = new Component(40, 70, "red", 219, 390, true);
  function updateGameArea() {
    myGameArea.clear();
    myGameArea.road();    
    player.newPos();
    player.update();
    myGameArea.frames +=1;
    if (myGameArea.frames % 120 === 0) {
      y = myGameArea.canvas.width;
      maxWidth = 200;
      minWidth = 20;
      width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
      minGap = 50;
      maxGap = 200;
      gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
      myObstacles.push(new Component(width, 10, "green", gap, 0));
    }
    
    for (i = 0; i < myObstacles.length; i++) {
      myObstacles[i].y += 1;
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
    function reactangle(ctx, top ,width, start, color, height) {
      ctx.beginPath();
      ctx.rect(start, top, width, height);
      ctx.fillStyle = color;    
      ctx.fill();
    }
    // function moveUp() {player.speedY -= 1;}
    // function moveDown() {player.speedY += 1;}
    function moveLeft() {player.speedX -= 1;}
    function moveRight() {player.speedX += 1;}
    
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        // case 38:
        //   moveUp();
        //   break;
        // case 40:
        //   moveDown();
        //   break;
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
