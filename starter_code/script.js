window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    let canvas = document.getElementById("carRace");
    startGame(canvas);
  
  };

  function startGame(canvas) {
   let game = new Game(canvas)
    game.starGame();
}
};