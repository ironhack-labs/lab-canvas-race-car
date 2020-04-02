const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame()
  }

  function startGame() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    bgimg.draw()
    requestAnimationFrame(startGame)
  }
}

var bg = new Image()
bg.src = './images/road.png'
var bgimg = {
  img: bg,
  y: 0,
  speed: -1,
  draw: function() {
    this.y++
    if (this.y > canvas.height) this.y = 0
    context.drawImage(this.img, 0, this.y, canvas.width, canvas.height)
    context.drawImage(this.img, 0, this.y - canvas.height, canvas.width, canvas.height)
  }
}
