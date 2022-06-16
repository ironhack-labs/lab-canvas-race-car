const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const game = new Game(ctx)

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.start();
  };
};
