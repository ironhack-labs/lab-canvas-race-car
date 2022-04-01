window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    animatedApp.init('canvas')
  }

  const animatedApp = {

    name: 'Island Racer',
    canvasNode: undefined,
    ctx: undefined,
    canvasNode: undefined,
    gameSize: { w: 500, h: 700 },
    car: undefined,


    init(canvas) {

      this.canvasNode = document.querySelector(`#${canvas}`)
      this.ctx = this.canvasNode.getContext("2d")
      this.setDimensions()
      this.createCar()
      this.drawAll()
      this.start()
      this.setEventListeners()

    },

    setDimensions() {
      this.gameSize = {
        w: 500,
        h: 700
      }
    },



    drawAll() {
      this.drawRoad()
      this.drawLinearSquare()
      this.drawDashedLine()
      this.car.draw()
    },

    setEventListeners() {
      document.onkeyup = event => {
        const { key } = event
        if (key === 'ArrowLeft') {
          this.car.moveLeft()
        }
        if (key === 'ArrowRight') {
          this.car.moveRight()
        }
      }
    },

    createCar() {
      this.car = new Car(this.ctx, 205, 540, 70, 150)
    },

 



    drawRoad() {
      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(50, 0, this.gameSize.w - 100, this.gameSize.h)

    },


    drawLinearSquare() {
      this.ctx.fillStyle = 'white'
      this.ctx.fillRect(70, 0, this.gameSize.w - 490, this.gameSize.h)
      this.ctx.fillStyle = 'white'
      this.ctx.fillRect(420, 0, this.gameSize.w - 490, this.gameSize.h)

    },


    drawDashedLine() {
      this.ctx.lineWidth = 10
      this.ctx.strokeStyle = 'white'

      this.ctx.beginPath()
      this.ctx.moveTo(240, 700)
      this.ctx.lineTo(240, 0)
      this.ctx.setLineDash([30, 30])
      this.ctx.stroke()
      this.ctx.closePath()

    },

    start() {
      setInterval(() => {
        this.drawAll()
      }, 30)
    },

  }

  console.log(animatedApp)
}

