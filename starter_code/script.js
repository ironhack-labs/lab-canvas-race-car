let game = new Game();
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    // setCanvasDimensions();
    startGame()
  };




  function startGame() {
    var canvas = document.querySelector("#ourGame")
    game.init(canvas)
  }
};
