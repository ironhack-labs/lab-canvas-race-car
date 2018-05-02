window.onload = function() {

  function interval(){
    setInterval(updateCanvas, 50);
  }

  document.getElementById("start-button").onclick = function() {
    interval();
    startGame();
  };

  function startGame() {
    //console.log("starting the game")
    createGameBoard();
    drawCar()
  }

  var theCanvas = document.getElementById("game-board");
  var ctx = theCanvas.getContext("2d");

  function createGameBoard(){
    //console.log("creating the game")
    ctx.fillStyle = "green";
    ctx.fillRect(0,0,500,600);
    ctx.fillStyle = "gray";
    //            x  y  width heigth
    //            |  |    |     |
    ctx.fillRect(50, 0,  400,  600);

    ctx.fillStyle = "white";
    ctx.fillRect(60,0,10,600);
    //     (500-50-10-10)  y  width heigth
    //            ^        ^    ^     ^ --------> height of white line
    //            |        |    |     |
    ctx.fillRect(430,      0,   10,  600);

    // dashed middle line
    ctx.lineWidth = "10";
    //           height of the line
    //               |   |------------> empty space between lines
    ctx.setLineDash([40,20]);
    ctx.strokeStyle = "white";
    // canvasWidth  lineWidth
    //       |        | 
    // 245=(500   -   10)/2   
    ctx.moveTo(245,600);
    ctx.lineTo(245,0);
    ctx.stroke();
    
    //score:
    ctx.font = "40px Helevetica";
    ctx.fillStyle = "blue";
    //                         score       x   y
    ctx.fillText("Score: "+ board.score,   0, 50);
  }

  var carImage = new Image();
  carImage.src = "images/car.png";

  var car = {
    width: 50,
    heigth :80,
    // 220 = (245-(50/2))
    x: 220,
    // 520 = canvas.heigth(600) - car.height(80)
    y: 520,
    moveLeft : function(){
      //console.log("x before: ", this.x)
      if(this.x > 60){
        this.x -= 10;
      }
      //console.log("x after: ", this.x)
    },
    moveRight : function(){
      //console.log("x before: ", this.x)
      if(this.x < 390){
        this.x += 10;
      }
      //console.log("x after: ", this.x)
    }
  }

  function drawCar(){
    ctx.drawImage(carImage, car.x,car.y,car.width,car.heigth);
  }

  var myObstacles =[]
  var board = {
    score: 0,
    frames: 0
  }

  document.onkeydown = function(e){
    if(e.keyCode === 37){
      //console.log("going left")
      car.moveLeft();
    }else if(e.keyCode === 39){
      //console.log("going right");
      car.moveRight();
    }else {
        console.log("what are you doing?");
    }
    // call the functions to prevent blanking when clicks keys
    createGameBoard();
    drawCar();
    for (var i=0; i < myObstacles.length; i++){
      myObstacles[i].craeteObstacle();
      myObstacles[i].y += 10;
    }
  }

  function Obstacle(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.craeteObstacle = function(){
      ctx.fillStyle = "red";
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    this.left = function(){
      return this.x;
    }
    this.rigth = function(){
      return this.x + this.width;
    }
    this.top = function(){
      return this.y;
    }
    this.bottom = function(){
      return this.y + this.height;
    }

    this.checkCollision = function(obstacle){
      return !((car.y > obstacle.bottom()) || 
      (car.x + 40 < obstacle.left()) ||
      (car.x + 40 > obstacle.rigth()))
    }
  }

  function updateCanvas(){
    ctx.clearRect(0,0,500,600);
    createGameBoard();
    drawCar();
    board.frames ++;
    // give me a new obstacle every 60 frames and start now
    // if this was equal to 0, we would have to wait 60 frames
    // to see our first obstacle
    if(board.frames % 60 === 1){
    obstacleX = Math.floor(Math.random() * 300);
    obstacleY = 0;
    obstacleWidth = 100;
    obstacleHeight = 20;
    myObstacles.push(new Obstacle(obstacleX,obstacleY,obstacleWidth,obstacleHeight));
    }

    for (var i=0; i < myObstacles.length; i++){
      //console.log(myObstacles);
      myObstacles[i].craeteObstacle();
      myObstacles[i].y += 10;

      if(myObstacles[i].checkCollision(myObstacles[i]) === true){
        //console.log("collision detected");
        setTimeout(function(){
          alert("Crashed");
        }, 30);
        board.score = 0;
        board.frames = 0;
        myObstacles = [];
        startGame();
      }

      if(myObstacles[i].y > 600){
        myObstacles.splice(i, 1);
        board.score ++;
      }
    }
  }

};
