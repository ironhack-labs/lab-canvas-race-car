window.onload = function() {
  let myObstacles = [];

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    roadGame.start();
    player = new component(30, 60, "./images/car.png", 150, 400, "image");
  }

  let roadGame = {
    canvas: document.createElement("canvas"),
    start: function() {
      this.canvas.width = 500;
      this.canvas.height = 600;
      this.context = this.canvas.getContext("2d");
      this.context.fillStyle = "green";
      this.context.fillRect(0, 0, 40, 600);
      this.context.fillRect(460, 0, 40, 600);
      this.context.fillStyle = "gray";
      this.context.fillRect(60, 0, 380, 600);
      this.context.fillRect(30, 0, 20, 600);
      this.context.fillRect(450, 0, 20, 600);
      this.context.beginPath();
      this.context.setLineDash([15, 20]);
      this.context.lineWidth = 4;
      this.context.strokeStyle = "white";
      this.context.moveTo(250, 0);
      this.context.lineTo(250, 600);
      this.context.stroke();
      let gBoard = document.getElementById("game-board");
      gBoard.appendChild(this.canvas);
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
      points = Math.floor(this.frames / 5);
      this.context.font = "18px serif";
      this.context.fillStyle = "black";
      this.context.fillText("Score: " + points, 350, 50);
    }
  };

  function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image") {
      this.image = new Image();
      this.image.src = color;
    }
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function() {
      ctx = roadGame.context;
      if (type == "image") {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      } else {
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
    };
    this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY;
    };
    this.left = function() {
      return this.y;
    };
    this.right = function() {
      return this.y + this.height;
    };
    this.top = function() {
      return this.x;
    };
    this.bottom = function() {
      return this.x + this.width;
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


  function updateRoad() {
    for (i = 0; i < myObstacles.length; i += 1) {
      if (player.crashWith(myObstacles[i])) {
        roadGame.stop();
        return;
      }
    }
    roadGame.clear();
    roadGame.context.fillStyle = "green";
    roadGame.context.fillRect(0, 0, 40, 600);
    roadGame.context.fillRect(460, 0, 40, 600);
    roadGame.context.fillStyle = "gray";
    roadGame.context.fillRect(60, 0, 380, 600);
    roadGame.context.fillRect(30, 0, 20, 600);
    roadGame.context.fillRect(450, 0, 20, 600);
    roadGame.context.beginPath();
    roadGame.context.setLineDash([15, 20]);
    roadGame.context.lineWidth = 4;
    roadGame.context.strokeStyle = "white";
    roadGame.context.moveTo(250, 0);
    roadGame.context.lineTo(250, 600);
    roadGame.context.stroke();
    roadGame.frames += 1;
    if (roadGame.frames % 100 === 0) {
      y = 0;
      minWidth = 20;
      maxWidth = 200;
      width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
      minGap = 40;
      maxGap = 400;
      gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      myObstacles.push(new component(width, 12, "red", 0, y));
      myObstacles.push(
        new component(y + width + gap, 12, "red", width + gap, y)
      );
    }
    for (i = 0; i < myObstacles.length; i += 1) {
      myObstacles[i].y += +1;
      myObstacles[i].update();
    }
    player.newPos();
    player.update();
    roadGame.score();
  }

  function moveUp() {
    player.speedY -= 1;
  }

  function moveDown() {
    player.speedY += 1;
  }

  function moveLeft() {
    player.speedX -= 1;
  }

  function moveRight() {
    player.speedX += 1;
  }

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
  };

  document.onkeyup = function(e) {
    stopMove();
  };

  function stopMove() {
    player.speedX = 0;
    player.speedY = 0;
  }

};
