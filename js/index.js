window.onload = () => {
  startButton = document.getElementById('start-button');
  startButton.onclick = () => {
    startGame();
    //Avoid relaunch of the game
    startButton.disabled = true;
  };

  function startGame() {
    const game = new Game('canvas')

    document.addEventListener('keydown', (event) => {
      game.onKeyEvent(event)
    })

    document.addEventListener('keyup', (event) => {
      game.onKeyEvent(event)
    })

    game.start()
  }
};
