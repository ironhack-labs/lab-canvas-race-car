const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const playerCar = new Car();
const game = new Game(ctx, canvas.width, canvas.height, playerCar);

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowLeft":
      playerCar.moveLeft();
      break;
    case "ArrowRight":
      playerCar.moveRight();
      break;
  }
});

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    game.start();
  }
};
