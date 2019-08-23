/* eslint-disable no-undef */
const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

const height = $canvas.height;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
  game.startGame();
  };
};