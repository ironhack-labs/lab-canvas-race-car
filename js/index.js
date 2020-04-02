
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    //Se comprueba que no haya un juego en curso
    !game.isplaying ? game.start('canvas') : null

  }
};
