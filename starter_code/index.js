window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    var game = new Game("canvas");

    game.start();
  };
}