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
    alert('Game Over');
  }

  document.addEventListener('keydown', carMove);
};
