window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    raceCarGame.init()
  }
};

const raceCarGame = {
  appName: 'Race Car Game',
  author: 'Guillermo Ávila',
  version: '1.0.0',
  license: undefined,
  gameSize: { w: undefined, h: undefined },
  ctx: undefined,
  obstacles: [],
  framesIndex: 0,
  intervalId: undefined,
  score: 0,
  init() {
    this.setContext()
    this.setSize()
    this.drawRoad()
    this.createCar()
    this.drawAll()
    this.setEventHandlers()
    this.clearScreen()
    this.createObstacle()
    this.detectCollision()
    this.printScore()
    this.countScore()

  },
  setContext() {
    this.ctx = document.querySelector('#canvas').getContext('2d')
  },
  setSize() {
    this.gameSize = {
      w: 500,
      h: 700
    }
  },
  drawRoad() {
    // rectángulo gris = fondo
    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)

    // rectángulo verde
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(0, 0, this.gameSize.w / 15, this.gameSize.h)
    this.ctx.fillRect(this.gameSize.w - this.gameSize.w / 15, 0, this.gameSize.w / 15, this.gameSize.h)

    // líneas de carretera
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    //izq
    this.ctx.beginPath()
    this.ctx.moveTo(50, 0)
    this.ctx.lineTo(50, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
    // derecha
    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w - 50, 0)
    this.ctx.lineTo(this.gameSize.w - 50, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
    // discontinua
    this.ctx.beginPath()
    this.ctx.moveTo(this.gameSize.w / 2, 0)
    this.ctx.setLineDash([60, 20])
    this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
    this.ctx.stroke()
    this.ctx.closePath()
    this.ctx.setLineDash([0, 0])
  },
  createCar() {
    // instancia de nuevo elemento de la clase coche
    this.car = new Car(this.ctx, this.gameSize.w / 2 - 37, this.gameSize.h - 140, 75)
  },
  setEventHandlers() {
    document.addEventListener('keydown', event => {
      // const key = event.key
      const { key } = event
      // ternary operator
      key === 'ArrowRight' ? this.car.moveRight() : null
      key === 'ArrowLeft' ? this.car.moveLeft() : null
    })
  },
  createObstacle() {
    // instancia de nuevo elemento de la clase obstáculo
    this.obstacles.push(
      new Obstacle(this.ctx)
    )
  },
  clearScreen() {
    // limpiar la pantalla para los movimientos
    this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
  },
  detectCollision() {
    this.obstacles.forEach((eachObstacle) => {
      if (this.car.carPos.x < eachObstacle.obstaclePos.x + eachObstacle.obstacleSize.w &&
        this.car.carPos.x + this.car.carSize.w > eachObstacle.obstaclePos.x &&
        this.car.carPos.y < eachObstacle.obstaclePos.y + eachObstacle.obstacleSize.h &&
        this.car.carSize.h + this.car.carPos.y > eachObstacle.obstaclePos.y) {
        console.log('colision')
        this.gameOver()
        return true
      }
      return false
    })
  },
  countScore() {
    this.obstacles.forEach((eachObstacle) => {
      if (eachObstacle.obstaclePos.y === this.gameSize.h) {
        this.score += 1
        console.log(this.score)
      }
    })
  },
  printScore() {
    this.ctx.font = '20px sans-serif'
    this.ctx.fillStyle = 'black'
    this.ctx.fillText(`SCORE: ${this.score}`, 20, 40)
  },
  gameOver() {
    clearInterval(this.intervalId)
    // red background
    this.ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
    this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)

    // text 
    this.ctx.font = '40px Arial'
    this.ctx.fillStyle = 'black'
    this.ctx.fillText('GAME OVER', 130, 350)

    this.ctx.font = '20px Arial'
    this.ctx.fillText(`FINAL SCORE: ${this.score}`, 170, 400)
  },
  drawAll() {
    // que dibuje todo
    this.intervalId = setInterval(() => {
      this.framesIndex++
      this.framesIndex % 40 === 0 ? this.createObstacle() : null
      this.clearScreen()
      this.drawRoad()
      this.car.draw()
      this.obstacles.forEach(elm => {
        elm.move()
        elm.draw()
      })
      this.detectCollision()
      this.countScore()
      this.printScore()
    }, 40)
  }



}