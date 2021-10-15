import Car from './car.mjs';
import Game from './game.mjs';

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const game = new Game(canvas);
  game.gameOverCallback(buildGameOver);
  game.pointsCallback(buildScoresView);

  function startGame() {
    game.startLoop();
  }
  function carMove(event) {
    if (event.code === 'ArrowLeft') {
      game.car.moveLeft();
    } else if (event.code === 'ArrowRight') {
      game.car.moveRight();
    }
  }
  function buildGameOver() {
    const gameOverImg = new Image();
    gameOverImg.addEventListener('load', () => {
      ctx.drawImage(gameOverImg, 0, 0, 564, 230);
    });
    gameOverImg.src = '../images/gameover.png';
  }

  function buildScoresView(points) {
    ctx.fillStyle = 'white';
    ctx.font = '30px Arial';
    ctx.fillText(`${points} points`, 20, 40);
  }

  document.addEventListener('keydown', carMove);
};
