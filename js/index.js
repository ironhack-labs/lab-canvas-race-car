const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.start();
  };


  window.addEventListener('keydown', (event) => {
    game.setUpListeners(event)
  })

  window.addEventListener('keyup', (event) => {
    game.setUpListeners(event)
  })
};
