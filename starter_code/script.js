const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth / 2;
canvas.height = window.innerHeight;
canvasWidth = canvas.width;
canvasHeight = canvas.height;


// class Car {
//   // Initial x and y to pass 
//   // X: 23.2/ 50*canvasWidth, Y: 17/20*canvasHeight
//   // imgSrc:  "./images/car.png"
//   constructor(x, y, imgSrc) {
//     this.x = 23.2 / 50 * window.innerWidth/2;
//     this.y = 17 / 20 * window.innerHeight;
//   }

//   moveLeft() {
//     this.x--;
//   }

//   moveRight() {
//     this.x++;
//   }
// }

let car = {
  x : 23.2 / 50 * window.innerWidth/2,
  y : 17 / 20 * window.innerHeight,
  moveLeft: function() {this.x--},
  moveRight: function() {this.x++}
}

function drawGameBoard() {
  // Colors
  asphaltGray = "#808080";
  grassGreen = "#008100";
  // markerWhite = "#F3F3F3";

  ctx.fillStyle = asphaltGray;

  // Draws the main road
  ctx.fillRect((9 / 72 * canvasWidth), 0, 27 / 36 * canvasWidth, canvasHeight);

  // Draws the curb
  ctx.fillRect(canvasWidth / 12, 0, canvasWidth / 36, canvasHeight);
  ctx.fillRect((32 / 36 * canvasWidth), 0, canvasWidth / 36, canvasHeight);

// Draws the grass
  ctx.fillStyle = grassGreen;
  ctx.fillRect(0, 0, canvasWidth / 12, canvasHeight);
  ctx.fillRect((11 / 12 * canvasWidth), 0, canvasWidth / 12, canvasHeight);
}

function drawRoadMarkers() {
  markerWhite = "#F3F3F3";

  ctx.strokeStyle = markerWhite;
  ctx.lineWidth = canvasWidth/130;
  // ctx.lineDashOffset = offSet;
  ctx.setLineDash([canvasHeight/30,canvasWidth/40]);
  ctx.moveTo((canvasWidth/2), 0);
  ctx.lineTo((canvasWidth/2), canvasHeight);
  ctx.stroke();
}

function drawCar(){
  img = new Image();
  img.src = "./images/car.png";

  img.onload = function () {
    ctx.drawImage(img, car.x, car.y, 50, 100);
  }
}

function updateCanvas(){
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawGameBoard();
  drawRoadMarkers();
  drawCar();
}

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  document.onkeydown = function(e){
    switch(e.keyCode){
      case 37: 
        car.moveLeft(); 
        break;
      case 39: 
        car.moveRight();
        break;
    }
    updateCanvas();
  }

  drawGameBoard();
  drawRoadMarkers();
  drawCar();

  function startGame() {
    updateCanvas();
  }
};


