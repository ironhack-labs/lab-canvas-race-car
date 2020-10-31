let game = new Game();
let road = new Road();
let car= new Car();
let obstacleArr = [];
let canvasUpdate;

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.startObstacles();
    game.updateCanvas();
    game.countScore;
  };
}

document.addEventListener('keydown', event => {
  switch (event.keyCode) {
    case 37:
      if(car.x > 0) {
        car.x -= 20;
      }
      break;
    case 39:
      if(car.x < game.canvas.width - car.width) {
        car.x += 20;
      }
      break;
  }
});




