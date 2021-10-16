window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.querySelector("canvas");

    const game = new Game(canvas);
    //game.gameOverCallback(buildGameOver);
  
    game.startLoop();
  
    const setPlayerDirection = (event) => {
      if (event.code === "ArrowRight") {
        game.player.setDirection(-1);
      } else if (event.code === "ArrowLeft") {
        game.player.setDirection(1);
      }
    };
  
    document.addEventListener("keydown", setPlayerDirection);
  }

  /*function buildGameOver() {
    alert('Game Over');
  }*/

  };
