/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas")

const ctx = canvas.getContext('2d');

const startButton = document.getElementById('start-button');

const player = new Component(carImg, 0, 200, 75, 75, "blue", ctx);

/*const raceCar = document.getElementById("race-car");
ctx.drawImage(raceCar, 5, 5, 5, 5);*/



startButton.onclick = function(){
  const game = new Game(ctx, canvas.width, canvas.height, player)

  game.start();
}

document.addEventListener("keydown", (e) => {
  switch(e.code){

      case "ArrowLeft": 
      player.speedX -= 1
      break;

      case "ArrowRight": 
      player.speedX += 1
      break;


  }


})

document.addEventListener("keyup", () => {
  player.speedX = 0;
  player.speedY = 0;


})


  
