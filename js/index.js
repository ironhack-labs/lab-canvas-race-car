
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

class Road {
  constructor(x, y) {
    this.x = x
    this.y = y
    
    const img = new Image()
    img.onload = () => {
      this.img = img
      this.draw()
    }
    img.src = 'images/road.png'
  }
  
  draw() {
    ctx.drawImage(this.img, 0, 0, canvas.width, canvas.height)
  }

  clear() {
    ctx.clearRect(this.x, this.y, canvas.width, canvas.height)
  }
}

class Car {
  constructor() {
    this.x = 225
    this.y = 575
    this.width = 50
    this.height = 100
    this.speed = 15
    
    const img = new Image ()
    img.onload = () => {
      this.img = img
      this.draw()
    }
    img.src = 'images/car.png'
  }
  
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.fillText('Score: ' + score, 10, 50)
		ctx.font = '30px Arial'
		ctx.fontWeight = 'bold'
		ctx.fillStyle = 'red'
  }

  clear() {
    ctx.clearRect(this.x, this.y, this.width, this.height)
  }
  
  moveLeft() {
    this.x -= this.speed
    if (this.x <= 0) {
      this.x == 0
    }
  }
  
  moveRight() {
    this.x += this.speed
    if (this.x >= 500) {
      this.x == 500
    }
  }

  keyControls() {
    window.onkeydown = e => {
      switch (e.key) {
        case 'ArrowLeft':
          this.moveLeft();
          break;
        case 'ArrowRight':
          this.moveRight();
          break;
      }
    };
  }
}

class GameArea {
  constructor() {
    this.gameOver = false;
  }

  start() {
    const road = new Image()
    road.onload = () => {
      this.road = road
      this.draw()
    }
    this.road.src = 'images/road.png'
  }

  draw() {
    ctx.drawImage(this.road, 0, 0, canvas.width, canvas.height)
  }

  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  over() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = 'black'
		ctx.fillRect(0, 175, canvas.width, canvas.height / 2)
		ctx.font = '30px Arial'
		ctx.fontWeight = 'bold'
		ctx.fillStyle = 'red'
		ctx.fillText('Game Over', 150, 250)
		ctx.fillText(`Your final score:`, 100, 300)
		ctx.fillText(`${score}`, 200, 350)
  }

  stop() {
    this.gameOver = true
    game.over()

    randObs = []
    console.log('Game Over');
  }

  checkCollisions() {
    randObs.forEach((obstacle) => {
      if (obstacle.collision(car)) {
        this.stop()
      }
    })
  }
}


class Obstacle {
  
  constructor() {
    this.x = Math.floor(Math.random() * (500 - this.width))
    this.y = 0
    this.width = Math.floor(Math.random() * (250 - 100) + 100)
    this.height = 20
  }
  
  draw() {
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  
  update() {
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.height)
    this.y += 5
  }
  
  clear() {
    ctx.clearRect(this.x, this.y, this.width, this.height)
  }
  
  add() {
    randObs.push(new Obstacle())
    randObs.forEach((obstacle) => {
      obstacle.draw()
      obstacle.update()
      if (obstacle.y > canvas.height) {
        randObs.shift()
      }
    });
  }
  
  collision(car) {
    return this.x < car.x + car.width
    && this.x + this.width > car.x
    && this.y < car.y + car.width
    && this.y + this.height > car.y
  }
}


let road = new Road(canvas.width, canvas.height)
let car = new Car()
let game = new GameArea()
let obstacle = new Obstacle()
let interval;
let score = 0;
let randObs = []

function startGame() {
  car.draw();
  car.keyControls();
  obstacle.draw();


  interval = setInterval(() => {
    update()
    console.log(randObs);
    score++
    obstacle.add()
  }, 1000 / 90)
}

let update = () => {
  if (!game.gameOver) {
    road.clear();
    game.clear();
    car.clear();
    road.draw();
    car.draw();
    randObs.forEach((obstacle) => {
      obstacle.draw()
      obstacle.update();
    });
    game.checkCollisions();
  } else {
    clearInterval(interval)
    game.stop()
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    console.log('game started')
  };
};
