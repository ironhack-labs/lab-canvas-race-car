"use strict";

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {

    const canvasElement = document.querySelector("canvas");

    
    const game = new Game(canvasElement);

    game.startLoop();

    const setPlayerDirection = (event) => {
      if (event.code === "ArrowRight") {
        game.car.setDirection(1);
      } else if (event.code === "ArrowLeft") {
        game.car.setDirection(-1);
      }
    };

    document.addEventListener("keydown", setPlayerDirection);
  }
  

}

