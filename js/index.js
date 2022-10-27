window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    // console.log('el juego empieza')
    app.init()
  }
};
