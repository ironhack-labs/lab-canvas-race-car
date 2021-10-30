const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let requestID;
const obstacles = [];

const game = {
  frames: 0,
  start: () => {
    this.interval = setInterval(update, 10)
  },
  stop: () => {
    clearInterval(this.interval);
  }
}

class BackG {
  constructor() {
    this.image = new Image();
    this.image.src = '/images/road.png';
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

class Car {
  constructor() {
    this.image = new Image();
    this.image.src = '/images/car.png';
    this.x = 225;
    this.y = 600;
    this.width = 50;
    this.height = 80;
    this.speed = 0
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    console.log(this.x);
  }

  newPos() {
    this.x += this.speed;
    if(this.x < 68) this.x = 68;
    if(this.x > 386) this.x = 386;
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

  collisionDetector(obstacle) {
    return !(this.bottom() < obstacle.top() ||
    this.top > obstacle.bottom() ||
    this.right < obstacle.left() ||
    this.left > obstacle.right())
  }
}

class Obstacle {
  constructor(x, width) {
    this.x = x;
    this.y = 0;
    this.width = width;
    this.height = 15;
    this.color = 'red';
  }

  draw() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  // left() {
  //   return this.x;
  // }
  // right() {
  //   return this.x + this.width;
  // }
  // top() {
  //   return this.y;
  // }
  // bottom() {
  //   return this.y + this.height;
  // }

  // collisionDetector(obstacle) {
  //   return !(
  //   this.bottom() < obstacle.top() ||
  //   this.top > obstacle.bottom() ||
  //   this.right < obstacle.left() ||
  //   this.left > obstacle.right()
  //   )
  // }
}

function newObstacle() {
  for(i = 0; i < obstacles.length; i++) {
    obstacles[i].y++;
    obstacles[i].draw();
  }

  game.frames++;
  if(game.frames % 250 === 0) {
    let minWidth = 0;
    let maxWidth = 235;
    let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    let minGap = 70;
    let maxGap = 90;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    obstacles.push(new Obstacle(65, width))
    obstacles.push(new Obstacle(65 + width + gap, 325 - (width + gap - 49)))
  }
}

function checkGameOver() {
  const crashed = obstacles.some(function (obstacle) {
    return aCar.collisionDetector(obstacle);
  });

  if(crashed) {
    game.stop();
  }
}

const raceTrack = new BackG;
const aCar = new Car;

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  raceTrack.draw();
  aCar.newPos();
  aCar.draw();
  newObstacle();
  checkGameOver();
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    game.start();
  }
};


addEventListener('keydown', (e) => {
  switch(e.keyCode) {
    case 37:
      aCar.speed -= 1 
      break;
    case 39:
      aCar.speed += 1
      break;
  }
})

document.addEventListener('keyup', () => {
  aCar.speed = 0;
});
