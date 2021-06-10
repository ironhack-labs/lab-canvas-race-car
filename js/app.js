const loading = { // 
    name: 'Background green',
    description: 'Canvas app fro Car Race app',
    version: '1.0.0',
    author: 'Enrique VOZA',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { w: undefined, h: undefined },
    init() {
        this.setContext()
        this.setDimensions()
        this.drawBackGround()
        this.drawLines()
        this.drawCenter()
        this.drawCar()
    },
    setContext() {
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext('2d')
    },
    setDimensions() {
        this.canvasSize.w = 500
        this.canvasSize.h = 700
        this.canvasDOM.setAttribute('width', this.canvasSize.w,)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)

    },
    drawBackGround() {
        this.ctx.fillStyle = '#28a745'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 490, this.canvasSize.h) // Podría pintar una linea ahora que sé, jeje.
    },
    drawLines() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.moveTo(445, 0)
        this.ctx.lineTo(445, 700)
        this.ctx.stroke()
        this.ctx.closePath()
        this.ctx.lineWidth = 10

    },
    drawCenter() {
        this.ctx.fillStyle = 'white'

        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.setLineDash([60, 30])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawCar() {
        const imageInstance = new Image()
        imageInstance.src = 'images/car.png'
        imageInstance.onload = () => this.ctx.drawImage(imageInstance, 225, 622, 50, 75)
    }
}
