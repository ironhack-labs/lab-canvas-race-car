const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const game = new Game(ctx);
const startButton = document.querySelector('#start-button');

game.start();
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    startButton.setAttribute('disabled', true);
  };

document.addEventListener("keydown", event => {
  if (event.code === "ArrowRight") {
    game.player.speedX += 5;
 }
 if (event.code === "ArrowLeft"){
  game.player.speedX -= 5;
 }
})
document.addEventListener('keyup', event => {
  if (event.code === 'ArrowRight' || event.code === 'ArrowLeft') {
    game.player.speedX = 0;
  }
})
  function startGame() {
    game.start();
  }
};
