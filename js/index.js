window.onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const game = new Game(ctx);

  document.getElementById('start-button').onclick = () => {
    game.start();
  };

  document.addEventListener('keydown', (event) => {
    game.onKeyDown(event.keyCode)
  })

  document.addEventListener('keyup', (event) => {
    game.onKeyUp(event.keyCode)
  })

};
