const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const game = new Game(ctx)
const startButton = document.getElementById('start-button')

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}

  function startGame() {
    if (game.intervalId === null) {  
      game.start()
    } else {
      game.stop()
    }
  };