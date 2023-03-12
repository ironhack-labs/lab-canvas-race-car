ctx = document.getElementById('canvas').getContext('2d');
document.getElementById('start-button').onclick = () => {
  startGame();
};

let carWidth = 50 ;
let roadWidth = 425 ;
let limitRoadLeft = 40 ;
let limitRoadRight = 465 ;

function startGame() {
  car = new Car()
  //obstacle = new Obstacle(400);
  frame = 0 
  setInterval(updateGameArea,16);
}

class Car {
  constructor(){
    this.x = 250;
    this.y = 450;
    this.img = new Image(); 
    this.img.src = '../images/car.png';
  }
  draw(){
    ctx.drawImage(this.img, this.x , this.y, carWidth, 80);
  }
}

function createObstacle(){
  let minObstacleWidth = 100
  let minInterval = carWidth +10
  let interval = 0
  let randX = 0;
  let randWidth = 0
  while(interval<minInterval){
    /*Placement aléatoire du début de l'obstacle entre le bord de la route et la taille min de l'obstacle */
    randX = Math.floor(Math.random()*(roadWidth-minObstacleWidth) + limitRoadLeft) 
    /*Dimensionnement de l'obstacle entre Obstacle min et randX - taille de la route*/
    randWidth = Math.max(Math.floor(Math.random()*(roadWidth-randX)),minObstacleWidth)
    /*Analyse du plus petit interval entre gauche et droite de l'obstacle*/
    interval = Math.max(randX-limitRoadLeft, limitRoadRight - randWidth- randX- limitRoadLeft)
  }
  obstacles.push(new Obstacle(randX, randWidth))
}
let obstacles = [];

class Obstacle {
  constructor(obstacleLeft, width){
    this.x = obstacleLeft;
    this.y = 0;
    this.width = width;
    this.height = 5;
  }

  draw(){
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

//let obstacle
let car 
let frame
//let road

function clear () {
  ctx.clearRect(0, 0, 500, 700);
}

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 38: // up arrow
      car.y -= 5;
      console.log("up");
      break;
    case 40: // down arrow
      car.y += 5;
      break;
    case 37: // left arrow
      car.x -= 5;
      console.log("left");
      break;
    case 39: // right arrow
      car.x += 5;
      break;
  }
});

function updateGameArea(){
  clear();
  //ctx.drawImage(road, 0, 0, 500, 700);
  car.draw();
  if(frame % 120 === 0){
    createObstacle();
  }
  frame+=1;
  for(let el of obstacles){
    el.y +=1;
    el.draw();
  }

}


