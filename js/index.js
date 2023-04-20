window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();



  };

}

function startGame() {

  carGame.init()
  carGame.drawRoad()
  carGame.setCarImage()
  carGame.setControls()
  carGame.start()










};
startGame()
