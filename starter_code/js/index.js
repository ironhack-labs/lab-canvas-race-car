window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var game = new Game()
    game.init("road")
    game.draw()
    
  }

};

