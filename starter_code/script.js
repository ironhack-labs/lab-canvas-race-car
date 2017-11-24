window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var game = new Game("canvasBoard",450,550);
    game.draw();

  }
};
