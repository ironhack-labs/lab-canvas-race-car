

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    document.querySelector('canvas').className ='display';
    const game = new Game($canvas);
    game.start();
    };};
