  mainCanvas = document.getElementById('canvas');
  mainCtx = mainCanvas.getContext('2d');
  


function renderMainCanvas() {
  mainCtx.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
  car.draw();
}

function clearCanvas() {
  ctx.clearRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
}


function updateBackgroundCanvas() {
  backgroundImage.moveRoad();
  renderMainCanvas();
  clearCanvas();
  backgroundImage.drawRoad();
  createObstacles();
  requestAnimationFrame(updateBackgroundCanvas);
}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }
};
      
  

  
