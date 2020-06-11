app.init('canvas')
app.drawBackground('canvas')
app.drawBackgroundLine('canvas')
app.drawCar('car.png')

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

//-----------------------------
