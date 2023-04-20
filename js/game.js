const basicGame = {
    appName: "Race Car",
    author: "Belén Sánchez",
    version: "1.0.0",
    license: undefined,
    description: "Race car lab",
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined,
    },
    carInstance: undefined,
    carSpecs: {
        pos: { x: 205, y: 580 },
        size: { w: 70, h: 120 },
    },
    framesIndex: 0,
    obstacles: [],


    init() {
        this.setContext()
        this.setDimensions()
        this.setCarInstances()
    },

    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')    
    },

    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 700,
        }
        document.querySelector('canvas').setAttribute('width', this.canvasSize.w)
        document.querySelector('canvas').setAttribute('height', this.canvasSize.h)
    },

    setEvents() {
        document.onkeyup = event => {
            const { key } = event

            if (key == 'ArrowRight') {
                this.carSpecs.pos.x += 10
            }

            if (key == 'ArrowLeft') {
                this.carSpecs.pos.x -= 10
            }
        }
    },

    drawRoad() {
        // road
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.canvasSize.w / 2 - 250, 0, 500, this.canvasSize.h)
        this.ctx.fillStyle = '#2F2F2F'
        this.ctx.fillRect(this.canvasSize.w / 2 - 200, this.canvasSize.h / 2 - 350, 400, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(this.canvasSize.w / 2 - 190, this.canvasSize.h / 2 - 350, 380, 700)
        this.ctx.fillStyle = '#2F2F2F'
        this.ctx.fillRect(this.canvasSize.w / 2 - 180, this.canvasSize.h / 2 - 350, 360, 700)

        // dashed line
        this.ctx.beginPath()
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = "white"
        this.ctx.setLineDash([40, 30])
        this.ctx.moveTo(this.canvasSize.w / 2 - 5, -10)
        this.ctx.lineTo(this.canvasSize.w / 2 - 5, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    setCarInstances() {
        this.carInstance = new Image()
        this.carInstance.src = './images/alpacar.png'
    },

    drawCar() {
        this.ctx.drawImage(
            this.carInstance,
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
            this.doesCollide()
            this.framesIndex++
        }, 20)
    },

    drawAll() {
        this.drawRoad()
        this.drawCar()
        this.drawBrick()

        if (this.framesIndex % 250 === 0) {
            this.createObstacles()
        }
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    createObstacles() {
        const posX = Math.floor(Math.random() * 300)
        const brick = new obstacles(this.ctx, posX, 200)
        this.obstacles.push(brick)
    },

    drawBrick() {
        this.obstacles.forEach(brick => {
            brick.drawObstacle()
        })
    },

    doesCollide() {
        const checking = this.obstacles.forEach(eachBrick => {
            if (this.carSpecs.pos.x < eachBrick.posX + eachBrick.w &&
                this.carSpecs.pos.x + this.carSpecs.size.w > eachBrick.posX &&
                this.carSpecs.pos.y < eachBrick.posY + eachBrick.h &&
                this.carSpecs.size.h + this.carSpecs.pos.y > eachBrick.posY) {
                    alert("GAME OVER")
            }
        })

    },

}
