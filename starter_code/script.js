var MAX_HEIGHT = 800;
var MAX_WIDTH = 600;

function RaceCanvas() {
  this.ctx = document.getElementById('board').getContext('2d');
};//V1



RaceCanvas.prototype.drawBoard = function (){
  this.ctx.rect(0, 0, MAX_WIDTH, MAX_HEIGHT);
  this.ctx.stroke();
  this.ctx.fillStyle = 'rgb(0,153,0)';
  this.ctx.fillRect(0, 0, MAX_WIDTH, MAX_HEIGHT);
  this.ctx.fillStyle = 'rgb(128,128,128)';
  this.ctx.fillRect(50, 0, MAX_WIDTH - 100, MAX_HEIGHT);
  this.ctx.fillStyle = 'rgb(255,255,255)';
  this.ctx.fillRect(60, 0, 10, MAX_HEIGHT);
  this.ctx.fillStyle = 'rgb(255,255,255)';
  this.ctx.fillRect(530, 0, 10, MAX_HEIGHT);

  for (i = 5; i < MAX_HEIGHT; i+=50){
    this.ctx.fillStyle = 'rgb(255,255,255)';
    this.ctx.fillRect(295, i, 10, 30);
  }//V1
}

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
   } //V2

  RaceCanvas.prototype.drawCar = function(side) {

    var imgCar = new Image();
    imgCar.src = 'images/car.png';
    var self = this;

    if (side == 'l'){
      imgCar.onload = function() {
        self.ctx.drawImage(imgCar, 275 -25, 650, imgCar.width * 0.31, imgCar.height * 0.31);
      };

    } else if (side == 'd') {
      imgCar.onload = function() {
        self.ctx.drawImage(imgCar, 275 +25, 650, imgCar.width * 0.31, imgCar.height * 0.31);
      };

    } else {
      imgCar.onload = function() {
        self.ctx.drawImage(imgCar, 275, 650, imgCar.width * 0.31, imgCar.height * 0.31);
      };
    }
    

  } //V1

  function drawCar() {

    var imgCar = new Image();
    imgCar.src = 'images/car.png';
    var self = this;
    
      imgCar.onload = function() {
        ctx.drawImage(imgCar, 275, 650, imgCar.width * 0.31, imgCar.height * 0.31);
      };
    } //V2
    

  RaceCanvas.prototype.updateCanvas = function (side) {
    this.ctx.clearRect(0,0, MAX_WIDTH,MAX_HEIGHT);
    this.drawCar(side);
  }

  function updateCanvas() {
    ctx.clearRect(0,0, MAX_WIDTH,MAX_HEIGHT);
    drawCar();
  }


/*
function startGame() {
  /*
  var race = new RaceCanvas();
    race.drawBoard();
    race.drawCar();
    V1
  *//*
    drawBoard();
    drawCar(); 
    
    race.onkeydown = function(e) {
      console.log('!');
      if (e.keyCode == 37) {
        var move = 'l';
      }
      if (e.keyCode == 39) { 
        var move = 'r';
      }
      race.updateCanvas(move);
    }
  


};*/

window.onload = function() {
  var canvas = document.getElementById('board');
  var ctx = canvas.getContext('2d');
  var car = {
    x: 275,
    y: 650,
    moveLeft:  function() { this.x -= 10 },
    moveRight: function() { this.x += 10 },
  }
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: car.moveLeft(); drawBoard(); drawCar(car); break;
      case 39: car.moveRight(); drawBoard(); drawCar(car); break;
    }
    //updateCanvas();
  }
  function updateCanvas() {
    ctx.clearRect(0,0, MAX_WIDTH,MAX_HEIGHT);
  }
  function startGame() {
    /*
    var race = new RaceCanvas();
      race.drawBoard();
      race.drawCar();
      V1
    */
      drawBoard();
      drawCar(car); 
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
 }

 function drawCar(car) {

  var imgCar = new Image();
  imgCar.src = 'images/car.png';
  var self = this;
  
    imgCar.onload = function() {
      ctx.drawImage(imgCar, car.x, car.y, imgCar.width * 0.31, imgCar.height * 0.31);
    };
  }

  document.getElementById("start-button").onclick = function() {
    startGame();

  
    


};
}


