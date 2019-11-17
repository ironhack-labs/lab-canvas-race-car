let canvas;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    canvas = document.getElementById("road");
    ctx = canvas.getContext("2d");
    createBoard();
  }

  function createBoard() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
   
    ctx.filleRect(0, 0, canvas.width, canvas.height);
  }
};
