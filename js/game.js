class Game {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId)
    this.ctx = this.canvas.getContext('2d')

    this.fps = 1000 / 60
    this.drawInterval = undefined

    this.background = new Background(this.ctx)
    this.car = new Car(this.ctx, this.canvas.width / 2 - 25, this.canvas.height - 120)


    this.obstacles = []
    this.obstacleCounter = 0
  }

  start() {
    if (!this.drawInterval) {
      this.drawInterval = setInterval(() => {
        this.clear()
        this.move()
        this.draw()
        this.checkCollisions()
        this.obstacleCounter++

        if (this.obstacleCounter % OBS_FRAMES === 0) {
          this.addObstacle()

          this.obstacleCounter = 0
        }

        this.updateScore()

      }, this.fps);
    }


  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    //this.obstacles  = this.obstacles.filter(obstacle => obstacle.y + obstacle.height < this.canvas.height)

    this.score = this.obstacles.filter(obstacle => obstacle.y > this.car.y + this.car.height).length

  }

  gameOver() {
    clearInterval(this.drawInterval)

    this.ctx.save()
    this.ctx.fillStyle = 'black'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

    this.ctx.font = '30px Arial'
    this.ctx.fillStyle = 'red'
    this.ctx.textAlign = 'center'
    this.ctx.fillText(
      'Game over!',
      this.canvas.width / 2,
      this.canvas.height / 2 - 100,
    )

    this.ctx.font = '20px Arial'
    this.ctx.fillStyle = 'white'
    this.ctx.textAlign = 'center'
    this.ctx.fillText(
      'Your final score:',
      this.canvas.width / 2,
      this.canvas.height / 2,
    )
    this.ctx.font = '30px Arial'
    this.ctx.fillText(
      `${this.score}`,
      this.canvas.width / 2,
      this.canvas.height / 2 + 50,
    )

    this.ctx.restore()
  }

  draw() {
    this.background.draw()
    this.car.draw()
    this.obstacles.forEach(obstacle => obstacle.draw())

    this.ctx.save()
    this.ctx.font = '20px Arial'
    this.ctx.fillStyle = 'white'
    this.ctx.fillText(`Score: ${this.score}`, 80, 25)
    this.ctx.restore()
  }

  move() {
    this.background.move()
    this.car.move()
    this.obstacles.forEach(obstacle => obstacle.move())
  }

  onKeyEvent(event) {
    this.car.onKeyEvent(event)
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  addObstacle() {
    const minSpace = this.canvas.width - this.car.img.width * 1.75
    const randomWidth = this.getRandomArbitrary(100, Math.floor(Math.random() * minSpace) + 100)
    const randomStart = this.getRandomArbitrary(60, this.canvas.width / 2)

    this.obstacles.push(
      new Obstacle(this.ctx, randomStart, 50, randomWidth),
    )
  }

  checkCollisions() {
    if (this.obstacles.some(obstacle => this.car.collidesWith(obstacle))) {
      this.gameOver()
    }
  }

  updateScore() {
    this.obstacles.forEach((obstacle) => this.car.updateScore(obstacle))
  }
}