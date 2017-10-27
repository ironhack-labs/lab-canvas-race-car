window.onload = function() {

  //Start Button
  document.getElementById('start-button').onclick = function() {
    startGame();
    draw(car);
    drawGameBoard();
  }

//Keydown
  function startGame() {
    window.addEventListener('keydown', doKeyDown, true);

    function doKeyDown(e) {
      switch (e.keyCode) {
        case 37:
          car.moveLeft();
          console.log('left', car);
          break;
        case 39:
          car.moveRight();
          console.log('right', car);
          break;
      }
      updateCanvas();
    }
  }

  function updateCanvas() {
    ctx.clearRect(0, 0, 1000, 1000);
    ctx.fillText("Car_x: " + car.x, 580, 40);
    ctx.fillText("Car_y: " + car.y, 580, 60);
    draw(car);
    drawGameBoard();
  }
  doKeyDown(car);

};
