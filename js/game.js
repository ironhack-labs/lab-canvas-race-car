class Game {
  constructor(ctx) {
    this.ctx = ctx
    this.background = new Background(ctx)

    this.img = new Image()
    this.img.src = './images/car.png'

    this.car = new Car(this.ctx, 210, 500, 80, 160, this.img)

    this.interval = undefined

    this.isStarted = false

    this.obstacles = []
    this.obstacleDrawCount = 0

    this.score = 0
  }

  start() {
    this.setListeners()
        if (!this.isStarted) {
            this.interval = setInterval(() => {
                this.clear()

                this.drawBackground()
                
                this.move()

                this.drawCar()

                this.drawObstacles()

                this.checkCollitions()

                this.drawScore()

                this.obstacleDrawCount++

                if (this.obstacleDrawCount % 240 === 0) {
                    this.addNewObstacle()
                    this.obstacleDrawCount = 0
                }

                }, 1000 / 60)

        this.isStarted = true
        }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

    this.obstacles = this.obstacles.filter(obstacle =>
        obstacle.y < this.ctx.canvas.height
    )
  }

  drawBackground() {
    this.background.draw()
  }

  drawCar() {
    this.car.draw()
  }

  drawObstacles() {
      this.obstacles.forEach(obstacle => {
        obstacle.draw()
      });
      
  }

  addNewObstacle() {
    let maxWidth = this.ctx.canvas.width - 150
    let minWidth = 250
    let obsWidth = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth)
    let maxX = this.ctx.canvas.width - minWidth
    let minX = -minWidth
    let obsPosition = Math.floor(Math.random() * (maxX - minX) + minX)

    this.obstacles.push(new Obstacle(
        this.ctx, 
        obsPosition, 
        0, 
        obsWidth
        )     
    )
    this.score++
  }

  move() {
    this.background.move()
    this.obstacles.forEach(obstacle => {
        obstacle.move()
    });
  }

  stop() {
    clearInterval(this.interval)
    this.isStarted = false
      
    this.ctx.save()
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

    this.ctx.font = '48px Arial'
    this.ctx.fillStyle = '#870007'
    this.ctx.textAlign = 'center'
    this.ctx.fillText(
        'Game over!',
    this.ctx.canvas.width / 2,
    this.ctx.canvas.height / 2 - 50,
    )
    this.ctx.font = '32px Arial'
    this.ctx.fillStyle = 'white'
    this.ctx.textAlign = 'center'
    this.ctx.fillText(
        `Your score: ${this.score * 100} points`,
    this.ctx.canvas.width / 2 ,
    this.ctx.canvas.height / 2 + 50,
    )
    this.ctx.restore()
  }

  checkCollitions() {
      if (this.obstacles.some(obstacle => this.car.collidesWith(obstacle)))
        {
            this.stop()
        }
  }

  drawScore() {
    ctx.save()
    this.ctx.font = '18px Arial'
    this.ctx.fillStyle = 'white'
    this.ctx.textAlign = 'center'
    this.ctx.fillText(
        `Score: ${this.score * 100}`,
        this.ctx.canvas.width - 125,
        this.ctx.canvas.height - 50,
        )
    ctx.restore()
  }

  setListeners() {
    document.onkeydown = event => {
      switch (event.keyCode) {
        case RIGHT:
          this.car.move(vel)
          break;
        case LEFT:
          this.car.move(-vel)
          break;
      }
    }
  }
}

const RIGHT = 39
const LEFT = 37
const vel = 10