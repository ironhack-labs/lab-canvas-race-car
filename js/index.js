const canvas = document.getElementById("canvas"),
  ctx = canvas.getContext("2d");

const carPlayer = new Component(225, 600, 50, 100);

// Draw whatever else over top of it on the canvas.

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    const game = new Game(ctx, 500, 700, carPlayer);
    game.start();
  }
};

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      carPlayer.speedX -= 1;
      break;
    case "ArrowRight":
      carPlayer.speedX += 1;
      break;
  }
});

document.addEventListener("keyup", () => {
  carPlayer.speedX = 0;
});
