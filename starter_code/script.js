window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    document.getElementById('game-board').innerHTML = "<canvas id='game-canvas'></canvas>";
    var canvas = new RaceCanvas();
    document.getElementById('game-canvas').setAttribute("width",canvas.width);
    document.getElementById('game-canvas').setAttribute("height",canvas.height);
    canvas.createCanvas();
  }
};
