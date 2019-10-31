const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
const player = new Player(180, 180); 
// const obsticles = new Obsticle(); 

//grid 
function drawGrid() { 
context.fillStyle = "green";
context.fillRect(0, 0, 35, 600);
context.fillRect(370, 0, 35, 600);

context.fillStyle = "white";
context.fillRect(45, 0, 10, 600);
context.fillRect(350, 0, 10, 600);

context.fillStyle = "white";
for(let i = 0; i < 600; i++) { 
  context.fillRect(200, 1 * i, 10, 20);
} 
} 




//car 
function drawPlayer(player) {  
  const IMAGE_URL = '/starter_code/images/car.png'
  const image = new Image();
  image.src = IMAGE_URL;
  console.dir(image);
  image.addEventListener('load', () => {
  const imageHeight = image.height;
  const imageWidth = image.width;
  const size = 1;
  context.drawImage(image, player.col, player.row, 50, 60);
  });
}

// function drawObsticle (obsticle) { 
//   context.fillStyle = "red";
//   context.fillRect(0, 0, 55, 55);
// }


window.addEventListener('keydown', (event) => {
  event.preventDefault();
  switch (event.keyCode) {
    case 39:
      player.moveRight()
      context.clearRect(0, 0, 500, 500); 
      drawGrid()
      drawPlayer()
      // console.log('right');
      startGame();
      break;
    case 37: 
      player.moveLeft()
      context.clearRect(0, 0, 500, 500);
      drawGrid()
      drawPlayer()
      // console.log('left');
      startGame();
      break;
  }
});


function startGame() {
    drawGrid(); 
    drawPlayer(player); 
    drawObsticle(obsticle)
  }

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    drawGrid();
    startGame();
  }}; 