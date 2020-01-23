window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    islandRacer.startGame();
  };

  islandRacer.init('islandRacer')
};
