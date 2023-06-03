const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const game = new Game(ctx);

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  
  document.addEventListener("keydown", game.handleKeyDown.bind(game));

  document.addEventListener("keyup", game.handleKeyUp.bind(game));

  function startGame() {
    game.start();
  }
};
