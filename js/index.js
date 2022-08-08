// canvas
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// criação do jogador (carro)

class Car {
  constructor (width, height, x, y) {
    this.width = width
    this.height = height
    this.x = x
    this.y = y
    this.speedX = 0

    const img = new Image()
    img.addEventListener("load", () => {
      this.img = img
    })
    img.src = "../images/car.png"
  }

    update() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    newPos() {
      if (this.x >= 37 && this.x <= 407) {
        this.x += this.speedX
      } else if (this.x < 37) {
        this.x = 37
      } else {
        this.x = 407
      }
    }

    left() {
      return this.x
    }

    right() {
      return this.x + this.width
    }

    top() {
      return this.y
    }

    bottoom() {
      return this.y + this.height
    }

    crashWith(obstacle) {
      return !(
        this.bottoom () < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right()
      )
    }
}

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  update() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
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

const player = new Car

const myObstacles = []

const myGameArea = {
  canvas: document.createElement('canvas'),
  frames: 0,
  start: function () {
    this.interval = setInterval(updateGameArea, 20)
    this.context = this.canvas.getContext('2d')
    const img = new Image()
    img.addEventListener("load", () => {
      this.img = img
    })
    img.src = "../images/road.png"
  }
  
  stop: function() {
    clearInterval(this.interval)
  }

  score: function() {
    const points = Math.floor(this.frames / 5);
    ctx.font = "30px serif";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${points}`, 10, 50);
  }
  
  clear: function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
}

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 3
    myObstacles[i].update()
}

myGameArea.frames += 1
if (myGameArea.frames % 120 === 0) {
    let minWidth = 100
    let maxWidth = 300
    let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)
    let minGap = 37;
    let maxGap = 467 - width;
    let x = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Component(width, 30, "red", x, 0));
  }
}


function checkGameOver() {
  const crashed = myObstacles.some(function (obstacle) {
    return player.crashWith(obstacle);
    });
  
    if (crashed) {
      myGameArea.stop();
    }
  }

function updateGameArea() {
  myGameArea.clear();
  player.newPos();
  player.update();
  updateObstacles();
  checkGameOver();
  myGameArea.score();
}


document.addEventListener("keydown", (arrowKey) => {
  if (arrowKey.keyCode === 37) {
    player.turnLeft()
  }
  if (arrowKey.keyCode === 39) {
    player.turnRight()
  }
})
document.addEventListener("keyup", (arrowKey) => {
  player.speedX = 0
  player.speedY = 0
})

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    myGameArea.start()
  }
}