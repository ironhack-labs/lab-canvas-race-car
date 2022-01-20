window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    drawingAll.start();
    // drawingAll.setEventHandlers();
  }
};

drawingAll.init();
