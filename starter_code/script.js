window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    document.querySelector("#game-board").innerHTML = `<canvas id="myGame" width="0" height="0"></canvas>`
    app.init("#myGame")
  }
};