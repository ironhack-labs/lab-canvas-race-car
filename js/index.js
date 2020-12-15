window.onload = () => {

  const game = new Game("game-canvas")
  
  
  document.getElementById('start-button').onclick = () => {
    game.start()
  }


};
