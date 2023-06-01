window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  const canva = document.querySelector('canvas');
  const ctx = canva.getContext('2d')
  const game = new Game(ctx);
  

  function startGame() {
    game.start();
  }
};
