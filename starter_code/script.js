window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    new startGame();
  };

  function startGame() {
    var canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    document.getElementsBy;
    this.img = new Image();
    this.img.src = "images/car.png";
    this.player(157.5);
    this.y = 157;
    this.obstaculoArray = [];    
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          this.moveLeft();
          break;
        case 39:
          this.moveRight();
          break;
        default:
          break;
      }
    }.bind(this);
  }

  startGame.prototype.drawGreen = function() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 35, 500);
    this.ctx.fillRect(315, 0, 35, 500);
  };
  
  startGame.prototype.drawRoad = function() {
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(35, 0, 290, 500);
  };

  startGame.prototype.drawWhiteBorder = function() {
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(45, 0, 10, 500);
    this.ctx.fillRect(305, 0, 10, 500);
  };
  startGame.prototype.drawWhiteLines = function() {
    for (let i = 5; i < 500; i += 30) {
      this.ctx.fillRect(172.5, i, 5, 25);
    }
  };
  startGame.prototype.image = function(width, height, x, y) {
    this.img.onload = function() {
      this.ctx.drawImage(this.img, 157.5, 410, 35, 65);
    }.bind(this);
  }

  startGame.prototype.drawObstaculos = function () {
    setInterval( function(){for (let i = 0; i < this.obstaculoArray.length; i++) {
      
        console.log(this.obstaculoArray[i][0]);
        this.clear();
        this.draw();
        this.ctx.drawImage(this.img, y, 410, 35, 65)
        this.ctx.fillRect(this.obstaculoArray[i][0], ++this.obstaculoArray[i][2], this.obstaculoArray[i][1], 30)
            
    }}.bind(this),200)
    
    
  }
  startGame.prototype.clear = function() {
    this.ctx.clearRect(0, 0, 350, 500);
  }
  startGame.prototype.draw = function() {
    this.drawGreen();
    this.drawRoad();
    this.drawWhiteBorder();
    this.drawWhiteLines();
    //this.obstaculos();

  };
  
  startGame.prototype.player = function(y) {
    
      
        this.clear();
        this.draw();
        this.ctx.drawImage(this.img, y, 410, 35, 65);
      
    
  };
  startGame.prototype.moveLeft = function () {
    if (this.y <= 35) return;
    this.player(this.y -= 5)
  }
  startGame.prototype.moveRight = function () {
    if (this.y >= 295)
      return;
    this.player(this.y += 5)
  }
  startGame.prototype.obstaculos = function () {
    var randomW = Math.floor(Math.random()* 150)+50;
    var randomP = Math.floor(Math.random()* 220);
    this.ctx.fillRect(randomP, 0, randomW, 30)
    this.obstaculoArray.push([randomP, randomW, 0]);
    this.drawObstaculos();
  }
};
