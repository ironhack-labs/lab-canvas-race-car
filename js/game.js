const OBSTACLES_FRAMES = 120

class Game {
  constructor(ctx) {
    this.ctx = ctx;

    this.road = new Road(ctx);
    this.car = new Car(ctx);
    this.obstacles = []

    this.intervalId = undefined
    this.fps = 1000 / 60

    this.obstaclesFramesCount = 0

    this.score = 0

  }

  startGame() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => {
        if(this.obstaclesFramesCount % OBSTACLES_FRAMES === 0){
          this.addObstacle()
          this.obstaclesFramesCount = 0
        }

        //clear
        this.clear()

        //move
        this.move()

        //draw
        this.draw()
        
        this.checkCollissions()
        this.obstaclesFramesCount++


      }, this.fps)
    }
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    const previousObstaclesLength = this.obstacles.length

    this.obstacles = this.obstacles.filter(obstacle => obstacle.y + obstacle.height < this.ctx.canvas.height)
    if (this.obstacles.length < previousObstaclesLength) {
      this.score++
    }
  }

  draw() {
    this.road.draw()
    this.obstacles.forEach(obstacle => obstacle.draw());
    this.car.draw()
    this.drawScore()
  }

  drawScore() {
    this.ctx.save()

    this.ctx.fillStyle = 'white'
    this.ctx.font = ' bold 24px sans-serif'

    this.ctx.fillText(`Score: ${this.score} ptos`, 75, 45)

    this.ctx.restore()
  }

  move() {
    this.road.move();
    this.obstacles.forEach(obstacle => obstacle.move());
    this.car.move()
  }
  addObstacle() {
    const max = this.ctx.canvas.width - 60
    const x = Math.floor(Math.random() * max)
    this.obstacles.push(
      new Obstacle(this.ctx, x, 0)
    )
  }
  
  // (2/3) ASIGNAMOS EL EVENTO CREADO DEL "CAR" AL "GAME"
  setupListener(event) {
    this.car.setupListener(event)
  }
  checkCollissions() {
    const condition = this.obstacles.some(obstacle => this.car.collidesWith(obstacle))

    if (condition) {
      this.gameOver()
    }
  }

  gameOver() {
    clearInterval(this.intervalId)

    this.ctx.save()
    
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)

    this.ctx.fillStyle = 'red'
    this.ctx.textAlign = 'center'
    this.ctx.font = 'bold 32px sans-serif'
    this.ctx.fillText('Game Over!', this.ctx.canvas.width / 2, this.ctx.canvas.height / 2)
    this.ctx.fillStyle = 'white'
    this.ctx.textAlign = 'center'
    this.ctx.font = '30px sans-serif'
    this.ctx.fillText(`Your final score`, this.ctx.canvas.width / 2, 400)
    this.ctx.fillStyle = 'white'
    this.ctx.textAlign = 'center'
    this.ctx.font = '30px sans-serif'
    this.ctx.fillText(`${this.score}`, this.ctx.canvas.width / 2, 450)

    this.ctx.restore()
  }
}