window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();  
    //setInterval(startGame,20);
  };   
};

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const myObstacles = [];


function startGame() {
  //let frames = 0;
  clear();
  drawRoad();
  car.newPos();
  car.update();
  updateObstacles();  
};


//.........Drawing the Road...................
function drawRoad() {
  const roadImg = new Image();
  roadImg.src = "../images/road.png";

  ctx.drawImage(roadImg, 100, 0, 400, 600);
};

//..........Drawing the Car....................
class Component {
  constructor(x, y, width, height){
    // this.x = 275;
    // this.y = 500;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height
    this.speedX = 0;

    const carImg = new Image();
    carImg.src ="../images/car.png";

    this.img = carImg;
  }

  update() {
    //ctx.drawImage(this.img, this.x, this.y, 50, 100);
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.x += this.speedX;
  }

  Right() {
    return this.x + this.width;
  }

  Left() {
    return this.x;
  } 
}

//.........Criar um carro....................

const car = new Component(275, 500, 50, 100);

//.......mover carro com Keyboard............
document.addEventListener('keydown', e =>{
  switch (e.keyCode) {
    case 37:
      car.speedX -= 30;
      break;
    case 39:
      car.speedX += 30;
      break;
  }
  startGame();
});

document.addEventListener('keyup', e =>{
  car.speedX = 0;
})

//..............Clear.....................
function clear() {
  ctx.clearRect(0, 0, 500, 700);
}

//............Obstacles....................
// function updateObstacles() {
//   //frames += 1;
//   for (i = 0; i < myObstacles.length; i++) {
//     myObstacles[i].y += 1;
//     myObstacles[i].update();
//   }

//   if (frames % 120 === 0) {
//     let y = 0;
//     let minWidth = 20;
//     let maxWidth = 500;
//     let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
//     let minGap = 50;
//     let maxGap = 200;
//     let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
//     myObstacles.push(new Component(width, 10, 'red', 0, y));
//     myObstacles.push(new Component(10, width - y - gap, 'red', width, y + gap));
//   }
// };

// function drawObstacle(x,y,w,h) {
//   ctx.fillStyle = 'red';
//   //ctx.fillRect(100, 10, 150, 10);
//   ctx.fillRect(x, y, w, h);
// }

class Obstacle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;

  }
  update() {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }
  myObstacles.push(new Obstacle(100, 10, 100, 10));
  myObstacles.push(new Obstacle(300, 20, 300, 10));
}




