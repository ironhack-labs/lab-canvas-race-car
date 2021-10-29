
const gameCar = {
    name: 'Basic shapes app',
    description: 'Canvas app fro basic shapes drawing',
    version: '1.0.0',
    author: 'Guido Crespo',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { width: 500, height: 700 },
  
    init() {
      this.setContext()
      this.setDimensions()
      this.clearScreen()
      this.drawTheRoad()
      this.setListeners()
      this.insertImage()
    },
  
    setContext() {
      this.canvasDOM = document.querySelector("#canvas")
      this.ctx = this.canvasDOM.getContext("2d")
    },
  
    setDimensions() {
      this.canvasSize.width = window.innerWidth
      this.canvasSize.height = window.innerWidth
    },

    drawTheRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.width, this.canvasSize.height)
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(50, 0, 400, this.canvasSize.height)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(60, 0, 15, this.canvasSize.height )
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(425, 0, 15, this.canvasSize.height )
        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.setLineDash([20, 50])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
      },

      insertImage() {
          const carImage = new Image()
          carImage.src = './images/car.png'
          carImage.onload = () => this.ctx.drawImage(carImage, car.posX, car.posY, 60, 80)
      },

      setListeners() {
        document.onkeydown = e => {
          e.key === 'ArrowLeft' ? car.moveLeft() : null
          e.key === 'ArrowRight' ? car.moveRight() : null
        }
      },
      
      clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
      },

}


const car = {
    posX: 220,
    posY: 620, 

    moveLeft() {
        car.posX < 85 ? this.posX -= 0 : this.posX -= 10
    },

    moveRight() {
        car.posX > 350 ? this.posX += 0 : this.posX += 10;
    }
}