var car = {
  position: 140,
  move: function() {
    document.onkeydown = function(event) {
      var key = event.keyCode;
      if (car.position > 55) {
        if (key === 37) {
          car.position -= 6;
        }
      }
      if (car.position < 388) {
        if (key === 39) {
          car.position += 6;
        }
      }
    };
  }
};
var myGameArea = {
  canvas: document.createElement("canvas"),
  lineDashMove: -60,
  lineDashPosition: 1000,
  counter: 0,
  clear: function() {
    this.context.clearRect(
      0,
      0,
      myGameArea.canvas.width,
      myGameArea.canvas.height
    );
  },
  move: function() {
    if (myGameArea.lineDashMove < 0) {
      myGameArea.lineDashMove += 1;
    } else {
      myGameArea.lineDashMove = -63;
    }
  },
  start: function() {
    this.canvas.width = 500;
    this.canvas.height = 1000;
    this.context = this.canvas.getContext("2d");
    var nodoCanvas = document.querySelector("#game-board");
    nodoCanvas.insertBefore(this.canvas, nodoCanvas.childNodes[0]);
  },
  stop: function() {
    clearInterval(this.interval);
  }
};
var obstacleArray = [];
firstObstacles();
var puntuacion = 0;
function Obstacle(x, width) {
  this.x = x;
  this.y = 0;
  this.width = width;
  this.height = 20;
  this.update = function() {
    ctx = myGameArea.context;
    ctx.fillStyle = "rgb(150, 0, 0)";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
}


window.onload = function() {
  document.getElementById("start-button").onclick = function(event) {
   firstObstacles()
    myGameArea.start();
    car.move();
  var interavalo =  setInterval(function() {
      myGameArea.clear();
      drawGameBoard();
      drawCar();
      myGameArea.move();
      myGameArea.counter++;
      newObstacles()
      obstaclesUpdate()
      points()
     if (crash()=== true){clearInterval(interavalo);}
    }, 5);
  }; 
}

function drawGameBoard() {
  myGameArea.context.fillStyle = "rgb(0, 135, 0)";
  myGameArea.context.fillRect(
    0,
    0,
    myGameArea.canvas.width,
    myGameArea.canvas.height
  );
  myGameArea.context.fillStyle = "rgb(127, 127, 127)";
  myGameArea.context.fillRect(
    50,
    0,
    myGameArea.canvas.width - 100,
    myGameArea.canvas.height
  );
  myGameArea.context.fillStyle = "rgb(255, 255, 255)";
  myGameArea.context.fillRect(
    70,
    0,
    myGameArea.canvas.width - 140,
    myGameArea.canvas.height
  );
  myGameArea.context.fillStyle = "rgb(127, 127, 127)";
  myGameArea.context.fillRect(
    90,
    0,
    myGameArea.canvas.width - 180,
    myGameArea.canvas.height
  );
  myGameArea.context.beginPath();
  myGameArea.context.strokeStyle = "rgb(255, 255, 255)";
  myGameArea.context.lineWidth = 10;
  myGameArea.context.setLineDash([40, 25]);
  myGameArea.context.moveTo(250, myGameArea.lineDashMove);
  myGameArea.context.lineTo(250, myGameArea.lineDashPosition);
  myGameArea.context.stroke();
}
function drawCar() {
  var img = new Image();
  img.onload = function() {
    myGameArea.context.drawImage(img, car.position, 860, 60, 120);
  };
  img.src = "./images/car.png";
}
function points(){

if (obstacleArray[2].y=== 1020){
  puntuacion+=10;
  }
  myGameArea.context.font = '60px serif';
  myGameArea.context.fillStyle = 'black';
  myGameArea.context.fillText('Score: '+puntuacion, 140, 50);
}

function firstObstacles(){
  for(var i=0; i<4; i++){
  xmin = 55;
  xmax = 388;
  minWidth = 40;
  maxWidth = 240;
  width = Math.floor(
    Math.random() * (maxWidth - minWidth + 1) + minWidth
  );
  x = Math.floor(Math.random() * (xmax - width  + 1) + xmin);
  obstacleArray.unshift(new Obstacle(x, width));}
}
function newObstacles(){
if (myGameArea.counter % 500 === 0) {
  xmin = 55;
  xmax = 388;
  minWidth = 40;
  maxWidth = 240;
  width = Math.floor(
    Math.random() * (maxWidth - minWidth + 1) + minWidth
  );
  x = Math.floor(Math.random() * (xmax - width  + 1) + xmin);
  obstacleArray.unshift(new Obstacle(x, width));
}
}

function obstaclesUpdate(){
  obstacleArray[0].update();
      obstacleArray[0].y += 1;
      obstacleArray[1].update();
      obstacleArray[1].y += 1;
      obstacleArray[2].update();
      obstacleArray[2].y += 1;
      obstacleArray[3].update();
      obstacleArray[3].y += 1;
      if (obstacleArray.length > 4) {
        obstacleArray.pop();
       
      }
}

function crash(){


}