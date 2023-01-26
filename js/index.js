/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 700;


let car = new Component(250,350,50,90, ctx)




  

  document.addEventListener("keydown", (e)=> {
    switch(e.code){
     case "ArrowUp":
     car.speedY -=1
     break;
     case "ArrowDown":
     car.speedY +=1
     break;
     case "ArrowLeft":
     car.speedX -=1
     break;
     case "ArrowRight":
     car.speedX +=1
    }
  })

  document.addEventListener("keyup", () => {
    car.speedX = 0;
    car.speedY = 0;
  })



window.onload = () => {
  const game = new Game(ctx, canvas.width, canvas.height, car);
  document.getElementById('start-button').onclick = () => {
   game.start();
  };
};
