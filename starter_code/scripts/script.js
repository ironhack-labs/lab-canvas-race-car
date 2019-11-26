window.addEventListener('load', () => {
  const startButton = document.getElementById('start-button');
  startButton.onclick = () => {
    const newGame = new Game();
    newGame.start();
    // console.log('start');
  };
});
