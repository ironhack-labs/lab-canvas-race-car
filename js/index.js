window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();


    
  };

  function startGame() {
    carRaceApp.init(500,700);
  }
};



