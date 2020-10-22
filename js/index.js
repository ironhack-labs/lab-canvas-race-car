//when we click on the Start Game button, we need to create the canvas and display the road.
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    $context = document.getElementById('canvas').getContext('2d')

    $context.fillStyle = "#FF0000";
    $context.fillRect(0, 0, 150, 75);
    
  }



};
