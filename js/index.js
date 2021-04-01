carGame.init()
carGame.drawCar()

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    carGame.drawAll()()
  }
};
