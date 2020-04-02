
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    !game.isplaying ? game.start('canvas') : null

  }
};
