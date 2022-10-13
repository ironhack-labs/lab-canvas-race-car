window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}

  console.log("I have been clicked!")
};

let didYouStart = 0;

document.getElementById("start-button").addEventListener("click", () =>{
  console.log("I clicked the start")
  player.drawCar();
  didYouStart = 1;
})

/** @type {HTMLCanvasElement} */

// Basics, Canvas 500wx700h

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d");

const player = new Player(225, 620, 50, 50, "gold", ctx);

//Create the Game

let game = new Game(ctx, canvas.width, canvas.height, player);

//Moving the Car

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowLeft':
      player.driveLeft();
      console.log("Help!")
      break;
    case 'ArrowRight':
      player.driveRight();
      break;
  }
});
