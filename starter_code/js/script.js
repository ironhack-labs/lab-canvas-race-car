window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame(ctx) {
    road.draw(ctx);
  }


};
