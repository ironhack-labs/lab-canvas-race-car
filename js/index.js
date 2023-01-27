/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

/* const roadImg = new Image ();
roadImg.src = "/images/road.png"; */


// Create the player - car
const car = new Component(220, 500, 60, 120, "red", ctx);

const game = new Game(ctx, canvas.width, canvas.height, car);
// start the game + // Grab the button
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.start();
  };
  
};

// when the key is pressed

document.addEventListener('keydown', (e) => {
  switch(e.code) {
    case 'ArrowLeft':
      car.speedX -= 1;
      break;
    case 'ArrowRight':
      car.speedX += 1;
      break;
  }
})

document.addEventListener('keyup', () => {
  car.speedX = 0;
});