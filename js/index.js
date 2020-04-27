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
    if (this.x < canvas.width - 90) {
      this.x += 10;
      //updateGame();
    }
  },
  moveLeft: function () {
    if (this.x > 50) {
      this.x -= 10
      //updateGame();
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
  position: 0,
  determineSize: function () {
    let size = Math.random() * canvas.width;
    if (size > 350) {
      size = 350
    } else if (size < 150) {
      size = 150
    }
    return size
  },
  createObstacle: function (x, y, size) {
    let obstacle = {
      x: x, //Math.random() * 250,
      y: y,
      size: size,
      height: 40
    }
    this.items.push(obstacle);
    this.position += 1
  },
  destroyObstacle: function () {

  },
  show: function (item) {
    if (this.items.length > 1) {

    }
    if (this.items.length % 2 === 0) {
      this.createObstacle(Math.random() * 250, this.position, this.determineSize());
    } else {
      this.createObstacle(canvas.width - Math.random() * 250, this.position, -this.determineSize());
    }

    item = this.items[this.items.length - 1];
    if (item.y > 100) {
      ctx.save();
      tx.fillStyle = 'red';
      ctx.fillRect(item.x, item.y, item.size, item.height);
      ctx.restore();
    }

  }
}



function start() {
  road.show();
  car.show();
  obstacles.show();
  document.addEventListener('keydown', event => {
    switch (event.key) {
      case 'ArrowRight':
        car.moveRight();
        updateGame();
        break;
      case 'ArrowLeft':
        car.moveLeft();
        updateGame();
        break;
    }
  })


}

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  road.show();
  car.show();
  obstacles.show();
}

function keyboard(event) {

}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    start();
  };
}
