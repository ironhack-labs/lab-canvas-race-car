var canvas, ctx;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

};
function startGame() {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
 }
