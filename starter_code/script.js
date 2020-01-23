window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    let canvas = document.getElementById("canvas")
    startGame(canvas);
  };

  function startGame(canvasParam) {
    let game = new Game(canvasParam);
    game.startGame();
// crear el juego y un coche y el escenario
  }
};
