const game = new Game('canvas')
window.onload = () => {

  const button = document.getElementById('start-button')
  button.onclick = () =>{
    button.innerHTML = 'RESET'
    startGame();
  }
  function startGame() {
    game.start()
  }
  document.addEventListener('keydown', (event) => {
    game.onKeyEvent(event)
  })
  document.addEventListener('keyup', (event) =>{
    game.onKeyEvent(event)
  })
};