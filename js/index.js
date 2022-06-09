window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    console.log('HOLA MUNDO')
    carRaceApp.init('#canvas')
  }
};
