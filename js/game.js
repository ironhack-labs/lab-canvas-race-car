const basicCarRace = {
    appName: "Basic Car App",
    author: "JL",
    version: "1.0",
    license: undefined,
    ctx: undefined,
    canvasSize: {
        w: 500,
        h: 700
    },
    carInstance: undefined,
    carSpecs: {
        pos: { x: 300, y: 600 },
        size: { w: 100, h: 100 }
    },
    init() {
        this.setContext()
        this.setImageInstances()
        this.start()
        this.setEventListeners()
    },
    setContext() {
        this.ctx = document.querySelector("canvas").getContext("2d")
        console.log("contexto ---> this.ctx")
    },
    setEventListeners() {
        document.onkeyup = event => {

            const { key } = event

            if (key == 'ArrowLeft') {
                this.carSpecs.pos.x -= 10
            }

            if (key == 'ArrowRight') {
                this.carSpecs.pos.x += 10
            }
        }
    },
    drawFilledRectangle() {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(this.canvasSize.w / 2 - 250, 0, 500, this.canvasSize.h)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 50, this.canvasSize.h)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.canvasSize.w - 50, 0, 50, this.canvasSize.h)
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(55, 0, 14, this.canvasSize.h);
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(this.canvasSize.w - 69, 0, 14, this.canvasSize.h);
    },
    drawDashedLines() {
        this.ctx.beginPath()
        this.ctx.lineWidth = 14
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([80, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, 0);
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h);
        this.ctx.stroke()
        this.ctx.closePath()
    },
    setImageInstances() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 50)
    },
    drawAll() {
        this.drawFilledRectangle();
        this.drawDashedLines();
        this.ctx.drawImage(
            this.carInstance,
            this.carSpecs.pos.x,
            this.carSpecs.pos.y,
            this.carSpecs.size.w,
            this.carSpecs.size.h
        )
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
}
