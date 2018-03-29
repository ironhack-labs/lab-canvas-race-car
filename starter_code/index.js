window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    var game = new Game("canvas");

    //$("#start-button").click(game.start.bind(game))

    game.start();
  };
}