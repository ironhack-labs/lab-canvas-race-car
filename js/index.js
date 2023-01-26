/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d")

const player = new Component(canvas.width / 2 - 40, canvas.height - 120, 80, 120, ctx)



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame()
  }

  function startGame() {
    canvas.style.backgroundImage = "url('../images/road.png')"
    canvas.style.backgroundRepeat = 'no-repeat'
    canvas.style.backgroundSize = 'cover'
    const game = new Game(ctx, canvas.width, canvas.height, player, canvas)
    game.start()
  }
}

document.addEventListener('keydown', (e) => {
  switch(e.code){
    case 'ArrowRight':
      player.speedX += 1
      break
    case 'ArrowLeft':
      player.speedX -= 1
      break
  }
})


document.addEventListener('keyup', (e) => {
  player.speedX = 0
  player.speedY = 0
})