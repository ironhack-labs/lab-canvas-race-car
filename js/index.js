// start button - not using this for the moment 
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
  }
};

// initialising useful variables 
let x = 0;
let road;
let car;
const obstacles = []
let obstaclesCount = 0;
 
// setting up obstacles 
function addObstacles(){
  obstacles.push({x:random(0,200), y:0, w:random(20, 80), h:20});
  obstaclesCount ++;
}
const obstaclesIntervalId = setInterval(addObstacles, 2000);

// necessary JS5 functions 
function setup() {
  createCanvas(500, 500);
}

function draw() {
  image(road, 0, 0, 280, 600);
  image(car, 115 + x, 400, 50, 80);

  obstacles.forEach(function(obstacle){
    rect(obstacle.x, obstacle.y+=2, obstacle.w, obstacle.h);
    
    if(
  /*rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y*/

      obstacle.x < 115 + x + 50 &&
      obstacle.x + obstacle.w > 115 + x &&
      obstacle.y < 400 + 80 &&
      obstacle.h + obstacle.y > 400
    ) {
      text(`Game Over! Score: ${obstaclesCount-2}`, width/2, height/2);
      noLoop();
    } 
    else {
      console.log("Nope")
    }
  });
}
function preload() {
  road = loadImage('images/road.png');
  car = loadImage('images/car.png');
}

// keypress function  
function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
      x += 10;   
  }
  if (keyCode === LEFT_ARROW) {
      x -= 10;
  }
}


