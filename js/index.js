window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    islandRacer.init('canvas')
  }
};


// islandRacer.init('canvas')