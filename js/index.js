const game = new Game('canvas');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    game.start()
  }
};

document.addEventListener('keydown', (event) => {
  game.player.onKeyEvent(event);
});

document.addEventListener('keyup', (event) => {
  game.player.onKeyEvent(event)
})