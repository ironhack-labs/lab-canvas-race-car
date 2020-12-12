const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const raceGame = new Game(ctx)

window.onload = () => {
  let startButton = document.getElementById('start-button');
  startButton.onclick = () => {
    // ReStart game 
    startButton.innerHTML = 'ReStart Game';
    startButton.onclick = () => {
      location.reload();
    }
    // Start Game
    startGame();
  };

  // Start Game Function
  const startGame = () => {
    raceGame.start()
  }
};
