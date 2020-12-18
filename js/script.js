const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

const game = new Game(ctx)

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  document.addEventListener('keydown', (event) =>{
    game.onKeyEvent(event)
  })
  
  document.addEventListener('keyup', (event) =>{
    game.onKeyEvent(event)
  })

  function startGame() {
    game.start()
  }
};
