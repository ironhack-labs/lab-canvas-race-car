const canvas = document.querySelector(`#canvas`);
const context = canvas.getContext(`2d`);
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}


  const drawBackground = () => {
    const backgroundImg = new Image();
    backgroundImg.src = `./images/road.png`;
    backgroundImg.addEventListener(`load`, () => {
      context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    });
  }

  const drawCar = () => {
    const car = {
      x: 217,
      y: 550,
      width: 60,
      height: 110
    };

  const carImg = new Image();
  carImg.src = `./images/car.png`;
  carImg.addEventListener(`load`, () => {
    context.drawImage(carImg, car.x, car.y, car.width, car.height);
  });
}

  function startGame() {
    drawBackground();
    drawCar();
  }
