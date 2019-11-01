const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let interval;
let frames = 0;
let obstacles = [];
let scoreCount = 0;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  function startGame() {
    interval = setInterval(update, 1000 / 60);
  }
};

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function generateObstacle() {
  if(frames % 100 === 0){
    const randomPos = Math.floor(Math.random() * canvas.width) - 50;
    const obj = new Obstacle(randomPos);
    obstacles.push(obj);
  }
}

function score(){
  for(let i = 0; i < 1; i++){
  if(frames % 100 === 0){
      scoreCount++;
    }
  }

}

function points() {
  ctx.font = '20px Arial'
  ctx.fillStyle = 'black'
  ctx.fillText(`Score: ${scoreCount}`, 80, 680)
}
 
function drawObstacle() {
  obstacles.forEach(obj => obj.draw());
}

function checkColitions() {
  obstacles.forEach((obj, i) => {
    if (car.isTouching(obj)) {
      car.hp--;
    }
  })
}

function gameOver () {

  if (car.hp === 0) {
    clearInterval(interval);
    ctx.font = '60px Arial'
    ctx.fillStyle = 'black'
    ctx.fillText('Game Over', 70, canvas.height / 2 - 10)
  }
}

function update() {
  frames++;
  clearCanvas();
  board.draw();
  car.draw();
  car.x += car.vx;
  checkColitions();
  generateObstacle();
  drawObstacle();
  gameOver();
  score();
  points();
;}






