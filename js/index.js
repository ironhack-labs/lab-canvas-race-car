/** @type {HTMLCanvasElement} */

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const player = new Component(218, 550, 60, 110, ctx);

