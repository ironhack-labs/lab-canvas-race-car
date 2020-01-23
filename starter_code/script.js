window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    let canvas = document.getElementById('#canvas')
    startGame();
  };

  function startGame() {
    let game = new Game ();
    game.start();

  }
};
