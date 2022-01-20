window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    carGame.init()
  }
};

// -------------------------------------------

const carGame = {
  gameSize: { w: undefined, h: undefined },
  ctx: undefined,
  obstacles: [],
  framesIndex: 0,
  score: 0,

  init() {
    this.setContext()
    this.setSize()
    this.createCar()
    this.createObstacles()
    this.drawAll()
    this.setEventHandlers()
    this.endGame()
    this.drawScore()
  },

  setContext() {
    this.ctx = document.getElementById('canvas').getContext('2d')
  },

  setSize() {
    this.gameSize = { w: 500, h: 700 }
  },

  drawRoad() {
    // Green rectangule
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)

    // Grey rectangle
    this.ctx.fillStyle = 'grey'
    this.ctx.fillRect(40, 0, 420, this.gameSize.h)

    // Left white line
    this.ctx.lineWidth = 15
    this.ctx.strokeStyle = 'white'
    this.ctx.beginPath()
    this.ctx.moveTo(60, 0)
    this.ctx.lineTo(60, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()

    // Right white line
    this.ctx.beginPath()
    this.ctx.moveTo(440, 0)
    this.ctx.lineTo(440, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()

    // Dashed middle line
    this.ctx.lineWidth = 10
    this.ctx.beginPath()
    this.ctx.moveTo(250, 0)
    this.ctx.setLineDash([40, 20])
    this.ctx.lineTo(250, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.setLineDash([0, 0])
    this.ctx.closePath()
  },

  createCar() {
    this.car = new Car(this.ctx, 250, 550, 80, 140)
  },

  createObstacles() {
    this.obstacles.push(new Obstacle(this.ctx))
  },

  drawAll() {
    intervalId = setInterval(() => {
      this.framesIndex++
      this.framesIndex % 60 === 0 ? this.createObstacles() : null
      this.clearAll()
      this.drawRoad()
      this.car.draw()
      this.obstacles.forEach(elm => {
        elm.moveDown()
        elm.draw()
      })
      this.drawScore()
      this.endGame()
    }, 60)
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },

  drawScore() {
    this.ctx.font = '40px Arial'
    this.ctx.fillStyle = 'white'
    this.ctx.fillText(`Score: ${this.score}`, 70, 50)
  },

  endGame() {
    this.obstacles.forEach((elem) => {
      // IF COLLISION...
      if (this.car.carPos.x < elem.obstaclePos.x + elem.obstacleSize.w &&
        this.car.carPos.x + this.car.carSize.w > elem.obstaclePos.x &&
        this.car.carPos.y < elem.obstaclePos.y + elem.obstacleSize.h &&
        this.car.carSize.h + this.car.carPos.y > elem.obstaclePos.y) {

        // GAME OVER
        clearInterval(intervalId)
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.75)'
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
        //Print GAME OVER
        this.ctx.font = '60px Arial'
        this.ctx.fillStyle = 'red'
        this.ctx.fillText('Game Over!', 70, 350)
        //Print Final Score
        this.ctx.font = '20px Arial'
        this.ctx.fillStyle = 'white'
        this.ctx.fillText(`Your final score: ${this.score}`, 70, 400)

      } else {
        // Update Score
        if (elem.obstaclePos.y === 600) {
          this.score++
        }
      }
    })
  },

  setEventHandlers() {
    document.addEventListener('keydown', event => {
      const { key } = event
      key === 'ArrowRight' ? this.car.moveRight() : null
      key === 'ArrowLeft' ? this.car.moveLeft() : null
    })
  }
}
