"use-strict";

import Game from "./game.mjs";



window.onload = () => { 
  document.querySelector("#start-button").onclick = () => {
    buildGameScreen();
  }
}
const score = document.querySelector("#score");
const gameOverContainer = document.querySelector("#game-over")

function buildGameScreen() {
  gameOverContainer.style.visibility = "hidden"
  // get the canvas
  const canvas = document.querySelector('#canvas');
  canvas.width = canvas.width;
  canvas.height = canvas.height;
 
  const game = new Game(canvas);
  game.gameOverCallback(buildGameOver);

  game.startAnimateLoop();

  const setPlayerDirection = (event) => {
    if (event.code === "ArrowLeft") {
      game.player.setDirection(-1);
    } else if (event.code === "ArrowRight") {
      game.player.setDirection(1);
    }
  };
  
    document.addEventListener("keydown", setPlayerDirection);
  }
  
  function buildGameOver() {
    gameOverContainer.style.visibility = "visible"
    score.textContent = this.player.score;
  }

 
