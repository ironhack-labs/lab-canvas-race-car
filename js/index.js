const carImg = new Image();
carImg.src = './images/car.png';
const raceImg = new Image();
raceImg.src = './images/road.png';
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const myGameArea = {
  frames: 0,
  score: function () {
      const points = Math.floor(this.frames / 5);
      ctx.font = '18px serif';
      ctx.fillStyle = 'black';
      ctx.fillText(`Score: ${points}`, 350, 50);
  },
};
const car = {
    width: 50,
    height: 100,
    x: 224,
    y: 500,
    dx: 0,
    speed: 10
}

const race = {
  width: 500,
  height: 700,
  img: raceImg,
  x: 0,
  y:0,
  speed: 5,
  move: function(){
          this.y += this.speed
          this.y %= canvas.height;
  
  },
  draw: function(){
    // context.drawImage(this.img, 0, this.y);
    if (this.speed < 0) {
      
      context.drawImage(this.img, this.x, this.y + canvas.height, canvas.width, canvas.height);
        
    } else {
      context.drawImage(this.img, this.x, this.y - canvas.height, canvas.width, canvas.height);
        
    }
  }
    
}

function drawCar(){
  context.drawImage(carImg, car.x, car.y, car.width, car.height);
  
}

function drawBackground(){
  context.drawImage(raceImg, race.x, race.y, race.width, race.height);
}

function moveBg(){
  race.dx = race.speed
  race.x += race.dx
  
}

function newPos(){
  car.x += car.dx
}

function clear(){
  context.clearRect(0,0,canvas.width, canvas.height)
}

function moveRight(){
  car.dx = car.speed
}

function moveLeft(){
  car.dx = -car.speed
}

function keyDown(event){
  console.log(event.key)
  switch (event.key) {
    case "ArrowRight":
      moveRight()
      console.log("I moved Right")
      break;
    case "ArrowLeft":
      moveLeft()
      console.log("I moved Left")
      break;
    default:
      break;
  }
}

function detectWalls(){
  if(car.x < 45){
    car.x = 45
  }if(car.x + car.width > canvas.width - 45){
    car.x = (canvas.width - car.width) - 45
  }
  
}

function keyUp(){
  car.dx = 0
  car.dy = 0
}

class Component {
  constructor(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
      this.speedX = 0;
      this.speedY = 0;
    }
    crashWith(obstacle) {    
      return !(
          this.bottom() < obstacle.top() ||
          this.top() > obstacle.bottom() || 
          this.right() < obstacle.left() || 
          this.left() > obstacle.right());
    }
  update() {  // GENERA UNA FIGURA COLOR ROJO
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
  newPos() { // new Position del jugador o del obstáculo
      this.x += this.speedX;
      this.y += this.speedY;
  }
}

let myObstacles = []

function updateObstacles(){
  for (let i = 0; i < myObstacles.length; i++) {
    myObstacles[i].x += -1;
    myObstacles[i].update();
  }
  myGameArea.frames += 1;
    if (myGameArea.frames % 120 === 0) {
      let x = canvas.width;
      let minHeight = 20;
      let maxHeight = 200;
      let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
      let minGap = 50;
      let maxGap = 200;
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      // PRIMER PIPE
      myObstacles.push(new Component(20, height, 'brown', x, 0));
      // SEGUNDO PIPE
      myObstacles.push(new Component(20, x - height - gap, 'brown', x, height + gap));
      console.log(myObstacles)
    }
  
}



window.onload = () => {
    clear()
    race.move()
    race.draw()
    detectWalls()
    drawBackground()
    updateObstacles()
    newPos()
    drawCar()
    requestAnimationFrame(onload)
    document.getElementById('start-button').onclick = () => {
        startGame();
    };
    function startGame() {
        
    }
};

//eventos

document.addEventListener('keydown', keyDown)
document.addEventListener('keyup', keyUp )






