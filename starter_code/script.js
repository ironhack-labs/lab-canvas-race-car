window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    let canvas = document.querySelector("canvas");

    startGame(canvas);
  };

  function startGame(canvasParam){
    let game = new Game(canvasParam);
    game.startGame();
  }
};