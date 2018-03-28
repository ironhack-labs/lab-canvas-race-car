window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var car;
  function Player(x, y){
    this.x = x;
    this.y = y;
    this.img = new Image();
    this.img.src = "images/car.png";
    this.moveLeft = function(){
      if (this.x>45){
      this.x-=10;
      }
    };

    this.moveRight = function(){
      if (this.x<225){
        this.x+=10;
        }
    };

    this.moveUp = function(){
      if (this.y>40){
        this.y-=10;
      }
    };
    this.moveDown = function(){
      if (this.y<520){
        this.y+=10;
      }
    };
  }
  Player.prototype.left = function(){
    return this.x;
  }
  
  Player.prototype.right = function(){
    return this.x+30;
  }

  Player.prototype.top = function(){
    return this.y;
  }

  Player.prototype.bottom = function(){
    return this.y+60;
  }

  Player.prototype.crashWith = function(obstacle){
    return !((this.bottom() < obstacle.top())    ||
    (this.top()    > obstacle.bottom()) ||
    (this.right()  < obstacle.left())   ||
    (this.left()   > obstacle.right()))
  }
  function Obstacle(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.x= x;
    this.y=y;
    this.update = function(){
      myGameArea.ctx.fillStyle = color;
      myGameArea.ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  Obstacle.prototype.left = function(){
    return this.x;
  }
  
  Obstacle.prototype.right = function(){
    return this.x+this.width;
  }

  Obstacle.prototype.top = function(){
    return this.y;
  }

  Obstacle.prototype.bottom = function(){
    return this.y+this.height
  }

 

  var myObstacles = [];

  function updateGameArea(){
    for (var p = 0 ; p< myObstacles.length; p++){
      console.log(car.crashWith(myObstacles[p]));
      console.log(car.x+30);
      console.log(myObstacles[p].width)
      console.log(myObstacles[p].x);
      console.log(myObstacles[p].left());
      if (car.crashWith(myObstacles[p])) {
        myGameArea.stop();
        return;
      }
    }

    myGameArea.clear();
    myGameArea.drawTrack();
    myGameArea.frames ++;
    if (myGameArea.frames %150 ===0){
      minWidth = 50;
      maxWidth = 150;
      height = 20;
      side = Math.floor(Math.random()*2)+1;
      width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
      if (side===1){
      myObstacles.push(new Obstacle(width, height, "red", 270-width, 0 ));
      } else {
      myObstacles.push(new Obstacle(width, height, "red", 30, 0 ));
      }
    }

    for (var i = 0; i< myObstacles.length; i++){
      myObstacles[i].y ++;
      myObstacles[i].update();
    }
    drawCar();
    myGameArea.score();
  }

  var myGameArea = {
    canvas : document.createElement("canvas"),
    frames : 0,
    drawTrack : function(){
      this.ctx.fillStyle="#367E1A"
        this.ctx.fillRect(0,0,30,600);

        this.ctx.fillStyle="#367E1A"
        this.ctx.fillRect(270,0,30,600);

        this.ctx.fillStyle="#808080"
        this.ctx.fillRect(30,0,5,600);

        this.ctx.fillStyle="#808080"
        this.ctx.fillRect(265,0,5,600);

        this.ctx.fillStyle="#808080"
        this.ctx.fillRect(42,0,216,600);

        this.ctx.strokeStyle="#FFF";
        this.ctx.lineWidth=5;
        this.ctx.setLineDash([15, 15]);
        this.ctx.beginPath();
        this.ctx.moveTo(150,5);
        this.ctx.lineTo(150,600);
        this.ctx.stroke();
    },
    start : function() {
        this.canvas.width = 300;
        this.canvas.height = 600;
        this.ctx = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);

        
    },
    clear : function(){
      this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);
    }, 
    stop : function(){
      clearInterval(this.interval);
      this.clear();
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(0,0,300,600);
      this.ctx.font = "30px serif";
      this.ctx.fillStyle = "red";
      this.ctx.fillText("Game Over!", 75, 250);
      this.ctx.fillStyle = "white";
      this.ctx.fillText("Your final score", 60, 290);
      this.ctx.fillText(points, 130, 330);
    },
    score: function(){
      points = (Math.floor(this.frames/5))
      this.ctx.font = "18px serif";
      this.ctx.fillStyle = "white";
      this.ctx.fillText("Score: "+points, 60, 30);
    }   
    
  }

  function startGame() {
    myObstacles = [];
    myGameArea.frames=0; 

    clearInterval(myGameArea.interval);
    myGameArea.start();


    car = new Player(135,530);
    
  
    
  }

  function drawCar(){
    myGameArea.ctx.drawImage(car.img, car.x, car.y, 30,60);
  }

  document.onkeydown=function(e){
    switch (e.keyCode){
      case 37:
      car.moveLeft();
      break;
      case 39:
      car.moveRight();
      break;
      case 38:
      car.moveUp();
      break;
      case 40:
      car.moveDown();
      break;
    }
  };
};
