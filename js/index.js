// window.onload = () => {
//     document.getElementById('start-button').onclick = () => {
//         startGame();
//     };
//     function startGame() {}
  
//   };

let imgRoad;
let imgCar;
let car;
let obstacles = [];
let score = 0;


function preload(){
  imgRoad = loadImage('/images/road.png');
  imgCar = loadImage('/images/car.png');
  
}

function setup(){
  createCanvas(500,690);
  car = new Car() 
}

function draw(){

  image(imgRoad,0,0,500,690);
  fill('#FFFFFF')
  text(`Score: ${score}`, 70 ,30);
  textSize(24)
  car.draw();
  obstacles.forEach((obstacle) => {
    obstacle.y += 2;
    obstacle.draw()
    if (collisionDetection(car, obstacle)) { 
      noLoop()
      return; 
   }
  }) 
}

function createObstacle () {
  let obstacle = new Obstacles()
  obstacles.push(obstacle);
    }
  setInterval(createObstacle, 2000); 

    
function increaseScore () {
      score++;
    }
    setInterval(increaseScore, 500);

function collisionDetection(rect1, rect2) {

  if (
    rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y
  ) {
    
    background('black')
    textSize(42)
    text('Game Over', 150, 345)
    textSize(36)
    text(`Score: ${score}`, 180, 450)
    textAlign(CENTER, CENTER)^
    noLoop()
  } 
}

 
