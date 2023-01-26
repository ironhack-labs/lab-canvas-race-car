/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const player = new Component(200, 600, 50, 100, ctx);

const game = new Game(ctx, canvas.width, canvas.height, player);

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.start();
  };
}

document.addEventListener("keydown", (e) => {
  switch(e.code){
      case "ArrowRight" : 
          player.speedX += 2;
          break;
      case "ArrowLeft" : 
          player.speedX -= 2;
          break;
  }
})

document.addEventListener("keyup", () => { 
  player.speedX = 0;
  player.speedY = 0;

})