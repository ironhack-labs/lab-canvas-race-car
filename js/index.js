/** @type {HTMLCanvasElement} */

    const canvas = document.getElementById("canvas");

    const ctx = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 700;


    let car = new Component(250, 350, 50, 90, ctx)

  document.addEventListener("keydown", (e)=> {
    switch(e.code){
     case "ArrowLeft":
     car.speedX -=3
     break;
     case "ArrowRight":
     car.speedX +=3
    }
  })

  document.addEventListener("keyup", () => {
    car.speedX = 0;
    car.speedY = 0;
  })

window.onload = () => {
  const game = new Game(ctx, canvas.width, canvas.height, car);
  document.getElementById('start-button').onclick = () => {
    startGame();
    game.start();
  };

  function startGame() {}
};