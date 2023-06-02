window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d')
  const game = new Game(ctx);
  

  function startGame() {
    game.start();
  }
};
