const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const game = new Game(ctx)
const startBtn = document.getElementById('start-button')


startBtn.addEventListener('click', () => {
  if (game.intervalId === null) {  
    game.start()
  } else {
    game.gameOver()
  }
})
