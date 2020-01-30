const $canvas = document.querySelector('canvas');
const ctx = $canvas.getContext('2d');

let gameIsRunning = true;
let car1 = new Car();

//game over
let gameOver = new Image();
gameOver.src = './images/game-over-png.png';

window.onload = function() {
  cleanCanvas();
  document.getElementById('start-button').onclick = function() {
    startGame();
    timerT();
  };
};
const startGame = timestamp => {
  drawBoard();
  for (let obstacles of loadObst) {
    obstacles.move();
    obstacles.checkCollision();
  }

  if (gameIsRunning) {
    window.requestAnimationFrame(startGame);
  } else {
    cleanCanvas();
    ctx.drawImage(gameOver, 0, 0, 400, 400);
  }
};
