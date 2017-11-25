window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = new Canvas("canvas");
    canvas.draw();
  }
};
