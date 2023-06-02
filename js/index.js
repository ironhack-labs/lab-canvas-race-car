

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const game = new Game(ctx);


  function startGame() {
    game.start();
  }

 
document.addEventListener("keydown", (event) => {
  game.handleKeyDown(event);
});

document.addEventListener("keyup", (event) => {
  game.handleKeyUp(event);
});
 
};
