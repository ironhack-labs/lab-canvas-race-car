const myObstacles = [];
const road = new Image();
road.src = './images/road.png';

const gameArea ={
  canvas: document.querySelector('canvas'),
  frames: 0,
  score: function(){
    const points = Math.floor(this.frames / 5);
    this.context.font = '18px serif';
    this.context.fillStyle = "black";
    this.context.fillText(`Score: ${points}`,350, 50);
  },
  start: function(){
    this.context = this.canvas.getContext('2d');
    this.interval = setInterval(updateGameArea, 20);
    this.context.drawImage(road,0,0,canvas.width,canvas.height);

    
  },
  clear: function(){
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.drawImage(road,0,0,canvas.width,canvas.height);
  },
  stop: function(){
    clearInterval(this.interval);
  }
};


class Car{
  constructor(){
    this.x = canvas.width/2-20;
    this.y = canvas.height-150;
    this.width = 40;
    this.height = 80;
    this.car = new Image();
    this.car.src = './images/car.png'
  }

  update(){
    gameArea.context.drawImage(this.car,this.x,this.y,40,80);
  }

  left(){ return this.x}

  right(){ return this.x+this.width}

  top(){ return this.y}

  bottom(){ return this.y+this.height}

  crashWith(object){
    return !(this.bottom() < object.top() || this.top() > object.bottom() || this.right() < object.left() || this.left() > object.right());
  }
}


class Obstacle{
  constructor(x,y,width,height){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  update(){
    const ctx = gameArea.context;
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x,this.y,this.width,this.height);
  }

  move(){
    this.y += 1;
  }

  left(){ return this.x}

  right(){ return this.x+this.width}

  top(){ return this.y}

  bottom(){ return this.y+this.height}
}

function updateObstacles() {
  gameArea.frames++;
  if(gameArea.frames % 120 == 0){
    let minWidth = 80;
      let maxWidth = 160;
      let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
      let x = Math.floor(Math.random()*(canvas.width-maxWidth-4));
      myObstacles.push(new Obstacle(x,0,width,20));
  }

  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 2;
    myObstacles[i].update();
  }
}


function checkGameOver(){
  const crashed = myObstacles.some(function(obstacle){
      return player.crashWith(obstacle);
  })

  if(crashed){
      gameArea.stop();
      gameArea.clear();
  }
}

function updateGameArea(){
  gameArea.clear();
  player.update();
  updateObstacles();
  checkGameOver();
  gameArea.score();
}

const player = new Car();

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
  gameArea.start();
  }};
window.addEventListener('keydown', (e) =>{
  switch(e.keyCode){
    case 37: //left
    if(player.x > 40){
          player.x -= 10;
    }
      player.update();
      break;
    case 39: //right
    if(player.x+40 < canvas.width-40){
       player.x += 10;
    }
    player.update();
  }
})