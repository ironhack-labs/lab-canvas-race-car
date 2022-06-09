const canvasApp = {
    name: 'Canvas race car',
    author: 'Natalia',
    version: '1.0.0',
    license: undefined,
    description: 'Canvas basic game',
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ctx: undefined,
    car: undefined,
    obstacles: [],
    framesIndex: 0,

    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d')
        this.setEventListeners()
        this.setDimensions(canvasId)
        this.drawRoad()
        this.createAll()
        this.drawAll()
    },

    setDimensions(canvasId) {
        this.canvasSize = {
            w: 550,
            h: 500
        }
        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },

    drawRoad() {
        this.drawRectangle()
        this.drawDashedLines()
        this.drawRegularLines()
    },

    drawRectangle() {
        this.ctx.fillStyle = '#018113'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = '#808080'
        this.ctx.fillRect(15, 0, this.canvasSize.w - 30, this.canvasSize.h)
    },

    drawDashedLines() {
        this.ctx.lineWidth = 7
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.setLineDash([15, 10.6])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    drawRegularLines() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.moveTo(40, 0)
        this.ctx.setLineDash([0, 0])
        this.ctx.lineTo(40, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.w - 40, 0)
        this.ctx.setLineDash([0, 0])
        this.ctx.lineTo(this.canvasSize.w - 40, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    setEventListeners() {
        document.onkeydown = e => {
            const { key } = e
            switch (key) {
                case 'ArrowLeft':
                    this.car.moveLeft()
                    break;
                case 'ArrowRight':
                    this.car.moveRight()
                    break;
            }
        }
    },

    createAll() {
        this.car = new Car(this.ctx, 240, 390, 70, 100, this.canvasSize)
    },

    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.drawRoad()
            this.car.draw()
            this.obstacles.forEach(obstacle => { 
                obstacle.draw()
            })
            this.framesIndex++
            if (this.framesIndex % 70 === 0) {
                this.generateObstacle()
            }
        }, 50)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    generateObstacle() {
        this.obstacles.push(
           myObstacle = new Obstacle(this.ctx, this.canvasSize)
           )
        },

    collision() {
        this.obstacles.forEach((obstacle) => {
            
            if (this.car.carPosition.x < this.obstacle.obstaclePosition.x + this.obstacle.obstacleSize.w && this.car.carPosition.x + this.car.carSize.w > this.obstacle.obstaclePosition.x && this.car.carPosition.y < this.obstacle.obstaclePosition.y + this.obstacle.obstacleSize.h && this.car.carSize.h + this.car.carPosition.y > this.obstacle.obstaclePosition.y) {
                alert('Game Over')
            }

        })
    }

}
