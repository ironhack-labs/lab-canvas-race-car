/** @type {HTMLCanvasElement} */   // Enable canvas auto complete

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// Create the player
const player = new Component(canvas.width / 2, canvas.height / 2, 60, 120, ctx);

document.addEventListener('keydown', (e) => {
  switch(e.code) {
      case "ArrowUp":
          player.speedY -= 1;
          break;
      case "ArrowDown":
          player.speedY += 1;
          break;
      case "ArrowLeft":
          player.speedX -= 1;
          break;
      case "ArrowRight":
          player.speedX += 1;
          break;
  }
});

document.addEventListener('keyup', (e) => {
  player.speedX = 0;
  player.speedY = 0;
})

// Start the game
window.onload = () => {
  let game = new Game (ctx, canvas.width, canvas.height, player);

  document.getElementById('start-button').onclick = () => {
    game.start();
  };


};







