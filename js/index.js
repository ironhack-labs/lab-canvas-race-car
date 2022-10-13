/** @type {HTMLCanvasElement} */
//Canvas 500wx700h
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}


function startGame() {
  //Creating a player
  const player = new Car(225, 500, 50, 50, 'black', ctx);
  let game = new Game(ctx, 1200, 800, player);
  game.start();

  document.addEventListener('keydown', (e) => {
    switch (e.code) {
      case 'ArrowRight': player.speedX += 1;
        break;
      case 'ArrowLeft': player.speedX -= 1;
        break;
    }
  })
  document.addEventListener('keyup', (e) => {
    player.speedX = 0;
  })
  
};




