const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  roadGame.drawBackground();
  car.drawCar();
  drawObstacles();
}

const game = new RoadGame();

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    game.drawBackground();
    game.startLoop();
  };


  document.addEventListener("keydown", (event) => {
    if (event.key == "ArrowRight") {
      game.player.moveRight();
    } else if (event.key == "ArrowLeft") {
      game.player.moveLeft();
    }
  });
};
