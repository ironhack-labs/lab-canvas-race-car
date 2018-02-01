window.onload = function() {
  function interval() { 
    setInterval(updateCanvas, 20) 
  }

  var myObstacles = [];
  var carImg = new Image();
  carImg.src = "images/car.png";
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    createGameBoard();
    interval();
    drawCar();
  }

  function createGameBoard() {
    this.canvas = document.getElementById('game-board');
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle="green";
    this.ctx.fillRect(0,0,500,600);
    this.ctx.fillStyle="gray";
    this.ctx.fillRect(50,0,400, 600);
    this.ctx.fillStyle="white";
    this.ctx.fillRect(60, 0, 10, 600)
    this.ctx.fillRect(430, 0, 10, 600);
    this.ctx.lineWidth = 10;
    this.ctx.setLineDash([40,40]);
    this.ctx.strokeStyle = "white";
    this.ctx.moveTo(245,0);
    this.ctx.lineTo(245,600);
    this.ctx.stroke();
    this.ctx.font = "50px Helvetica";
    this.ctx.fillText("Score: " + board.frames, 0, 50);
  }

  var car = {
    x: 205,
    y: 440,
    carWidth: 80,
    carHeight: 160,
    moveLeft: function() { this.x -= 10 },
    moveRight: function() { this.x += 10 }
  }

  var board = {
    frames: 0,
  }
  
  function component (width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function() {
      ctx.fillStyle = "orange";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
    this.left = function() { return this.x };
    this.right = function() { return this.x + this.width };
    this.top = function() { return this.y };
    this.bottom = function() { return this.y + (this.height) };

    this.crashWith = function(obstacle) {
      return !(((car.y) > obstacle.bottom()) ||
               ((car.x + 40) < obstacle.left()) ||
               ((car.x + 40) > obstacle.right()))
    }
  }

  document.onkeydown = function(e) {
    switch(e.keyCode) {
      case 65: 
        car.moveLeft(); 
        break;
      case 68:
        car.moveRight();
        break;
      default:
        console.log("oh no!");
    }
    updateCanvas();
  }

  function updateCanvas() {
    ctx.clearRect(0,0,500,600);
    createGameBoard();
    drawCar();
    board.frames++;
    if (board.frames % 200 === 0) {
      wallX = Math.floor(Math.random() * 400);
      wallWidth = 100;
      wallHeight = 20;
      myObstacles.push(new component(wallWidth, wallHeight, wallX, 0));
    }
    for (i = 0; i < myObstacles.length; i++) {
      myObstacles[i].y += 2;
      myObstacles[i].update();
      if (myObstacles[i].crashWith(myObstacles[i]) === true) {
        alert("wall");
        myObstacles = [];
        board.frames = 0;
        startGame();
      }
      if (myObstacles[i].y > 600) {
        myObstacles.splice(i,1);
        console.log(myObstacles.length);
      }
    }
  }

  function drawCar() {
    ctx.drawImage(carImg, car.x, car.y, car.carWidth, car.carHeight);
  }
};
