const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const game = new Game(ctx);
const startBtn = document.getElementById("start-button");

window.onload = () => {
  startBtn.onclick = () => {
    startGame();
  };

  function startGame() {
    game.start();
  }
};
