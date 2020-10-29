window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  drawingApp.init('canvas')
  drawingApp.drawImage('car.png')
  

  function startGame() {
    controlledApp.init('canvas')
  }
};




    
