const gameApp = {
    appName: 'Game app',
    author: 'Carlos Liao',
    version: '1.0.0',
    license: undefined,
    description: 'Animate App',
    ctx: undefined,
    canvasSize: {
        w: 500,
        h: 700
    },
    framesIndex: 0,         // para los obstaculos
    car: undefined,
    carSpecs: {
        pos: { x: 220, y: 580 },
        size: { w: 50, h: 100 }
    },
    obstacles: [],

    init() {
        this.setContext()
        this.setCar()
        this.setEvent()
        this.start()
    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },
    setEvent() {
        document.onkeydown = event => {
            const { key } = event
            if (key == 'ArrowLeft') {
                this.carSpecs.pos.x -= 80
            }
            if (key == 'ArrowRight') {
                this.carSpecs.pos.x += 80
            }
            if (key == 'ArrowUp') {
                this.carSpecs.pos.y -= 80
            }
            if (key == 'ArrowDown') {
                this.carSpecs.pos.y += 80
            }
        }
    },
    setCar() {
        this.car = new Image()
        this.car.src = '../images/car.png'
    },
    createObstacles() {
        const posX = Math.floor(Math.random() * 300);
        this.obstacles.push(
            new Obstacle(this.ctx, this.canvasSize, posX)
        )
    },
    drawAll() {
        this.drawRoad()
        this.drawCar()
        if (this.framesIndex % 80 === 0) this.createObstacles()
        this.obstacles.forEach((elem) => {
            elem.move()
            elem.draw()
        })
        console.log(this.obstacles)
    },
    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(20, 0, this.canvasSize.w - 40, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(60, 0, this.canvasSize.w - 120, this.canvasSize.h)
        this.ctx.beginPath()
        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([60, 20])      // <-- patrón de repetición
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawCar() {
        this.ctx.drawImage(
            this.car,
            this.carSpecs.pos.x,
            this.carSpecs.pos.y,
            this.carSpecs.size.w,
            this.carSpecs.size.h
        )
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++
        }, 50)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
}