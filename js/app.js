const carGame = {
  ctx: undefined,
  canvas: document.querySelector('#canvas'),
  gameSize: { w: undefined, h: undefined },
  car: undefined,
  carWidth: 50,
  obstacles: [],
  frames: 0,
  score: 0,
  gameplayIntervalId: null,
  moveDirection: 0,


  init() {
    this.setContext()
    this.setSize()
    this.createCar()
    this.setEventHandlers()
    this.drawGameplay()
  },


  setContext() {
    this.ctx = canvas.getContext("2d")
  },
  setSize() {
    this.gameSize = {
      w: 500,
      h: 700
    }
    canvas.setAttribute('width', this.gameSize.w)
    canvas.setAttribute('height', this.gameSize.h)
  },

  drawRoad() {
    //Grass
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
    //road
    this.ctx.fillStyle = "grey"
    this.ctx.fillRect(this.gameSize.w * 0.05, 0, this.gameSize.w * 0.9, this.gameSize.h)
    //whiteLines
    this.ctx.fillStyle = "white"
    this.ctx.fillRect(this.gameSize.w * 0.075, 0, this.gameSize.w * 0.025, this.gameSize.h)
    this.ctx.fillStyle = "white"
    this.ctx.fillRect(this.gameSize.w * 0.9, 0, this.gameSize.w * 0.025, this.gameSize.h)
    //lines
    this.ctx.lineWidth = 7
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w / 2 - 3.5, this.gameSize.h + (this.frames * 6) % 50)
    this.ctx.setLineDash([30, 20])
    this.ctx.lineTo(this.gameSize.w / 2 - 3.5, (this.frames * 6) % 50 - 150)
    this.ctx.stroke()
    this.ctx.closePath()

  },

  createCar() {
    this.car = new Car(this.ctx, this.gameSize.w / 2 - this.carWidth / 2, this.gameSize.h - 140, this.carWidth, this.gameSize)
  },

  genObstacle() {
    const obstacleWidth = Math.random() * this.gameSize.w * 0.35 + this.gameSize.w * 0.25
    this.obstacles.push(new Obstacle(this.ctx, Math.random() * this.gameSize.w * .75 * ((this.gameSize.w - obstacleWidth) / this.gameSize.w) + (this.gameSize.w * 0.085), 0, obstacleWidth, this.gameSize))
    // Math.floor(Math.random() * this.gameSize.w)
    console.log("trying generating obstacle")
  },

  drawCar() {
    this.car.draw()
  },

  drawText() {
    this.ctx.font = '30px arial'
    this.ctx.fillText(`Score: ${this.score}`, 65, 50)
  },


  drawGameplay() {
    this.gameplayIntervalId = setInterval(() => {
      this.clearAll()
      this.drawRoad()
      this.car.move(this.moveDirection)
      this.drawCar()
      this.drawText()
      this.obstacles.forEach(obs => {
        obs.move()
        obs.draw()
        if (obs.obsPos.y >= this.gameSize.h) {
          this.obstacles.splice(this.obstacles.indexOf(obs), 1)
          this.score++
        }
      })
      if (this.checkCollisions()) {
        console.log("FINISHING GAME")
        this.drawEnding()
        clearInterval(this.gameplayIntervalId)
      }
      else {
        console.log("NOOOOOOOO")
      }
      if (this.frames % 50 == 0) {
        this.genObstacle()
      }
      this.frames++
    }, 33)
  },

  drawEnding() {
    this.clearAll()
    this.ctx.fillStyle = "black"
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
    this.ctx.fillStyle = "red"
    this.ctx.font = '40px arial'
    this.ctx.fillText(`Game Over!:`, this.gameSize.w / 2 - 100, this.gameSize.w / 2)
    this.ctx.fillStyle = "white"
    this.ctx.font = '50px arial'
    this.ctx.fillText(`Your final score`, this.gameSize.w / 3 - 100, this.gameSize.w / 2 + 100)
    this.ctx.font = '50px arial'
    this.ctx.fillText(`${this.score}`, this.gameSize.w / 2, this.gameSize.w / 1.5 + 100)
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  checkCollisions() {
    let obstacleFound = false
    this.obstacles.forEach(obstacle => {
      const rect1 = { x: this.car.carPos.x, y: this.car.carPos.y, width: this.car.carSize.w, height: this.car.carSize.w }
      const rect2 = { x: obstacle.obsPos.x, y: obstacle.obsPos.y, width: obstacle.obsSize.w, height: obstacle.obsSize.h }

      if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y) {
        obstacleFound = true
      }
    })
    return obstacleFound
  },

  setEventHandlers() {
    document.addEventListener('keydown', event => {
      const { key } = event
      if (key === 'ArrowRight') {
        this.moveDirection = 1
      }
      else if (key === 'ArrowLeft') {
        this.moveDirection = -1
      }
    })
    // document.onkeyup = event => {
    //   const { key } = event
    //   this.moveDirection = 0
    // }
  }
}