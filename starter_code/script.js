window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    const $canvas = document.getElementById("game-canvas");

    const game = new Game($canvas);

    game.start();
  }
};
