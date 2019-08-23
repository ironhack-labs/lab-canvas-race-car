window.onload = function() {
  //document.getElementById("start-button").onclick = function() {
    const $canvas = document.querySelector('canvas');
    const game = new Game($canvas); 

    game.start();

  }

