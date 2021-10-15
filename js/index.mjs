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
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    const bang = new Image();
    bang.scr = '../images/bang.png';
    this.ctx.drawImage(bang, this.player.x, this.player.y, 40, 40);
   
  }

 
