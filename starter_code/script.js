window.onload = function () {
  let started = false
  document.getElementById("start-button").onclick = function () {

    started ? null : started = startGame();
  };

  function startGame() {
    raceCarGame.init("myGame")
    return true
  }
};