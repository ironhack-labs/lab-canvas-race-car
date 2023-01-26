/**  @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
  const background = new Image();
  background.src = "/images/road.png";

  const car = new Image();
  car.src = "/images/car.png";

  background.onload = function () {
  ctx.drawImage(background, 0, 0, 500, 700);
};
  car.onload = function () {
  ctx.drawImage(car, 225, 300, 50, 100);
};
  }
};
