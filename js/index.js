window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
  }


};


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
  image(car, 115 , 370, 50, 80)

}

