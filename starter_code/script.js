window.onload = function () {
  document.getElementById("start-button").onclick = function () {


    startGame();
  };
  
  function startGame() {
    crreateObstacleArray();
    drawEverything()
  }
};


const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
const width = $canvas.width;
const height = $canvas.height;

function drawEverything(timestamp) {
  console.log(timestamp)
  clearCanvas()
  drawMap()
  player.drawCar()
  for (let i = 0 ; i < obst.length; i++){
    drawObstacles(timestamp, i)
  }
  window.requestAnimationFrame(timestamp => drawEverything(timestamp));
}

function clearCanvas() {
  context.clearRect(0, 0, width, height)
}

function drawMap() {
  context.fillStyle = 'grey'
  context.fillRect(0, 0, width, height)

  context.fillStyle = 'green'
  context.fillRect(0, 0, 40, height)
  context.fillRect(width - 40, 0, 40, height)
  context.fillStyle = 'white'
  context.fillRect(50, 0, 10, height)
  context.fillRect(width - 60, 0, 10, height)

  /* for (let i = -620; i < HEIGHT; i += 50) {
    this.context.strokeStyle = 'white';
    this.context.lineWidth = 5;
    this.context.beginPath();
    this.context.moveTo(197, i - this.y);
    this.context.lineTo(197, i + 30 - this.y);
    this.context.stroke();
    this.context.closePath();
  } */

  // dashed lines
  /* context.strokeStyle = 'white'
  context.lineWidth = 5
  context.beginPath();
  context.moveTo(width / 2, 0);
  context.setLineDash([20, 20]);
  context.lineTo(width / 2, height);
  context.stroke(); */

}

let boundaryLeft = 65;
let boundaryRight = 385;


class Player {
  constructor() {
    this.positionX = (width / 2) - 25
    this.positionY = height - 90
    this.image = new Image();
    this.image.src = './images/car.png';
      context.drawImage(this.image, this.positionX, this.positionY, 50, 70);
    
  }
  /* moveUp(){
    if (this.positionY >= 55) {
      this.positionY -= 10
    }
  }

  moveDown(){
    if (this.positionY <= height) {
      this.positionY += 10
    }
  } */

  moveLeft() {
    if (this.positionX >= boundaryLeft) {
      this.positionX -= 10
    }
  }

  moveRight() {
    if (this.positionX <= boundaryRight) {
      this.positionX += 10
    }
  }
  drawCar() {
    context.drawImage(this.image, this.positionX, this.positionY, 50, 70);

  }

}

let player = new Player();



window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  //event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      player.moveLeft();
      drawEverything();
      console.log(player.position)
      break;
    case 39:
      player.moveRight();
      drawEverything();
      console.log(player.position)
      break;
    /* case 40:
      player.moveDown();
      drawEverything();
      break;
    case 38:
      player.moveUp();
      drawEverything();
      break; */
  }
});


let obst = []
function crreateObstacleArray(){
  let obstMaxwidth = 180;
  let borderRight = 250;
  //let maxCanvas = 320;
  let rndmObstWidth = Math.floor((Math.random() * obstMaxwidth) + 1);
  let rndmWidth = Math.floor((Math.random() * borderRight) + 1);
  //let marginWidth = maxCanvas - borderRight;
  //let obstEndPoint = rndmWidth + rndmObstWidth;
  for (let i = 0 ; i <= 50; i++ ){
    //if (obst.length <= 50) {
      //console.log(obst.length)
      obst.push([rndmWidth, rndmObstWidth]);
   // } else {
   //   obst.shift();
   // }
  }
}

function drawObstacles(timestamp, i) {
  /* let rndmObstWidth = 146
  let rndmWidth = 146  */

 

  /*    if(obstEndPoint> borderRight){
     rndmObstWidth = (maxCanvas - obstEndPoint) - marginWidth
   }
   */
   //for( let i = 0 ; i < obst.length; i++){
     console.log(i)

      context.fillStyle = 'darkred';
      context.save();
      context.translate(boundaryLeft, 0);
      context.fillRect(obst[i][0]/* rndmWidth */, timestamp /5, obst[i][1]/* rndmObstWidth */, 50);
      context.restore();
      //console.log('progress', timestamp);
      //console.log(rndmObstWidth);
      //console.log(rndmWidth);
      //console.log(timestamp)
  // }
}








