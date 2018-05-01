window.onload = function() {

  function interval(){
    setInterval(updateCanvas, 50);
  }
  document.getElementById("start-button").onclick = function() {
    interval();
    startGame();
  };

  function startGame() {
    //console.log("Starting the game");
    createGameBoard();
    drawCar();
  }

  var theCanvas = document.getElementById("game-board");
  var ctx = theCanvas.getContext("2d");

  function createGameBoard(){
    //console.log("creating the game");

    ctx.fillStyle = "green";
    ctx.fillRect(0,0,500,600);
    ctx.fillStyle = "gray";
    ctx.fillRect(50,0,400,600);

    ctx.fillStyle = "white";
    ctx.fillRect(60,0,10,600);
    ctx.fillRect(430,0,10,600);

    ctx.lineWidth = "10";
    ctx.setLineDash([40, 20]);
    ctx.strokeStyle = "white";
    ctx.moveTo(245, 600);
    ctx.lineTo(245, 0);
    ctx.stroke();

    ctx.font = "50px Helvetica";
    ctx.fillStyle = "pink";
    ctx.fillText("Score: "+board.score,0,50);

  }

  var carImage = new Image();
  carImage.src = "images/car.png";

  var car = {
    width: 50,
    height: 80,
    x: 220,
    y: 520,
    moveLeft: function(){
      if(this.x > 60){
        this.x -= 10;
      }
    },
    moveRight: function(){
      if(this.x < 400){
        this.x += 10;
      }
    }
  }

  function drawCar(){
    ctx.drawImage(carImage, car.x, car.y, car.width, car.height);
  }

  document.onkeydown = function(e){
    if(e.keyCode == 37){
      car.moveLeft();
    } else if(e.keyCode == 39){
      car.moveRight();
    } else {
      console.log("What are you doing?")
    }
    createGameBoard();
    drawCar();
    for(var i= 0; i < myObstacles.length; i ++){
      myObstacles[i].createObstacle();
    }
  }

  var myObstacles = [];
  var board = {
    score:0,
    frames:0
  }

  function Obstacle(x, y, width, height){
    this.y = y;
    this.x = x;
    this.width = width;
    this.height = height;
    this.createObstacle = function(){
      ctx.fillStyle = "yellow";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    this.left = function(){
      return this.x;
    }
    this.right = function(){
      return this.x + this.width;
    }
    this.top = function(){
      return this.y;
    }
    this.bottom = function(){
      return this.y + height;
    }
    this.checkCollision = function(obstacle){
      return !((car.y + 10 > obstacle.bottom()) ||
      (car.x + 50 < obstacle.left()) ||
      (car.x + 50 > obstacle.right()))
    }
  }

  function updateCanvas(){
    ctx.clearRect(0,0,500,600);
    createGameBoard();
    drawCar();
    board.frames ++;
    if(board.frames % 60 == 1){
      obstackleX = 60 + Math.floor(Math.random()*300);
      obstackleY = 0;
      obstackleWidth = 100;
      obstackleHeight = 20;
      myObstacles.push(new Obstacle(obstackleX, obstackleY, obstackleWidth, obstackleHeight));  
    }

    for(var i= 0; i < myObstacles.length; i ++){
      myObstacles[i].y += 10;
      myObstacles[i].createObstacle();

      if(myObstacles[i].checkCollision(myObstacles[i]) === true){
        // console.log("collision detected");
        alert("Crashed!");
        board.score = 0;
        board.frames = 0;
        myObstacles = [];
        startGame();
      }

      if(myObstacles[i].y > 600){
        myObstacles.splice(i, 1);
        board.score++;
      }
    }
  }
};