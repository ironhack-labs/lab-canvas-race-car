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
  drawMap()
  player.drawCar()
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
  
  
  class Player {
    constructor() {
      this.position = (width / 2) - 25
    }
    moveLeft() {
      if(this.position >= 65 ){
      this.position -= 10
      }
    }
    
    moveRight() {
      if(this.position <= 385){
      this.position += 10
      } 
    }
    drawCar(){
      const IMG_URL = './images/car.png'
      const image = new Image();
      image.src = IMG_URL;
      
      image.addEventListener('load', () => {
        context.drawImage(image, this.position, height -90 , 50, 70);
      });
    }
    
  }
  
  let player = new Player();
  
  
  
  window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  

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
  }
});


