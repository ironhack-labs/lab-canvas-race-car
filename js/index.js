window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

 

  function startGame() {
  }
};

let x = 0;
let road;
let car;

function preload() {
  road = loadImage('images/road.png');
  car = loadImage('images/car.png');
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  image(road, 0, 0, 282, 600);
  image(car, 115 + x, 370, 50, 80)
}


function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    x += 10;
  }
  if (keyCode === LEFT_ARROW) {
    x -= 10;
  }
}
