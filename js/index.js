window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  gameCar.init('canvas')
  gameCar.drawBackground()
  // function startGame() {}

};