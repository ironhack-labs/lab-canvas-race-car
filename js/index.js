window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    basicApp.init()
    interactionApp.init()

  }
};
