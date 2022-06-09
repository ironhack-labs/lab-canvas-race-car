const carRaceApp = {
    name: 'GTA 6',
    author: 'Daniel Jimenez',
    version: '1.0.0',
    license: undefined,
    description: 'Best game in town',

    canvasSize: {
        w: undefined,
        h: undefined
    },

    ctx: undefined,
    framesIndex: 0,
    obstacles: [],
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d')
        this.setDimensions(canvasId)
        this.createAll()
        this.drawAll()
        this.setEventListeners()

    },

    setDimensions(canvasId) {
        this.canvasSize = {
            w: window.innerWidth / 2,
            h: window.innerHeight
        }
        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },

    drawRoad() {
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

        this.ctx.fillRect(20, 0, this.canvasSize.w - 40, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(20, 0, this.canvasSize.w - 40, this.canvasSize.h)

        // rectángulos pequeños
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)

        this.ctx.fillRect(60, 0, this.canvasSize.w - 120, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(60, 0, this.canvasSize.w - 120, this.canvasSize.h)
        // línea intermedia

        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.setLineDash([55, 40])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    createAll() {
        this.car = new Car(this.ctx, this.canvasSize.w / 2 - 25, 550)

    },

    drawAll() {
        // setInterval(func, 100)
        this.drawRoad()

        setInterval(() => {
            this.clearAll()
            this.drawRoad()
            this.car.draw()
            this.obstacles.forEach(elm => {
                elm.draw()
                elm.down()
            }
            )
            this.framesIndex++
            if (this.framesIndex % 50 === 0) {
                this.obstacles.push(new Obstacle(this.ctx, this.canvasSize, 0, 0, 400 * Math.random()))
            }

        }, 50)

    },


    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    // generateObstacle() {
    //     this.obstacle.draw()
    //     this.obstacle.down()

    // },

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
                case 'ArrowUp':
                    this.car.moveUp()
                    break;
                case 'ArrowDown':
                    this.car.moveDown()
                    break;
            }
        }
    }

}