const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
  }
};


const player = new Component(0, 100, 50, 50, 'red', ctx);

//create the game

let game = new Game(ctx, 1200, 800, player);

game.start();

//Keybindings

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowUp':
      player.speedY -= 1;
      break;
    case 'ArrowDown':
      player.speedY += 1;
      break;
    case 'ArrowRight':
      player.speedX += 1;
      break;
    case 'ArrowLeft':
      player.speedX -= 1;
      break;
  }
});

document.addEventListener('keyup', (e) => {
  player.speedX = 0;
  player.speedY = 0;
});
Footer
