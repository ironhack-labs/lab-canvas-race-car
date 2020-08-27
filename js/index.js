window.onload = () => {

  document.getElementById('start-button').onclick = () => {

    startGame();

  };

  function startGame() {

    raceCarGame.init('canvas')

  }

};
