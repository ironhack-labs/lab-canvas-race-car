/**@type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

const carImage = new Image();
carImage.src = "/images/car.png"

const player = new Car(200, 600, 100, 150, ctx, "#00ff00");
const game = new Game(ctx, 500, 700, player);

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.start();
  };
};

document.addEventListener("keydown", (e) => {
  switch (e.code) {
    case "ArrowUp":
      player.speedY -= 1
      break;

    case "ArrowDown":
      player.speedY += 1
      break;

    case "ArrowRight":
      player.speedX += 1
      break;

    case "ArrowLeft":
      player.speedX -= 1
      break;
  }

});

document.addEventListener("keyup", () => {
  player.speedX = 0;
  player.speedY = 0;
});