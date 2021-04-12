const gameboard = new GameBoard();

const startButton = document.getElementById('start-button');
if (startButton) {
  startButton.addEventListener('click', e => {
    //use this instead of calling animate because it makes the browser wait for a good time to start rendering, if you called animate() it would render/attempt to render ASAP and maybe fuck shit up
    // GameBoard.init();
    gameboard.initGame();
  });
}

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft': // left arrow
    gameboard.car.moveLeft();
    break;
    case 'ArrowRight': // right arrow
    gameboard.car.moveRight();
    break;
  }
});
