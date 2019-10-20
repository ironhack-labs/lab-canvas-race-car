window.onload = function startGame() {
  
  const canvas = document.getElementById("my-canvas")
  
  const ctx = canvas.getContext("2d")
  

  const game = new Game(ctx)
  console.log("entra")
  game.run()
}
