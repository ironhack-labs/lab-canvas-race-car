const canvas = document. getElementById("canvas");
const ctx = canvas.getContext("2d");

const game = new Game(ctx);

game.start()

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
  
    function startGame() {}
    
    document.addEventListener('keydown', () => {
        game.onKeyEvent(event)
      })
    
      document.addEventListener('keyup', () => {
        game.onKeyEvent(event)
      })
  };
  