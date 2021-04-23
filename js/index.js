document.addEventListener('DOMContentLoaded', () => {
  const game = new Game('canvas'); //en cuanto la pagina sea cargada, crea nuevo juego
  const startButton = document.getElementById('start-button')
  startButton.addEventListener('click', () => {
    game.startGame()
  })
 
  document.addEventListener('keydown', (event) => {
    game.onKeyEvent(event);
  });

  document.addEventListener('keyup', (event) => {
    game.onKeyEvent(event);
  })
})
  
    