window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };
  
  function startGame() {
    game.start("race")
  }
};