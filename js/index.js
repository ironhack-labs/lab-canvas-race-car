const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    const game = new Game(ctx);
    game.start();
    document.onkeydown = (event) => {
      game.moveCar(event);
    }
  };
};
