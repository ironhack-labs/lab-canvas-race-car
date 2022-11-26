window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const game = new Game("canvas")
    game.draw()
    game.callEventListeners()
  }
};
