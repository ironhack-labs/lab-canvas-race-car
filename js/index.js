window.onload = () => {
  const canvas = document.querySelector("canvas");
  const game = new Game(canvas);
  document.getElementById('start-button').onclick = () => {
    game.start();
  }
};
