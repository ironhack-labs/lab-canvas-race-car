
window.onload = () => {

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const game = new Game(ctx) 

  document.getElementById('start-button').onclick = startGame;

  function startGame() {
    const gameIntro = document.getElementById("game-intro");
    const gameBoard = document.getElementById("game-board");

    gameIntro.classList.add("hidden")
    gameBoard.classList.remove('hidden')

    document.addEventListener('keydown', (event) => {
      if (event.keyCode === 39) {
        game.car.moveRight()
      }
      if (event.keyCode === 37) {
        game.car.moveLeft()
      }
    })

    game.start()
    
  }
};
