window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    basicGame.init()
    basicGame.setContext()
    basicGame.setDimensions()
    basicGame.setCarInstances()
    basicGame.start()
    basicGame.setEvents()
    
  }
};
