window.onload = () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let game = undefined;

  document.getElementById("start-button").onclick = () => {
    game = new Game(ctx);
    game.startGameLoop(ctx);
  };

  document.addEventListener("keydown", (e) => {
    game.carMovement(e);
  });
};
