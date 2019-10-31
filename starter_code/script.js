window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    const game = new Game(new Car(160), new Board());
    game.start();
  }
};


