const carsGame = {
    appName: 'Cars Collision 2',
    autor: 'Victor Villalba',
    version: '1.0.0',
    license: undefined,
    description: 'Car collisio game',
    ctx: undefined,
    carInstance: undefined,
    carSpecs: {
        size: { w: 70, h: 125 },
        pos: { x: 215, y: 560 },
    },
    obstacles: [],
    framesIndex: 0,

    init() {
        this.setContext()
        this.start()
        this.setImageInstances()
        this.setEventListeners()


    },
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawRoad()
            this.drawCar()
            this.drawBrick()
            this.collision()
            if (this.framesIndex % 200 === 0) {
                this.createObstacle()
            }
            this.framesIndex++
        }, 10)
    },


    drawRoad() {
        this.ctx.fillStyle = "#592dd2"
        this.ctx.fillRect(0, 0, 500, 700)
        this.ctx.fillStyle = '#30b6cf'
        this.ctx.fillRect(50, 0, 400, 700)
        this.ctx.fillStyle = '#e01fae'
        this.ctx.fillRect(65, 0, 370, 700)
        this.ctx.fillStyle = '#30b6cf'
        this.ctx.fillRect(75, 0, 350, 700)
        this.ctx.beginPath()
        this.ctx.lineWidth = 12
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([75, 40])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
        this.ctx.closePath()


    },
    drawBrick() {
        this.obstacles.forEach(brick => {
            brick.drawObstacle()
        })
    },

    clearAll() {
        this.ctx.clearRect(0, 0, 500, 700)
    },
    setImageInstances() {
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
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
    setEventListeners() {
        document.onkeydown = event => {

            const { key } = event

            if (key == 'ArrowLeft') {
                this.carSpecs.pos.x -= 10
            }

            if (key == 'ArrowRight') {
                this.carSpecs.pos.x += 10
            }
        }
    },
    createObstacle() {
        const posX = Math.floor(Math.random() * 450)
        const brick = new Obstacle(this.ctx, posX, 100)
        this.obstacles.push(brick)
    },

    collision() {
        const colllisionCheck = this.obstacles.forEach(eachBrick => {
            if ((this.carSpecs.pos.x < eachBrick.posX + eachBrick.w &&
                this.carSpecs.pos.x + this.carSpecs.size.w > eachBrick.posX &&
                this.carSpecs.pos.y < eachBrick.posY + eachBrick.h &&
                this.carSpecs.size.h + this.carSpecs.pos.y > eachBrick.posY)) {
                alert(" :( YOU SMACKED YOR CAR! CALL AAA!  902.000.AAA")
            }

        })
    }



}