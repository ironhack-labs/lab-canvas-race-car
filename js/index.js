window.addEventListener('load', () => {
  const game = new Game('canvas');
  
  document.getElementById('start-button').onclick = () => {
    if (!game.intervalId) {
      game.start();
    }
  }
});




/* window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    const game = new Game('canvas');
    startGame();
  };

  function startGame() {
 
  }
}; */


  

