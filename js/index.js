/** @type {HTMLCanvasElement} */

// Basics, Canvas 500wx700h

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext("2d");

const player = new Player(225, 620, 50, 50, ctx);

//Create the Game

let game = new Game(ctx, canvas.width, canvas.height, player);

let points = Math.floor(this.frames / 60); // 60 if for secodns

function score() {
  if (didYouStart === 0) {
    ctx.font = '100 px monospace';
    ctx.fillStyle = 'black';
    ctx.fillText(`Score: ${points}`, 400, 50);
    console.log("The score was invoked!")
  }
};

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
/*   player.drawCar(); */
  game.startGame();
  score();
  didYouStart = 1;
})

//Moving the Car

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowLeft':
      player.driveLeft();
      score();
      console.log("Help!")
      break;
    case 'ArrowRight':
      player.driveRight();
      score();
      break;
  }
});
