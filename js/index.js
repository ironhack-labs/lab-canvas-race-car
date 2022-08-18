// Initiation or Loader Game

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    game.init('#canvas')
  }
}
