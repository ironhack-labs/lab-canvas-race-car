const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


const game = new Game(ctx)
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.startGame();

  }

  window.addEventListener('keydown', (event) => {
    game.setupListener(event);

  })

  window.addEventListener('keyup', (event) => {
    game.setupListener(event);

  })
};
