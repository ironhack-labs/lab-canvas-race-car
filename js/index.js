const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const car = {
  x: canvas.width / 2.25,
  y: canvas.height - 150,
  width: 50,
  height: 319 * 50 / 158,
  img: new Image(),
  show: function () {
    this.img.src = '../images/car.png'
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  },
  moveRight: function () {
    if (this.x < canvas.width - 50) {
      this.x += 15;
    }
  },
  moveLeft: function () {
    if (this.x > 10) {
      this.x -= 15
    }
  }
}

const road = {
  x: 0,
  y: 0,
  width: canvas.width,
  height: canvas.height,
  img: new Image(),
  show: function () {
    this.img.src = '../images/road.png';
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

const obstacles = {
  items: [],
  determineSize: function () {
    let size = Math.random() * canvas.width;
    if (size > 400) {
      size = 400
    } else if (size < 150) {
      size = 150
    }
    return size
  },
  createObstacle: function () {
    let obstacle = {
      x: Math.random() * canvas.width / 2,
      y: 0,
      size: this.determineSize(),
      height: 40
    }
    this.items.push(obstacle);
  },
  destroyObstacle: function () {
    if (this.items.length >= 4) {
      this.items.shift();
    }
  },
  show: function (item) {
    ctx.save();
    ctx.fillStyle = 'red';
    ctx.fillRect(item.x, item.y, item.size, item.height);
    ctx.restore();
  },
  go: function (obstacle) {
    obstacle.y += 3
  },
  checkCollision: function () {
    let carX = car.x + car.width;
    let carY = Math.round(car.y - car.height / 2);
    let obstacleX = this.items[0].x;
    let obstacleSize = obstacleX + this.items[0].size
    let obstacleY = this.items[0].y;

    if (carX > obstacleX + 5 && carX < obstacleSize && obstacleY >= carY) {
      return true
    }
    return false
  }
}

const score = {
  points: 0,
  increasePoints: function () {
    this.points += 1
  },
  showPoints: function () {
    ctx.font = '30px Verdana';
    ctx.fillText(`SCORE: ${this.points}`, canvas.width - 150, 50);
  },
  finalScore: function () {
    let h1 = document.createElement('h1')
    let h1Text = document.createTextNode('GAME OVER')
    h1.appendChild(h1Text);
    let p = document.createElement('p');
    let pText = document.createTextNode(`SCORE: ${this.points}`)
    p.appendChild(pText);

    document.querySelector('div.game-intro').appendChild(h1);
    document.querySelector('div.game-intro').appendChild(p);
  }
}




function start() {
  road.show();
  car.show();

  //Create first obstacle and initialize the game
  setInterval(function () {
    obstacles.createObstacle();
  }, 2000);

  //Run game
  const playGame =
    setInterval(function () {
      obstacles.destroyObstacle();
      score.increasePoints();
    }, 100);

  //Show Points
  setInterval(function () {
    score.showPoints();
  }, 1);

  // Check if have a collision and stop game if is it true

  setTimeout(function () {
    const checkGameover = setInterval(function () {
      if (obstacles.checkCollision()) {
        clearInterval(playGame)
        canvas.style.display = 'none';
        clearInterval(checkGameover);
        score.finalScore();
      }
    }, 50)
  }, 2000)
}


function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  road.show();
  car.show();
  obstacles.items.forEach(e => {
    obstacles.show(e)
    obstacles.go(e)
  });
}


document.getElementById('start-button').onclick = () => {
  start();
};

window.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowRight':
      car.moveRight();
      break;
    case 'ArrowLeft':
      car.moveLeft();
      break;
  }
})

setInterval(function () { updateGame() }, 30)


