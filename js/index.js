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
      this.x += 10;
    }
  },
  moveLeft: function () {
    if (this.x > 10) {
      this.x -= 10
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

let points = 0;

function start() {
  road.show();
  car.show();
  setInterval(function () { obstacles.createObstacle() }, 2000);
  const playGame =
    setInterval(function () {
      obstacles.destroyObstacle();
      points += 1
    }, 100);
  setTimeout(function () {
    setInterval(function () {
      if (obstacles.checkCollision()) {
        clearInterval(playGame)
        canvas.style.display = 'none'
      }
    }, 50)

  }, 2000)



}
setInterval(function () { updateGame() }, 30)
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


function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  road.show();
  car.show();
  obstacles.items.forEach(e => obstacles.show(e));
  obstacles.items.forEach(e => obstacles.go(e));
}
document.getElementById('start-button').onclick = () => {
  start();
};



