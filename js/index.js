window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    raceGame.init();
    raceGame.drawRoad();
    raceGame.createCar();
    raceGame.setListeners();
    raceGame.drawAll();
  }
};
