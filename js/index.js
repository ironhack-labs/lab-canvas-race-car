const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  document.addEventListener('keydown', event => {
    if (event.code === 'ArrowRight') {
      game.player.x += 10;
    }
    if (event.code === 'ArrowLeft') {
      game.player.x -= 10;
    }
  })

  function startGame() {
    game.start();
  }
};

