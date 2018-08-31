var MAX_HEIGHT = 800;
var MAX_WIDTH = 600;


window.onload = function() {
  var canvas = document.getElementById('board');
  var ctx = canvas.getContext('2d');
  var frames = 0;
  

  var car = {
    x: 275,
    y: 650,
    moveLeft:  function() { this.x -= 15 },
    moveRight: function() { this.x += 15 },
    left: function() { return this.x },
    right: function() { return (this.x + this.width) },
    top: function() { return this.y },
    bottom: function() { return this.y + (this.height) },

    crashWith: function(obstacle) {
      return !((this.bottom() < obstacle.top())    ||
              (this.top()    > obstacle.bottom()) ||
              (this.right()  < obstacle.left())   ||
              (this.left()   > obstacle.right()))
  }
  }

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: car.moveLeft(); drawBoard(); drawCar(car); break;
      case 39: car.moveRight(); drawBoard(); drawCar(car); break;
    }
    //
  }
  var myObstacles = [];

  function updateCanvas() {
    ctx.clearRect(0,0, MAX_WIDTH,MAX_HEIGHT);
    drawBoard();
    drawCar(car);
    frames +=1;
    if (frames % 180 === 0) {
    var y = 0;
    minWidth = 40;
    maxWidth = 300;
    minWidthPos = 70;
    maxWidthPos = 230;
    width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
    widthPos = Math.floor(Math.random()*(maxWidthPos-minWidthPos+1)+minWidthPos);
    myObstacles.push(new Obstacle(width, 30, widthPos, y));
    }
    for (var i = 0; i < myObstacles.length; i++) {
      myObstacles[i].y += 1;
      myObstacles[i].update();
    }
    /*
    var crashed = myObstacles.some(function(obstacle) {
      return car.crashWith(obstacle)
    })

    if (crashed) {
      console.log('QUIETORRRRRRRRRRRRR');
      //clearInterval(interval);
    }
    */

  };

  function drawBoard(){
    ctx.rect(0, 0, MAX_WIDTH, MAX_HEIGHT);
    ctx.stroke();
    ctx.fillStyle = 'rgb(0,153,0)';
    ctx.fillRect(0, 0, MAX_WIDTH, MAX_HEIGHT);
    ctx.fillStyle = 'rgb(128,128,128)';
    ctx.fillRect(50, 0, MAX_WIDTH - 100, MAX_HEIGHT);
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(60, 0, 10, MAX_HEIGHT);
    ctx.fillStyle = 'rgb(255,255,255)';
    ctx.fillRect(530, 0, 10, MAX_HEIGHT);

    for (i = 5; i < MAX_HEIGHT; i+=50){
      ctx.fillStyle = 'rgb(255,255,255)';
      ctx.fillRect(295, i, 10, 30);
    }
  };

  function drawCar(car) {

    var imgCar = new Image();
    imgCar.src = 'images/car.png'; 
    imgCar.onload = function() {
      ctx.drawImage(imgCar, car.x, car.y, imgCar.width * 0.31, imgCar.height * 0.31);
    }
  };

  function Obstacle(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function(){
      ctx = ctx;
      ctx.fillStyle = 'rgb(204, 0, 0)'
      ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    this.left   = function() { return this.x                 };
    this.right  = function() { return (this.x + this.width)  };
    this.top    = function() { return this.y                 };
    this.bottom = function() { return this.y + (this.height) };

    this.crashWith = function(obstacle) {
      return !((this.bottom() < obstacle.top())    ||
              (this.top()    > obstacle.bottom()) ||
              (this.right()  < obstacle.left())   ||
              (this.left()   > obstacle.right()))
    }
  };

  function startGame() {
    drawBoard();
    drawCar(car);
    var interval = setInterval(updateCanvas, 10);
    //clearInterval(interval);

  };

  
  //START BUTTON EVENT
  document.getElementById("start-button").onclick = function() {
    startGame();
    

  };
}


