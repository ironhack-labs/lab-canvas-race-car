window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    animate();
    startGame();
  };

  function startGame() {
    drawCar();
    generateObstacle();
  }
};
