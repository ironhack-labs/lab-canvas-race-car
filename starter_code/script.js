let $canvas = document.querySelector('canvas');

let game = new Game($canvas)


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    game.startGame();
  };
  
};




