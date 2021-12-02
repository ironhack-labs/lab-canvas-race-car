window.onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const game = new Game(ctx);

  document.getElementById('start-button').onclick = () => {
    game.start();
  };

  window.addEventListener('keydown', (event) => {
    game.setupListeners(event);
  });

  window.addEventListener('keyup', (event) => {
    game.setupListeners(event);
  });
};
