var $canvas = document.querySelector('canvas')
var context = $canvas.getContext('2d')
var width = $canvas.width
var height = $canvas.height

const game = new Game($canvas);


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    game.paint();
  };

  function startGame() {

  }
};




