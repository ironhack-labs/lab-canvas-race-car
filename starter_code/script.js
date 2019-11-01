window.onload = function () {
  const game = {
    title: 'Aplicación de generación de obstáculos',
    author: 'Ger',
    license: undefined,
    version: '1.0',
    canvasDom: undefined,
    ctx: undefined,
    wWidth: undefined,
    wHeight: undefined,
    car: undefined,
    obstacles: [],
    frames: 1,
    intervalId: 0,
    score: 0,
    span: document.getElementsByTagName("span")[0],
    init(id) {
      this.canvasDom = document.getElementById(id)
      this.ctx = this.canvasDom.getContext('2d')
      this.setDimensions()
      this.drawFilledRectangle()
      this.drawLine()
      this.setEventListeners()
      this.drawStyleLine()
    },

    setDimensions() {
      document.getElementsByTagName('body')[0].style.margin = 0
      this.canvasDom.setAttribute('height', window.innerHeight)
      this.canvasDom.setAttribute('width', window.innerWidth * 0.40)
      this.canvasDom.style.backgroundColor = "green"
      this.wWidth = (window.innerWidth * 0.40)
      this.wHeight = window.innerHeight
    },

    drawFilledRectangle() {
      this.ctx.fillStyle = "grey"
      this.ctx.fillRect(50, 0, this.wWidth - 100, this.wHeight)
    },

    drawLine() {
      this.ctx.strokeStyle = "white"
      this.ctx.lineWidth = 10
      this.ctx.beginPath()
      this.ctx.setLineDash([40, 0])
      this.ctx.moveTo(70, 0)
      this.ctx.lineTo(70, this.wHeight)
      this.ctx.stroke()
      this.ctx.moveTo(this.wWidth - 70, 0)
      this.ctx.lineTo(this.wWidth - 70, this.wHeight)
      this.ctx.stroke()

    },

    drawStyleLine() {
      this.ctx.strokesStyle = "white"
      this.ctx.lineWidth = 5
      this.ctx.beginPath()
      this.ctx.setLineDash([40, 20])
      this.ctx.moveTo((this.wWidth / 2) - 2.5, 5)
      this.ctx.lineTo((this.wWidth / 2) - 2.5, this.wHeight)
      this.ctx.stroke()
    },
    gameOver() {
      clearInterval(this.intervalId)
      this.ctx.fillStyle = "red"
      this.ctx.font = "80px sans-serif"
      this.ctx.fillText("GAME OVER", 50, 200, )
      this.ctx.font = "40px sans-serif"
      this.ctx.fillText("Your Final Score:", 80, 110)
      this.ctx.fillStyle = "white"
      this.ctx.fillText(Math.round(this.score), 440, 110)
    },

    setEventListeners() {
      document.onkeydown = e => {
        switch (e.keyCode) {
          case 37:
            this.car.goLeft()
            break
          case 39:
            this.car.goRight()
            break
        }
      }
    },

    controlCar(name) {
      this.car = new Car(this.ctx, name)
      this.intervalId = setInterval(() => {
        this.updateGameArea()
      }, 10)

    },

    clearScreen() {
      this.ctx.clearRect(0, 0, this.wWidth, this.wHeight)
    },

    updateGameArea() {
      this.clearScreen()
      this.drawFilledRectangle()
      this.drawLine()
      this.drawStyleLine()
      this.manageObstacles()
      this.car.draw()
      this.score += 0.1
      this.span.innerText = (Math.round(this.score))
      this.colision()
    },

    colision() {
      if (this.obstacles.length > 1) {
        for (let i = 0; i < this.obstacles.length; i++) {
          if ((this.obstacles[i]._posY >= 510) && (this.obstacles[i]._posY <= 680)) {
            if (((this.car._posX + 100) > this.obstacles[i]._posX) && ((this.obstacles[i]._posX + this.obstacles[i]._width) > this.car._posX)) {
              this.gameOver()
              //parar el juego
            }
          }
        }
      }
    },

    manageObstacles() {
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].update()
      }

      this.frames += 1
      if (this.frames % 300 === 0) {
        this.obstacles.push(new Obstaculo(this.ctx, 40, 30, 50, "red"))
        if (this.obstacles.length == 4) {
          this.obstacles.shift()
        }
      }
    },

    startGame() {
      this.controlCar("car.png")
    },
  }

  game.init("myCanvas")
  document.getElementById("start-button").onclick = function () {
    game.startGame();
  };
}