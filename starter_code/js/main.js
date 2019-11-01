const $canvas = document.querySelector('canvas');

/// These should really be properties of the Game class...
// Canvas dimensions
const HEIGHT = $canvas.height;
const WIDTH = $canvas.width;
// Road dimensions
const CENTER = WIDTH / 2;

const WIDTH_OF_ROAD = 320;
const TRACK_LEFT = 30;
const TRACK_RIGHT = 340;

// Make a new game instance
const game = new Game($canvas);


window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    game.startGame();
  };
};

function printLoose() {
  const body = document.querySelector('body');
  body.innerHTML = '<h1>YOU LOOSE</h1>';
}