window.onload = () => {
  drawingCar.init()
  drawingCar.drawFilledRectangle()
  drawingCar.drawDashedLines()
  drawingCar.createObstacles()
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

  }
};