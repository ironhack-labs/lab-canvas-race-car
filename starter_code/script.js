window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    
    const canvas = document.getElementById("my-canvas")
    const ctx = canvas.getContext("2d")

    const game = new Game(ctx)
    game.run()
    //debugger
  }
};
