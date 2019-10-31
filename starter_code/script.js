window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    if (!document.querySelector('canvas')) {
      let game = new Game(new Car(160), new Board());
      game.start();
    }
  }
};


