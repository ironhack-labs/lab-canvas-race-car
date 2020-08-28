window.onload = () => {
  document.getElementById('start-button').onclick = () => {

    // We start the game
    gameEngine.startGame()

  };
  gameEngine.init('canvas')

};
