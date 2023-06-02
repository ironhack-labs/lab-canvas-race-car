const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const startButton = document.querySelector('#start-button');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    startButton.setAttribute('disabled', true);
  };
  document.addEventListener('keydown', event => {
    if (event.code === 'ArrowRight') {
      game.player.vx += 0.5;
    }
    if (event.code === 'ArrowLeft') {
      game.player.vx -= 0.5;
    }
  });

  document.addEventListener('keyup', event => {
    if (event.code === 'ArrowRight' || event.code === 'ArrowLeft') {
      game.player.vx = 0;
    }
  })

  function startGame() {
    game.start();
  }
};

