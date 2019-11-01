window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    drawAll();
    
  }
};

const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
const game = new Game($canvas);


    


