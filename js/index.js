const canvas = document.querySelector(`#canvas`);
const context = canvas.getContext(`2d`);
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  const drawBackground = () => {
    const backgroundImg = new Image();
    backgroundImg.src = `./images/road.png`;
    backgroundImg.addEventListener(`load`, () => {
      context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    });
  }

  function startGame() {
    drawBackground();
  }
};
