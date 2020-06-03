const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")


window.onload = () => {
  const game = new Game(ctx)
  document.getElementById('start-button').onclick = () => {
    game.start()
  };
};
