const gameCar = {
    canvasDom: undefined,
    ctx: undefined,
    init(id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext("2d")
        this.drawBackground()
    },
    drawBackground() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 500, 700)

        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(35, 0, 430, 700)

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([0, 0])
        this.ctx.beginPath()
        this.ctx.moveTo(50, 0)
        this.ctx.lineTo(50, 700)
        this.ctx.stroke()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([0, 0])
        this.ctx.beginPath()
        this.ctx.moveTo(450, 0)
        this.ctx.lineTo(450, 700)
        this.ctx.stroke()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.setLineDash([25, 20])
        this.ctx.beginPath()
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
    },
}