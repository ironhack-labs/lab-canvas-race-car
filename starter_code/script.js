window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    const game = new Game("car", new Board());
    game.start();
  }
};


