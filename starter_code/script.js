window.onload = () => {
  document.getElementById("start-button").onclick = function() {
    let canvas = document.getElementById("canvas");

    startGame(canvas);
  };

  function startGame(canvas) {
    let game = new Game(canvas);
    game.starGame();
  }
};
