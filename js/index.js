window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};
let road
let car

function preload() {
  road = loadImage('/images/road.png');
  car = loadImage('/images/car.png');
}

function setup() {
  createCanvas(282, 600);
  image(road, 0, 0);
}

let x = 0
function draw(){
  image(road, 0, 0);

  image(car, 150 + x , 350, 50, 80)
}
function keyPressed(){
  if (keyCode === LEFT_ARROW){
    x = x - 5;
    console.log("left")
  }else if(keyCode === RIGHT_ARROW){
    x = x + 5;
    console.log("right")
  }
}
