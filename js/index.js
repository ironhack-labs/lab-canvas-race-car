const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let interval;
const myObstacles = [];
let frames = 0;

const car = {
  x: 225,
  y: 625,

  moveLeft: function () {
    if (this.x >= 75){
      this.x -=25
    }
  },
  moveRight: function () {
    if (this.x <= 385) {
      this.x += 25
    }
  },
  left: function() {
    return this.x;
  },
  right: function() {
    return this.x + this.width;
  },
  top: function() {
    return this.y;
  },
  bottom: function() {
    return this.y + this.height;
  },

  crashWith(obstacle) {
    return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
  }
};

class Obstacle {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
   
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
   
  
  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
}


function draw(car) {
  const img = new Image();
  img.onload = () => {
    ctx.drawImage(img, car.x, car.y, 50, 50);
  };

  img.src = '../images/car.png';
}



function checkGameOver() {
  const crashed = myObstacles.some(function (obstacle) {
    return car.crashWith(obstacle);
  });

  if (crashed) {
    stop();
  }
}



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}

  draw(car);
  interval = setInterval(updateCanvas, 70)

};


function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 10;
    myObstacles[i].update();
  }
  frames += 1;
  if (frames % 30 === 0) {
    let obstacleY = 0;
    let minX = 75;
    let maxX = 385;
    let obstacleX= Math.floor(Math.random() * (maxX - minX  + 1) + minX );
    let minWidth = 75;
    let maxWidth = 270;
    let obstacleWidth = Math.floor(Math.random() * (maxWidth - minWidth  + 1) + minWidth );
    myObstacles.push(new Obstacle(obstacleWidth, 30, 'red', obstacleX, obstacleY));
  }
}


function updateCanvas() {
  ctx.clearRect(0, 0, 500, 700);
  ctx.fillText('Car_x: ' + car.x, 580, 40);
  ctx.fillText('Car_y: ' + car.y, 580, 60);
  draw(car);
  updateObstacles()
  checkGameOver()
}

function stop() {
clearInterval(interval)
}


document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 37:
      car.moveLeft();
      console.log('left', car);
      break;
    case 39:
      car.moveRight();
      console.log('right', car);
      break;
  }
  updateCanvas();
});
