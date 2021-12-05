// jshint esversion:6
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    updateCanvas();
  }
};

window.addEventListener('keydown', (event) => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      car.moveLeft(); //left
      break;
    case 39:
      car.moveRight(); //right
      break;
  }
});
function clearCanvas(){
  context.clearRect(0, 0, canvas.width, canvas.height);
}
//Could not understand how to make obstacles (iteration 4)...
function updateCanvas() {
  
  board.move();
  clearCanvas();
  board.drawBoard();
  car.drawCar();
  obstacle.drawObstacles();
  //obstacle2.drawObstacles();
  
  
  

  let animationFrameId = requestAnimationFrame(updateCanvas);

  // if (obstacle.y > canvas.height) {
  //   cancelAnimationFrame(animationFrameId);
  // }
}
