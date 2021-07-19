const game = new Game();




///////////////// START GAME ///////////////////

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    game.start();
  }
};
