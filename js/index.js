const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);

window.onload = () => {
  document.addEventListener('keydown', event => game.moveCar(event.keyCode), false);
  document.getElementById('start-button').onclick = () => game.start();
};
