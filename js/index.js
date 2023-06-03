
window.onload = () => {
  const startButton = document.getElementById('start-button');
  startButton.addEventListener('click', startGame);
  

  };

  function startGame() {
    const canvas = document.querySelector ('#canvas');
    const ctx = canvas.getContext ('2d');
    const game = new Game(ctx);
    game.start();

    
    document.addEventListener("keydown", game.handleKeyDown.bind(game));

    document.addEventListener("keyup", game.handleKeyUp.bind(game));
    
    
  };
  
  

