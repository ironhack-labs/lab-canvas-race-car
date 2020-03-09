window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

let road = new Image();
road.src = 'images/road.png';

let car = new Image ();
car.src = 'images/car.png';

let frameCounter = 0;

let draw = () => {
frameCounter++;

context.drawImage(road, 0, 0);
context.drawImage(car, 0, 0);

window.requestAnimationFrame(draw);

}

function startGame() {
draw(); 
}
};

