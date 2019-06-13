let game = new Game
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    game.init("canvas")
    // game.setDimensions()
  }
};
