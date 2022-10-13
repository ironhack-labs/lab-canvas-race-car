/** @type {HTMLCanvasElement} */
// canvas is 500w, 700h

const canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

const player = new Image();
const road = new Image();
let frames = 0;

function drawRoad(){
road.src = "../images/road.png"
road.onload = function () {
  ctx.drawImage(road, 0, 0, canvas.width, canvas.height)
}
}
function drawPlayer(){
player.src = "../images/car.png"
player.onload = function () {
  ctx.drawImage(player, 225, 500, 50, 100)
}
}


car = {
  x: 225,
  y: 500,
  w: 50,
  h: 100,

  drawCar(){
  ctx.drawImage(player, this.x, this.y, this.w, this.h)    
  },

  top(){
    return this.y;
  },

  bottom(){
    return this.y + this.h;
  },

  right(){
    return this.x + this.w;
  },

  left(){
    return this.x
  }
}

class Enemy {
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.color = "red";
  }

  draw(){
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
  
  newPos(){
    this.y += 2;
  }

  top(){
    return this.y;
  }

  bottom(){
    return this.y + this.h;
  }

  right(){
    return this.x + this.w;
  }

  left(){
    return this.x
  }
}



let obstacles = [];
let createObstacle = () => {
  for(let i = 0; i < obstacles.length; i++){
    obstacles[i].newPos();
    obstacles[i].draw();
  }

  if(frames % 180 === 0){
    
    let minWidth = 100;
    let maxWidth = 220;
    let width = Math.floor(Math.random()*(maxWidth - minWidth +1) + minWidth);

    let minGap = 75;
    let maxGap = 150;
    let gap = Math.floor(Math.random()*(maxGap - minGap +1) + minGap);

    obstacles.push(new Enemy(0, 0, width, 25));
    obstacles.push(new Enemy(width + gap, 0, canvas.width, 25));
  }
}


 let update = () => {
  frames ++;
  score();
  drawRoad();
  car.drawCar()
  createObstacle()
  gameOver()
  let id = requestAnimationFrame(update)
 }
//How to cancel animation frame properly???

function stop(){
  cancelAnimationFrame(id)
}



let crashWith = (obstacle) => {
  return !(
    car.bottom() < obstacle.top() ||
    car.top() > obstacle.bottom() ||
    car.right() < obstacle.left() ||
    car.left() > obstacle.right()
    ); //why??
  }
  
  function gameOver (){
    const crashed = obstacles.some( (obstacle) => {
      return crashWith(obstacle);
  })
  if(crashed) {stop()}; 
  }
  
  function score(){
    const points = Math.floor(frames/10)
    ctx.font = "30px monospace";
    ctx.fillStyle = "black";
    ctx.fillText(`SCORE:${points}`, 300, 50)
    }




document.addEventListener("keydown", (e) => {
  switch(e.code){
    case "ArrowLeft": car.x -= 5;
    break;
    case "ArrowRight": car.x += 5;
    break;
    
  }
})





window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    drawRoad();
    drawPlayer();
    update();
    
  
  }
};