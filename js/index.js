window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    raceCarGame.init()
    raceCarGame.drawBackground()
    raceCarGame.drawRoad()
    raceCarGame.drawLeftLine()
    raceCarGame.drawRightLine()
    raceCarGame.drawDashedLine()

  }
};
