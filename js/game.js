class Game {
  constructor(ctx) {
    this.ctx = ctx
    this.background = new Background(ctx)
    this.player = new Player(ctx, 225, 550)
        
    this.interval = undefined

    this.obstacleArray = []
    this.obstacleDrawCount = 0

    setInterval(() => {
      this.obstacleArray.push(new Obstacle(ctx))
    }, 1000)

    this.points = 0
  }
      

  start() {
    this.setListeners()

    this.interval = setInterval(() => {
      this.clear()

      this.draw()
      
      this.move()

      this.checkCollisions()

      this.obstacleDrawCount++

      if (this.obstacleDrawCount % PIPE_FRAMES === 0) {
        this.addObstacles()

        this.obstacleDrawCount = 0
      }

    }, 1000 / 60)
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    this.obstacleArray = this.obstacleArray.filter(obstacle => obstacle.y <= this.ctx.canvas.height)
    }

  draw() {
    this.background.draw()
    this.player.draw()
    this.obstacleArray.forEach(obs => obs.draw())

    this.ctx.save()
      this.ctx.font = '20px Arial'
      this.ctx.fillStyle = 'white'
      this.ctx.fillText(`Score: ${this.points}`, 35, 30)
    this.ctx.restore()
  }

  move() {
    this.background.move()
    this.player.move()
    this.obstacleArray.forEach(obs => obs.move(this.obstacleArray.length))
  }
  
  pause() {
    clearInterval(this.interval)

    this.ctx.save()

    this.ctx.fillStyle = 'black'
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

    this.ctx.font = '30px Arial'
    this.ctx.fillStyle = 'white'
    this.ctx.textAlign = 'center'
    this.ctx.fillText(
      'Game over!',
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2 - 100,
    )
    this.ctx.font = '25px Arial'
    this.ctx.fillStyle = 'white'
    this.ctx.fillText(
      `Your final score ${this.points}`,
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2 
    )
    
    this.ctx.restore()
  }

  setListeners() {
    document.onkeydown = (event) => {
      switch(event.keyCode) {
        case RIGHT:
          this.player.vx = 5
          break;
        case LEFT:
          this.player.vx = -5
          break;
      }
    }

    document.onkeyup = (event) => {
      if (event.keyCode) {
        this.player.vx = 0
      }
    }
  }
  
  addObstacles() {
    const minSpace = this.ctx.canvas.width - this.player.w * 2
    const space = Math.floor(Math.random() * minSpace)
    this.obstacleArray.push(
      new Obstacle(
        this.ctx,
        this.ctx.canvas.width - space, 
      )
    )
    this.points +=1
  } 
  
  checkCollisions() {
    if (this.obstacleArray.some(obstacle => this.player.collidesWith(obstacle))) {
      this.pause()
    }
  }

}