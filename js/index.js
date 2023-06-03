
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const game = new Game(ctx);


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  document.addEventListener("keydown", event => {
    if (event.code === "ArrowLeft") {
      game.player.speedX -= 10;
    }
    if (event.code === "ArrowRight"){
      game.player.speedX += 10;
    }
  });
  document.addEventListener("keyup", event => {
    if (event.code === "ArrowLeft" || event.code === "ArrowRight") {
      game.player.speedX = 0;
  } 
  });

  function startGame() {
    game.start();
  }
 
};
