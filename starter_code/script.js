window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  var gameCanvas;

  var ctx;

  var frameCount;

  function drawBackground() {

  }

  function updateCanvas() {

    frameCount++;
  }

  function startGame() {

    gameCanvas = document.getElementById("gameCanvas");
    ctx = gameCanvas.getContext("2d");
    frameCount = 0;

    var second = 1000;
    var fp = 60;

    setInterval(updateCanvas, fp / second);

  }
};
