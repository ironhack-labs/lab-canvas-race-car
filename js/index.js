const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
/*function startGame() {
  const board = new Board(ctx);
  board.clear();
  board.draw();
}
*/
const game =new Game(ctx);
// arranca el juego
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.startGame();
  };
  // control cuando pulsan una tecla
  document.addEventListener('keydown', (event) => { 

    game.onKeyEvent(event) 
    
    }) 
    // control cuando levantan el dedo de la tecla
    document.addEventListener('keyup', (event) => { 
    
    game.onKeyEvent(event) 
    
    }) 

  
};
