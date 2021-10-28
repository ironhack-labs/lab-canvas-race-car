const raceCarGame = {
    name: "Star Game",
    description: "Canvas app",
    version: '1',
    author: 'Analía López',
    canvasID: undefined,
    ctx: undefined,
    canvasDom: undefined,
    canvasSize:{width :500, height: 700},
    car: undefined,
    carPosX: 220,
    
    init() {
        
        this.canvas = document.getElementById("micanvas");
        this.ctx = canvas.getContext("2d");
        this.setContext()
        this.drawing()
        this.drawCarImage(this.carPosX)
        this.setListeners()
             
        
    },

    setContext() {
        this.canvasDOM = document.querySelector("#canvas")
        this.ctx = this.canvasDOM.getContext("2d")
      },

    drawing(){
        this.drawBackGround()
        this.drawLateralLines()
        this.drawCenterLines()
    },

    drawBackGround() {

        // Verde
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 500, 700)

        // Gris
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(50, 0, 400, 700)

    },

    drawLateralLines() {

        // Linea derecha blanca
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(60, 0, 15, 700)


        // Linea izquierda blanca
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect((this.canvasSize.width - 75), 0, 15, 700)
     },

     drawCenterLines() {

        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.setLineDash([25, 75])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.closePath()
        this.ctx.stroke()

    },

    drawCarImage(posx) {
        this.car = new Image()
        this.car.src = './images/car.png'
        this.car.onload = () => this.ctx.drawImage(this.car, posx, 560, 60, 100)
    },

    setListeners() {
        document.onkeydown = e => {
          console.log("La tecla: ", e.key)
          e.key === 'ArrowLeft' ? this.moveLeft() : null
          e.key === 'ArrowRight' ? this.moveRight() : null
        }
    },

    moveLeft() {
        this.carPosX -= 50
        this.drawCarImage(this.carPosX)
    },

    moveRight() {
        this.carPosX += 50
        this.drawCarImage(this.carPosX)
    },

    // clearScreen() {
    //     this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    // },

}