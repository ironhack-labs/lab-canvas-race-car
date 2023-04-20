const carGame = {
    AppName: "carGame",
    author: "Fernando Durban",
    version: "1.0.0",
    license: undefined,
    description: "Car game para tarde aburrida",
    ctx: undefined,
    framesIndex: 0,
    car: undefined,
    obstacles: [],
    carmedia: {
        pos: { x: 200, y: 500 },
        size: { w: 100, h: 200 }
    },
    canvasSize: {
        w: 500,
        h: 700,
    },
    init() {
        this.setContext()
    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
        console.log('contexto ->', this.ctx)
    },
    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(25, 0, this.canvasSize.w - 50, this.canvasSize.h)
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
        this.ctx.beginPath()
        this.ctx.lineWidth = 20
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([50, 20])
        this.ctx.moveTo(this.canvasSize.h / 3, 0)
        this.ctx.lineTo(this.canvasSize.h / 3, this.canvasSize.w)
        this.ctx.stroke()
        this.ctx.closePath()

    },
    setCarImage() {
        this.car = new Image()
        this.car.src = "./images/car.png"
    },
    setControls() {
        document.onkeydown = event => {

            const { key } = event

            if (key == 'ArrowLeft') {
                this.carmedia.pos.x -= 15
            }

            if (key == 'ArrowRight') {
                this.carmedia.pos.x += 15
            }
        }
    },
    createObstacles() {
        const posX = Math.floor(Math.random() * 300)
        this.obstacles.push(
            new Obstacles(this.ctx, this.canvasSize, posX),
        )
        console.log(this.obstacles)
    },








    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
        }, 120)
    },
    drawAll() {
        this.drawRoad()
        this.ctx.drawImage(
            this.car,
            this.carmedia.pos.x,
            this.carmedia.pos.y,
            this.carmedia.size.w,
            this.carmedia.size.h
        )
        this.obstacles.forEach(elm => {
            elm.move(),
            elm.draw()
        }
        )
        if (this.framesIndex % 20 === 0) this.createObstacles()

    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }


}
