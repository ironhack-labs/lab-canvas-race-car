const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const raceGame = new Game(ctx)

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    raceGame.start()
  }
};
