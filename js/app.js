const canvasApp = {
    name: 'Road to the hell',
    author: 'Jorge García Campesino',
    version: '1.0.0 Beta Version',
    License: undefined,
    description: 'Game with driver car',
    canvasSize: {

        w: 650,
        h: undefined
    },
    car: undefined,
    ctx: undefined,
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d')
        this.setDimenions(canvasId)
        this.setEventListeners()
        this.createAll()
        this.drawAll()


    },

    //Dimension 
    setDimenions(canvasId) {
        this.canvasSize = {
            w: 400,
            h: 625
        }

        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },

    // Move the car
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

    //Build all object
    createAll() {

        this.car = new Car(this.ctx, 175, 500, 50, this.canvasSize)
        this.obstacle = new Obstacle(this.ctx, 200, 300, 50, this.canvasSize)

    },


    drawAll() {
        setInterval(() => {

            this.clearAll()
            this.drawAllRoad()
            this.drawRaceLineGrey()
            this.drawRaceLineWhite()
            this.drawLineDiscont()
            this.car.draw()
            this.obstacle.draw()
            this.obstacle.randomObstacle()


        }, 10)

    },

    //Draw first road
    drawAllRoad() {

        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 400, this.canvasSize.h)

    },

    //Draw line grey
    drawRaceLineGrey() {

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, 300, this.canvasSize.h)

    },

    //Draw white line
    drawRaceLineWhite() {

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(60, 0, 10, this.canvasSize.h)

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(330, 0, 10, this.canvasSize.h)
    },

    //Draw discont line
    drawLineDiscont() {

        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = 'white'

        this.ctx.beginPath()
        this.ctx.setLineDash([20, 20])
        this.ctx.moveTo(200, 0)
        this.ctx.lineTo(200, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

    },

    //Clear element
    clearAll() {

        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)

    },

}   