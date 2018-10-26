window.onload = function() {
  let myObstacles = [];

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    roadGame.start();
    player = new Car();
  }

  let roadGame = {
    canvas: document.createElement("canvas"),
    start: function() {
      this.canvas.width = 500;
      this.canvas.height = 600;
      this.context = this.canvas.getContext("2d");
      this.context.fillStyle = "green";
      this.context.fillRect(0,0,40,600);
      this.context.fillRect(460,0,40,600);
      this.context.fillStyle = "gray";
      this.context.fillRect(60,0,380,600);
      this.context.fillRect(30,0,20,600);
    
      this.context.fillRect(450,0,20,600);
      this.context.beginPath();
      this.context.setLineDash([15, 20]);
      this.context.lineWidth=4;
      this.context.strokeStyle = "white";
      this.context.moveTo(250,0);
      this.context.lineTo(250,600);
      this.context.stroke();
      
      $("#game-board").append(this.canvas);
      this.interval = setInterval(updateRoad, 17);
    },
    frames: 0,
    clear: function() {
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
  };

  function updateRoad() {
    for (i = 0; i < myObstacles.length; i += 1) {
      if (player.crashWith(myObstacles[i])) {
        roadGame.stop();
        return;
      }
      roadGame.clear();
      roadGame.frames += 1;
      if (roadGame.frames % 100 === 0) {
        let y = roadGame.canvas.height;
        let minWidth = 20;
        let maxWidth = 200;
        let width = Math.floor(
          Math.random() * (maxWidth - minWidth + 1) + minWidth
        );
        let minGap = 50;
        let maxGap = 200;
        let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
        myObstacles.push(new Obstacles(width, 10, "green", 0, y));
        myObstacles.push(
          new Obstacles(y - width - gap, 10, "green", width + gap, y)
        );
      }
      for (let i = 0; i < myObstacles.length; i += 1) {
        myObstacles[i].y += -1;
        myObstacles[i].update();
      }
      player.newPos();
      player.update();
      roadGame.score();
    }
  }

  function Obstacles(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    let ctx = roadGame.context;
    ctx.fillSytle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  function Car() {
    let car = new Image();
    this.width = 158;
    this.height = 319;
    this.speedX = 0;
    //this.speedY = 0;
    this.update = function() {
      let ctx = roadGame.context;
      car.onload = function() {
        ctx.drawImage(img, 250, 250, this.width, this.height);
        car.src = "./images/car.png";
      };
    };
    this.newPos = function() {
      this.x += this.speedX;
      //this.y += this.speedY;
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

    this.crashWith = function(obstacle) {
      return !(
        this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right()
      );
    };
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
  };

  document.onkeyup = function(e) {
    stopMove();
  };

  function stopMove() {
    player.speedX = 0;
    player.speedY = 0;
  }

  roadGame.start();
};
