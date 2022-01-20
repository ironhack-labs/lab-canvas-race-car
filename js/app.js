const drivingApp = {
    appName: 'Race or Die',
    author: 'Eduardo Gordillo',
    version: '0.9.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    ball: undefined,
    framesIndex: 0,
    obstaclesArr: [],
    init() {
        this.setContext()
        this.setSize()
        this.setEventHandlers()
        this.createCar()
        this.drawAll()
        this.createObstacle()
        this.start()



    },
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
        console.log(this.ctx)
    },
    setSize() {
        this.gameSize = {
            w: 500,
            h: 700
        }
        // document.querySelector('#canvas').setAttribute('width', 500)
        // document.querySelector('#canvas').setAttribute('height', 650)
    },

    drawRoad() {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, 400, 700)

    },

    drawLines() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(this.gameSize.w / 2, -700)
        this.ctx.setLineDash([60, 20])
        this.ctx.lineTo(this.gameSize.w / 2, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    createCar() {
        this.car1 = new Car(this.ctx, this.gameSize.w / 2, 550, 100, 120)
    },

    createObstacle() {
        this.obstaclesArr.push(
            this.obstacle = new Obstacle(this.ctx, Math.floor(Math.random() * (250 - 50) + 50), 0, Math.floor(Math.random() * (250 - 50) + 50), 100),
            //this.obstacle = new Obstacle(this.ctx, 0, 0, Math.floor(Math.random() * (250 - 50) + 50), 100),
            //this.obstacle = new Obstacle(this.ctx, 0, 0, Math.floor(Math.random() * (250 - 50) + 50), 100),

        )
    },

    setEventHandlers() {
        document.addEventListener('keydown', event => {
            const { key } = event
            key === 'ArrowRight' ? this.car1.moveRight() : null
            key === 'ArrowLeft' ? this.car1.moveLeft() : null
        })
    },


    drawAll() {

        this.drawRoad()
        this.drawLines()
        this.car1.draw()





    },

    start() {
        setInterval(() => {
            this.framesIndex++
            this.framesIndex % 50 === 0 ? this.createObstacle() : null
            this.clearAll()
            this.drawAll()
            this.obstaclesArr.forEach(elm => {
                elm.move()
                elm.draw()
            })
            this.detectColision()

        }, 50)
    },



    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    detectColision() {

        
        this.obstaclesArr.forEach(elm => {

            console.log(this.car1.carPos.x)

            if (this.car1.carPos.x < this.elm.obsPos.x + this.elm.obsSize.width &&
                this.car1.carPos.x + this.car1.carSize.width > this.elm.obsPos.x &&
                this.car1.carPos.y < this.elm.obsPos.y + this.elm.obsSize.height &&
                this.car1.carSize.height + this.car1.carPos.y > this.elm.obsPos.y) 
                

                alert(`GAME OVER`)
            }
        })
    }

}