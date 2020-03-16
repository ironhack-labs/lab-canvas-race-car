window.onload = () => {

  // game.background.draw -->
  document.getElementById('start-button').onclick = () => {
    const canvas = document.querySelector("canvas");
    const game = new Game(canvas)
    game.start()
  }
}