/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('start-button');
const player = new Player(235, 600, 30, 70, ctx);

startButton.onclick = function (){
  const game = new Game(ctx, canvas.width, canvas.height, player);
  game.startGame();
}


document.addEventListener('keydown', (e) => {   
  switch (e.code){
      case 'ArrowLeft':
        if (player - player.speedX < 0){
          player.speedX = 0;
          break;
        } else {
          player.speedX = -5
          break;
        }
      case 'ArrowRight':
        if (player + player.speedX > canvas.width - player.w){
          player.speedX = 0;
          break;
        } else {
          player.speedX = 5
          break;
        }
      }
})

document.addEventListener('keyup', (e) => {
  player.speedX = 0;
})

