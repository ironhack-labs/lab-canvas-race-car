window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("game");
    canvas.width = 300;
    canvas.height = 600;
    var game = new Game(canvas);
    game.draw();
  }
};