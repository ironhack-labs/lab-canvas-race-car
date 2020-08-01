const car = new Image()
car.src = '/images/car.png'

const road = new Image()
 road.src = '/images/road.png'

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

class GameBoard {
  constructor() { 
    this.width = 500
    this.height = 700
  }

  drawRoad() {
    ctx.drawImage(road, 0, 0, canvas.width, canvas.height)
  }

}

class Car {
  constructor (x, y, speed, width, height) {
    this.x = x
    this.y = y
    this.speed = speed
    this.width = width
    this.height = height
  }

  moveLeft() {
    if (this.x >= 0)
    this.x -= this.speed
  }

  moveRight() {
    if (this.x <= canvas.width - this.width)
    this.x += this.speed
  }

  drawCar() {
    let x = this.x
    let y = this.y
    let width = this.width
    let height = this.height
    
    ctx.drawImage(car, x, y, width, height)
  }

}

class Obstacles {
  constructor(x, y, speed, width, height) {
    this.x = x
    this.y = y
    this.speed = speed
    this.width = width
    this.height = height
  }

  drawObstacles() {
    ctx.beginPath()
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }

  moveObstacles() {
    this.y += this.speed
  }
  
}

class Game {
    constructor() {
      this.gameBoard = new GameBoard()
      this.car = new Car(220, 550, 10, 50, 100)
      this.obstacles = []
      this.score = 0
      this.statusStop = false
    }

    startGame() {
      this.gameBoard.drawRoad()
      this.addListeners()
      requestAnimationFrame(this.gameLoop.bind(this))
      this.intervalId = setInterval(this.addObstacles.bind(this), 1000)
    }

    gameLoop() {
      ctx.clearRect(0,0, canvas.width, canvas.height)
      this.gameBoard.drawRoad()
      this.car.drawCar()

      this.obstacles.forEach(obstacle => {
        obstacle.drawObstacles()
        obstacle.moveObstacles()
      })

      this.updateScore()
      this.countObstacles(this.obstacles)
      this.collisionDetection(this.obstacles)

      if (!this.statusStop) {
      requestAnimationFrame(this.gameLoop.bind(this))
      }
    }

    collisionDetection(obstacles) {
      obstacles.forEach(obstacle => {
        if (this.car.x < obstacle.x + obstacle.width && this.car.x + this.car.width > obstacle.x && this.car.y < obstacle.y + obstacle.height && this.car.y + this.car.height > obstacle.y) {
          this.gameOver()
          this.stop()
        } 
      })
    }

    addObstacles() {
      const randomX = 10+ (Math.random() * 400)
      const randomY = 10 + (Math.random() * 100)
      const randomWidth = 100 + (Math.random() * 200)
      const obstacles = new Obstacles(randomX, randomY, 5, randomWidth, 20)
      this.obstacles.push(obstacles)
    }

    countObstacles(obstacles) {
      obstacles.forEach((obstacle, index) => {
        if (obstacle.y > 600) {
          this.score +=1
          obstacles.splice(index, 1)
        }
    })
  }

    stop() {
      clearInterval(this.intervalId)
      this.statusStop = true
    }

    gameOver() {
      const gameOver = 'GAME OVER'
      ctx.fillStyle = 'red'
      ctx.font = '30px Arial'
      ctx.fillText(gameOver, 150, 300)
    }

    updateScore() {
      ctx.fillStyle = 'black'
      ctx.font = '24px Arial'
      ctx.fillText(this.score, 10, 50)
    }

    addListeners() {
      document.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'ArrowLeft':
            this.car.moveLeft()
            break;
          case 'ArrowRight':
            this.car.moveRight()
            break;
        }
      })
   }
}
const game = new Game()

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.startGame();
  };
}