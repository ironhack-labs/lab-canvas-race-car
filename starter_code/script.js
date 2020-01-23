window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    let canvasDOMEl = document.getElementById("canvas");
    startGame(canvasDOMEl);
    
  };

  function startGame(canvas) {
      let game = new Game(canvas);
      game.star(canvas);
  }
};
