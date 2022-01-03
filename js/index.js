window.onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  const game = new Game(ctx);
  const car = game.car;
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    game.start();
  }

  document.addEventListener('keydown', event => {
    switch (event.keyCode) {
      case 37:
        car.moveLeft();
        console.log('left', car);
        break;
      case 39:
        car.moveRight();
        console.log('right', car);
        break;
    }
  });
};
