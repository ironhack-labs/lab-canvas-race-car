/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const startButton = document.getElementById("start-button");

const car = new Component(250, 500, 55, 75, "blue", ctx);

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    canvas.style.backgroundImage = "url(../images/road.png";
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";
    const game = new Game(ctx, canvas.width, canvas.height, car, canvas);
    game.start();
  }
};

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      car.speedY -= 1;
      break;
    case "ArrowDown":
      car.speedY += 1;
      break;
    case "ArrowLeft":
      car.speedX -= 1;
      break;
    case "ArrowRight":
      car.speedX += 1;
      break;
  }
});

document.addEventListener("keyup", () => {
  car.speedX = 0;
  car.speedY = 0;
});
