window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };



  function startGame() {
    drawingApp.init('canvas');
    drawingApp.drawAll();
  }
};
