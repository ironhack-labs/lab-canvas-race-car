/** @type {HTMLCanvasElement} */

// initial setup
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Road image
const road = new Image();
road.src = "/images/road.png";
road.addEventListener("load", () => {
  ctx.drawImage(road, 0, 0, 500, 700)
} )
// // Car image  (player)
// const car = new Image();
// car.src = "/images/car.png";
// car.addEventListener("load", () => {
//   ctx.drawImage(car, 215, 580, 75, 100)
// })

const car = new Component(218, 550, 60, 100, ctx)

// Create the game 
let game = new Game(ctx, 500, 700, car)

// Start the game

// Move left and right - Keybindings
document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowRight':
      car.x += 10;
      break;
    case 'ArrowLeft':
      car.x -= 10;
      break;
  }
});


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.start();
  };
};