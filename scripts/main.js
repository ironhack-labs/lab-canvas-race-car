const $canvas = document.querySelector("canvas");
const context = $canvas.getContext("2d");

let game = new Game($canvas);

const HEIGHT = $canvas.height;
const WIDTH = $canvas.width;

document.getElementById("start-button").onclick = function() {
  game.startGame();
};
