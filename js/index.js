window.onload = () => {

  const game = new Game("game-canvas")
  
  
  document.getElementById('start-button').onclick = () => {
    game.start()
  }

  document.addEventListener('keydown', (event) => {
    game.onKeyEvent(event)
  })

  document.addEventListener('keyup', (event) => {
    game.onKeyEvent(event)
  })

};
