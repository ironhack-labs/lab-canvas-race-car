// setup(canvas, draw11)
window.onload = function() {
  var canvas = document.querySelector("#game");

  /** @type {CanvasRenderingContext2D} */
  var ctx = canvas.getContext('2d');

  canvas.setAttribute("height", window.innerHeight);
  canvas.setAttribute("width", window.innerWidth/2);
  setup(canvas);
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  }
};
