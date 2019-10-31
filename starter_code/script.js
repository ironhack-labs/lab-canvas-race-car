window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    drawGrid();
    drawPlayer();
    drawObstacles();
  }
};

const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
const width = $canvas.width;
const height = $canvas.height;


function drawGrid() {
  context.fillStyle = "grey";
  //console.log("ko")
  context.fillRect(0, 0, 420, 588);
  context.fillStyle = "green";
  context.fillRect(0, 0, 45, 588);
  context.fillRect(375, 0, 45, 588);
  context.fillStyle = "white";
  context.fillRect(49, 0, 12, 588);
  context.fillRect(357, 0, 12, 588);
  //const pat = context.
  for (i = 20; i < height; i += 50) {
    context.lineWidth = 10;
    context.strokeStyle = "white";
    context.beginPath();
    context.moveTo(207, i);
    context.lineTo(207, i + 20);
    context.stroke();
    context.closePath();
  }
}

class Player {
  constructor() {
    this.col = 182;
    this.row = 480;
  }
  moveLeft() {
    if (player.col>0){
    this.col -= 12;
  }}
  moveRight() {
    if (player.col<370){
    this.col += 12;
  }}
}
const IMAGE_URL = "images/car.png";
const image = new Image();
image.src = IMAGE_URL;
const player = new Player();

function drawPlayer() {
  context.drawImage(image, player.col, player.row, 50, 90)
}


window.addEventListener('keydown', (event) => {
  event.preventDefault();
  
  switch (event.keyCode) {
    case 37:
      
      player.moveLeft()
      context.clearRect(0, 0, 420, 588);
      drawGrid()
      drawPlayer()
      break;

    case 39:
      
      player.moveRight()
      context.clearRect(0, 0, 420, 588);
      drawGrid()
      drawPlayer()
      break;
  }
  
});

class Obstacle {
  constructor(){
    this.col = Math.floor(Math.random() * (540 - 40) + 40)
    this.row = Math.floor(Math.random() * (90 - 20) + 20);
  }
   /* setRandomPosition(min, max) {
      let randomCol = Math.floor(Math.random() * (max - min) + min);
      let randomRow = Math.floor(Math.random() * (max - min) + min);
      this.col = randomCol;
      this.row = randomRow;
    }
    */
}


function drawObstacles () {
  for (i = 20; i < width; i += 50){
    context.fillStyle = "brown";
    context.fillRect(obstacle.col,this.row, 90, 20)
  }
}

const obstacle = new Obstacle();