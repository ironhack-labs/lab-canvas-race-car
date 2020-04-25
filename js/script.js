//has only buttons and canvas definition

const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;



const game = new Game(canvas);

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.start();
  };
};