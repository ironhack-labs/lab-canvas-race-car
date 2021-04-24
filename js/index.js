window.addEventListener('load', () => {
  const game = new Game('canvas');

  document.addEventListener('keydown', (event) => {
    game.onKeyEvent(event);
  });

  document.getElementById('start-button').onclick = () => {
    if (!game.intervalId) {
      game.start();
    }
  }
});