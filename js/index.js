window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    myGameArea.init();
  };

  const myObstacles= [];

const myGameArea = {
  canvas: document.getElementById('canvas'),
  frames: 0,
  init: function(){
  this.ctx = this.canvas.getContext('2d');
  this.interval = setInterval(updateGameArea, 20)
  },
  bg: function(){
    const backgroundImg = new Image();
    backgroundImg.src = "/images/road.png";
    this.ctx.drawImage(backgroundImg, 0, 0, 500, 700);
  },
  clear: function(){
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function(){
    clearInterval(this.interval)
  },
  score: function(){
    const points = Math.floor(this.frames / 10);
    this.ctx.font = '30px Arial';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(`Score: ${points}`, 350, 50);
  },
}


class Player {
  constructor(x, y, width, height){
    this.img = new Image();
    this.img.src="/images/car.png";
    this.width = width;
    this.height = height;
    this.x = x,
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
   
  }

  update(){
    const context = myGameArea.ctx;
    context.drawImage(this.img, this.x, this.y, this.width, this.height)
  }

  newPos(){
    this.x += this.speedX;
    this.y += this.speedY;
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
 
  crashWith(obstacle) {
    return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
  }
}


class Obstacle {
  constructor(x, y, width, height){
    this.width = width;
    this.height = height;
    this.x = x,
    this.y = y;  
  }

  update(){
    const context = myGameArea.ctx;
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, this.width, this.height)
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
}

const car1 = new Player(225, 600, 30, 60);

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }

  myGameArea.frames += 1;
  if (myGameArea.frames % 150 === 0) {
    let y = myGameArea.canvas.width;;
    let minWidth = 20;
    let maxWidth = 400;
    let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    let minGap = 120;
    let maxGap = 250;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Obstacle(0, 0, width, 20));
    myObstacles.push(new Obstacle(width+gap, 0, y-width-gap, 20));
  }
}

function checkGameOver() {
  const crashed = myObstacles.some(function (obstacle) {
    return car1.crashWith(obstacle);
  });

  if (crashed) {
    myGameArea.stop();
    const context = myGameArea.ctx;
    context.fillStyle = 'red';
    context.fillText(`Your final Score is: ${myGameArea.points}`, 40, 350);
  }
}



function updateGameArea(){
  myGameArea.clear();
  myGameArea.bg();
  car1.newPos();
  car1.update();
  updateObstacles();
  checkGameOver();
  myGameArea.score();
 }

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case "ArrowUp": 
      car1.speedY -= 1;
      console.log('up')
      break;
    case "ArrowDown": 
      car1.speedY += 1;
      console.log('down')
      break;
    case "ArrowLeft": 
      car1.speedX -= 1;
      console.log('left')
      break;
    case "ArrowRight": 
      car1.speedX += 1;
      console.log('right')
      break;
  }
});

document.addEventListener('keyup', (e) => {
  car1.speedX = 0;
  car1.speedY = 0;
});

};

