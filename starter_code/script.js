window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    const canv = document.getElementById("game-board").querySelector("canvas");
    const ctx = canv.getContext('2d');

    const game = new Game(ctx);
    game.run();
    
  }
};
