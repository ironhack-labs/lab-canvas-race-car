window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

  }
};

let imgRoad;
let imgCar;

let car = {
  x:220,
  y:680,
  w:60,
  h:90
}

const obstacles = []

function preload(){
  
  imgRoad = loadImage(`images/road.png`);
  imgCar = loadImage(`images/car.png`);
}
function setup(){
  createCanvas(500, 800);
}
function addObs(){
 obstacles.push({x:random(0,width-10),y:0, w:random(50,250), h:random(5,50)});
obstaclesCount ++;
}
let obstaclesCount = 0;
const obstaclesIntervalId = setInterval(addObs,2500);

 
function draw(){
  background(220);
  image(imgRoad, 0, 0,500, 800);
  image(imgCar, car.x, car.y, car.w, car.h, 0, 0 );
  obstacles.forEach(function(obs){
    rect(obs.x,obs.y+=2,obs.w,obs.h);
   
    });
    
    obstacles.forEach(function(obs){
  if (
    car.x < obs.x + obs.w &&
    car.x + car.w > obs.x &&
    car.y < obs.y + obs.h &&
    car.h + car.y > obs.y
  ) {
    // Collision detected!
    noLoop(); 
  } 
    });

  textSize(40);
  text(obstaclesCount, 100, 100);
}







function keyPressed(){
  if(keyCode === LEFT_ARROW){
car.x-= 25;
  }else if ( keyCode === RIGHT_ARROW){
car.x+= 25;
  } else if (keyCode === UP_ARROW){
    car.y-= 25;
  } else if (keyCode === DOWN_ARROW){
    car.y+= 25;
  }
}



