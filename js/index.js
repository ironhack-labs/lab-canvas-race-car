window.onload = () => {
  const canvas = document.querySelector("canvas");
  const game = new Game(canvas);
  game.background.draw();
  document.getElementById("start-button").onclick = () => {
    game.start();
  };
};
