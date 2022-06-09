window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    this.init('#canvas')
  }
};
canvasApp.init('#canvas')

