const $canvas = document.querySelector('canvas');

// Road dimensions
const HEIGHT = 600;
const WIDTH = 400;
const CENTER = 200;
const WIDTH_OF_ROAD = 320;

// Make a new game instance
const game = new Game($canvas);


window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    game.startGame();
  };
};
