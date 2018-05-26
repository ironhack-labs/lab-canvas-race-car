window.onload = function () {
  // Speed of canvas
  function interval() {
    setInterval(updateCanvas, 30);
  }

  document.getElementById("start-button").onclick = function () {
    interval();
    startGame();
  };

  // First iteration: Draw the Game Board
  function startGame() {
    createGameBoard();
    drawCar()
  }

  var theCanvas = document.getElementById("game-board");
  var ctx = theCanvas.getContext("2d");

// Genererates the highway drawing
  function createGameBoard() {
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 500, 600);
    ctx.fillStyle = "gray";
    //            x  y  width heigth
    //            |  |    |     |
    ctx.fillRect(50, 0, 400, 600);

    ctx.fillStyle = "white";
    ctx.fillRect(60, 0, 10, 600);
    
    ctx.fillRect(430, 0, 10, 600);
    ctx.lineWidth = "15";

    ctx.setLineDash([40, 20]);
    ctx.strokeStyle = "white";

    ctx.moveTo(245, 600);
    ctx.lineTo(245, 0);
    ctx.stroke();

    // Score counter:
    ctx.font = "30px Fira Code";
    ctx.fillStyle = "white";
    ctx.fillRect(76, 50, 150, 38);
    ctx.fillStyle = "red";
    ctx.fillText("Score: " + board.score, 80, 80);
  }


  // Second Iteration: Draw Player´s Car:
  function drawCar() {
    ctx.drawImage(carImage, car.x, car.y, car.width, car.heigth);
  }

  var carImage = new Image();
  carImage.src = "images/car.png";


  // Third Iteration: Make Player´s Car move right and left
  var car = {
    width: 60,
    heigth: 90,
    x: 220,
    y: 500,
    moveLeft: function () {
      if (this.x > 60) {
        this.x -= 30;
      }
    },
    moveRight: function () {
      if (this.x < 390) {
        this.x += 30;
      }
    }    
  }

  // Fourth Iteration: Create Obstacles
  var myObstacles = []
  var board = {
    score: 0,
    frames: 0
  }

  document.onkeydown = function (e) {
    if (e.keyCode === 37) {
      car.moveLeft();
    } else if (e.keyCode === 39) {
      car.moveRight();
    } else {
      console.log("Remember to press the LEFT and RIGHT key");
    }
    createGameBoard();
    drawCar();
    for (var i = 0; i < myObstacles.length; i++) {
      myObstacles[i].craeteObstacle();
      myObstacles[i].y += 5;
    }
  }

  function Obstacle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.craeteObstacle = function () {
      ctx.fillStyle = "#970747";
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    this.left = function () {
      return this.x;
    }
    this.rigth = function () {
      return this.x + this.width;
    }
    this.top = function () {
      return this.y;
    }
    this.bottom = function () {
      return this.y + this.height;
    }

    this.checkCollision = function (obstacle) {
      return !((car.y > obstacle.bottom()) ||
        (car.x + 40 < obstacle.left()) ||
        (car.x + 40 > obstacle.rigth()))
    }
  }

  function updateCanvas() {
    ctx.clearRect(0, 0, 500, 600);
    createGameBoard();
    drawCar();
    board.frames++;
    /* 
    With the following conditional, obstacles will be
    displayed every 60 frames.  
    */
    if (board.frames % 60 === 1) {
      obstacleX = Math.floor(Math.random() * 300);
      obstacleY = 0;
      obstacleWidth = 200;
      obstacleHeight = 40;
      myObstacles.push(new Obstacle(obstacleX, obstacleY, obstacleWidth, obstacleHeight));
    }

    for (var i = 0; i < myObstacles.length; i++) {
      myObstacles[i].craeteObstacle();
      myObstacles[i].y += 10;

      if(myObstacles[i].checkCollision(myObstacles[i]) === true){
        setTimeout(function(){
          alert("Game Over");
        }, 30);
        board.score = 0;
        board.frames = 0;
        myObstacles = [];
        startGame();
      }
    }
  }

};