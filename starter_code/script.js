const $canvas = document.getElementsByTagName('canvas')[0];
const canvasContext = $canvas.getContext('2d');
const score = document.getElementById('score');
/******** OBJECTS *********/
const car = new Player();
const obstacles = [];

for (let i = 0; i < 100; i++) {
  const obstacle = new Obstacle(200 + i * -250);
  obstacles.push(obstacle);
}

/*
* x - coordenada X onde começa a linha 
* y - coordenada Y onde começa a linha
* a - coordenada X até onde vai a linha
* b - coordenada Y até onde vai a linha
*/
function drawLine(canvasContext, x, y, a, b, color){
  canvasContext.strokeStyle = color;
  canvasContext.beginPath();
  canvasContext.setLineDash([]);
  canvasContext.moveTo(x, y);
  canvasContext.lineTo(a, b);
  canvasContext.stroke();
  canvasContext.closePath();
}


function drawBackground(){
  canvasContext.fillStyle = 'grey';
  canvasContext.fillRect(0, 0, $canvas.width, $canvas.height); 
  canvasContext.lineWidth = 80;

  drawLine(canvasContext,0,0,0, $canvas.height, 'green');
  drawLine(canvasContext,$canvas.width,0,$canvas.width, $canvas.height, 'green');

  canvasContext.lineWidth = 8;

  drawLine(canvasContext,60,0,60, $canvas.height, 'white');
  drawLine(canvasContext,$canvas.width - 60,0,$canvas.width - 60, $canvas.height, 'white');

  canvasContext.lineWidth = 4;
  canvasContext.beginPath();
  canvasContext.setLineDash([15, 20]);
  canvasContext.moveTo($canvas.width/2, 0);
  canvasContext.lineTo($canvas.width/2, $canvas.height);
  canvasContext.stroke();
}

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
  };
};

function startGame() {  
  drawBackground();
  car.setInitialPos();  
  for (let obstacle of obstacles) {
    obstacle.paint();
  }
  loop();
}

function runLogic () {
  for (let obstacle of obstacles) {
    obstacle.runLogic(car);
    checkCollision(obstacle);
  }
}

function cleanCanvas () {
  canvasContext.clearRect(0, 0, canvasContext.canvas.width, canvasContext.canvas.height);
}

function paint() {
  cleanCanvas();
  drawBackground();
  car.draw();

  for (let obstacle of obstacles) {
    obstacle.paint();
  }
}

let santiScore = 0

function checkCollision (obstacle) {
  const carX = car.getPosX();
  const carY = car.getPosY();
  const carWidth = car.width;
  const carHeight = car.height;

  const obstacleX = obstacle.positionX;
  const obstacleY = obstacle.positionY;
  const obstacleWidth = obstacle.width;
  const obstacleHeight = obstacle.height;
 
  if(carY === obstacleY){     
    santiScore++;
    console.log(car.score);
    score.innerHTML = ' ';
    score.innerHTML = santiScore;
  }

  if (carX + carWidth > obstacleX &&
    carX < obstacleX + obstacleWidth &&
    carY + carHeight > obstacleY &&
    carY < obstacleY + obstacleHeight){
      car.gameRunning = false;
    }
}

function loop(timestamp) {
  runLogic();
  paint();

  if (car.gameRunning) {
    window.requestAnimationFrame(loop);
  }
}


