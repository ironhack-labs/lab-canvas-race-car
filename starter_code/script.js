window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
  function startGame() {
    drawEverything()
  }
};


const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
const width = $canvas.width;
const height = $canvas.height;

function drawEverything(){
  clearCanvas()
  drawMap()
  player.drawCar()
  drawObstacles()
}

function clearCanvas (){
  context.clearRect(0, 0, width, height)
}

function drawMap(){
  context.fillStyle = 'grey'
  context.fillRect(0, 0, width, height)
  
  context.fillStyle = 'green'
  context.fillRect(0, 0, 40, height )
  context.fillRect(width-40, 0, 40, height )
  context.fillStyle = 'white'
  context.fillRect(50, 0, 10, height )
  context.fillRect(width -60, 0, 10, height )
  context.strokeStyle = 'white'
  context.lineWidth = 5
  context.beginPath();
  context.moveTo(width/2, 0);
  context.setLineDash([20, 20]);
  context.lineTo(width/2, height);
  context.stroke();
  
  }

let boundaryLeft = 65;
let boundaryRight = 385;
  
  
  class Player {
    constructor() {
      this.positionX = (width / 2) - 25
      this.positionY = height - 90 
    }
    moveUp(){
      if (this.positionY >= 55) {
        this.positionY -= 10
      }
    }

    moveDown(){
      if (this.positionY <= height) {
        this.positionY += 10
      }
    }

    moveLeft() {
      if(this.positionX >= boundaryLeft ){
      this.positionX -= 10
      }
    }
    
    moveRight() {
      if(this.positionX <= boundaryRight){
      this.positionX += 10
      } 
    }
    drawCar(){
      const IMG_URL = './images/car.png'
      const image = new Image();
      image.src = IMG_URL;
      
      image.addEventListener('load', () => {
        context.drawImage(image, this.positionX, this.positionY , 50, 70);
      });
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


function drawObstacles(){
  /* let rndmObstWidth = 146
  let rndmWidth = 146  */ 
  let rndmObstWidth = Math.floor((Math.random() * 180) +1);
  let rndmWidth = Math.floor((Math.random() * 250) +1);
  
/*   if(250 -rndmWidth < rndmObstWidth){
    rndmObstWidth -= rndmWidth
  }
 */
  context.fillStyle = 'darkred'
  context.save()
  context.translate(boundaryLeft, 0)
  context.fillRect(rndmWidth, 0, rndmObstWidth, 50)
  context.restore()
  console.log(rndmObstWidth)
  console.log(rndmWidth)
}







