window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var game = new Game("canvas");
    game.start();

    document.onkeydown = function(event) {
      var RIGHT_KEY = 39;
      var TOP_KEY = 38;
      var BOTTOM_KEY = 40;
      var LEFT_KEY = 37;

      switch (event.keyCode) {
        case RIGHT_KEY:
          if (game.coche.x < game.canvas.width - game.coche.width) {
            game.coche.x += 10;
          }
          break;
        case LEFT_KEY:
          if (game.coche.x > 0) {
            game.coche.x -= 10;
          }
          break;
      }
    };
  }
};
