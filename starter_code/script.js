window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    let canvas = document.getElementById("canvas");
    startGame(canvas);
  };
  function startGame(canvasParam) {
    let CarGame = new Game(canvasParam)
    CarGame.start();
  }
}
