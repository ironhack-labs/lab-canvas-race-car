window.onload = function() {
  const canvas = document.getElementById("my-canvas")
  const ctx = canvas.getContext("2d")

  const game = new Game(ctx)

  document.getElementById("start-button").onclick = function() {
    startGame()
  }

  function startGame() {
    game.reset()
    game.run()
  }
}
