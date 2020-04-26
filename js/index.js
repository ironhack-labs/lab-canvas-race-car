const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
this.imgRoad = new Image();
this.imgRoad.src = '/images/road.png';
this.imgCar = new Image();
this.imgCar.src = '/images/car.png';

const road = {
  img: null,
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  boundary: 30,
  obstacles: [],
  speed: 10,
  frames: 0,
  score : 0,
  init: function (_img) {
    this.img = _img;
    this.width = canvas.width;
    this.height = canvas.height;

    ctx.clearRect(0,0, canvas.width, canvas.height);
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

    this.frames++;
    this.obstacles = this.obstacles.map(obstacle => {
      obstacle.y ++;
      return obstacle;
    });

    this.obstacles.forEach(obstacle => {
      ctx.save();
      ctx.fillStyle ='red'; 
      ctx.fillRect(obstacle.x,obstacle.y,obstacle.width,obstacle.height);
      ctx.restore();
    })

    ctx.save()
    ctx.fillStyle = 'white'
    ctx.font = '20px Arial'
    ctx.fillText(`Score: ${this.score}`, 100, canvas.height-20)
    ctx.restore();
  },
  addObstacle: function() {
    if(this.frames%240 == 0){
      let minW = canvas.width/6;
      let maxW = canvas.width/4;

      let obstacle = {
        x: Math.random()*canvas.width,
        y: 0,
        width: (Math.random()*maxW)+minW,
        height: 25,
      }

      this.obstacles.push(obstacle);
    }    
  }
}

const car = {
  img: null,
  x: 0,
  y: 0,
  width: 80,
  height: 0,
  init: function (_img,_speed,_boundary) {
    this.img = _img;
    this.height = (319 / 158) * this.width;
    this.x = (canvas.width / 2) - (this.width/2);
    this.y = canvas.height - 25 - this.height;
    this.move('', _speed, _boundary);
  },
  move: function (_keyCode, _speed, _boundary) {
    switch(_keyCode){
      case 'ArrowLeft':
        if ((this.x - _speed) > _boundary){
          this.x -= _speed;
        }
        break;
      case 'ArrowRight':
        if ((this.x + _speed + this.width) < (canvas.width - _boundary)){
          this.x += _speed;
        }
        break;
      case 'ArrowUp':
        if ((this.y - _speed) > 0){
          this.y -= _speed;
        }
        break;
      case 'ArrowDown':
        if ((this.y + _speed + this.height) < canvas.height){
          this.y += _speed;
        }
        break;
    }
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  },
}

function updateGame(){
  road.addObstacle();
  road.init(this.imgRoad);
  car.move('', road.speed, road.boundary);
  let animID = requestAnimationFrame(updateGame);
  if(checkColision()){
    cancelAnimationFrame(animID);
    gameOver();
  } else {
    road.score++;
  }
}

function gameOver(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(0,0,canvas.width, canvas.height);

  ctx.fillStyle = 'red';
  ctx.font = '75px Arial';
  ctx.fillText(`Game Over!!!!`, 20, canvas.height/2);
  ctx.fillStyle = 'white';
  ctx.fillText(`Score: ${road.score}`, 20, canvas.height/2+100);
}
function checkColision(){
  return road.obstacles.some(obstacle => {
    if(obstacle.y + obstacle.height >= car.y && obstacle.y <= car.y + car.height + (car.height/2)){
      if(obstacle.x + obstacle.width >= car.x && obstacle.x <= car.x + car.width){
        return true;
      }
    }
    return false;
  });
}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    road.obstacles = [];
    road.score = 0;
    road.init(this.imgRoad);
    car.init(this.imgCar, road.speed, road.boundary);

    document.addEventListener('keydown', event => {
      road.init(this.imgRoad);
      car.move(event.code, road.speed, road.boundary);
    });

    updateGame();
  }
};