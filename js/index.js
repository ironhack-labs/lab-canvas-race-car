const game = new Game("canvas") ;



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    game.start();
  };
}

