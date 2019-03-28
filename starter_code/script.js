var canvas, ctx;
var w = window.innerWidth;
var h = window.innerHeight;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var gameboard = document.querySelector('#game-board');
    canvas = document.createElement('canvas');
    canvas.width = this.innerWidth / 2;
    canvas.height = this.innerHeight;
    canvas.getContext('2d');
    gameboard.appendChild(canvas);
  }

  function paintRoad() {
    ctx.fillRect(0, 0, 50, h);
  }
};
