const canvasApp = {
    name: `Island Racer application`,
    author: 'Marcos del Olivo',
    version: '1.0.0',
    license: undefined,
    description: 'Witty app for a car in a road',
    canvasSize: {
        w: undefined,
        h: undefined,
    },
    ctx: undefined,
    // car: undefined,

    init(canvasID) {
        this.ctx = document.querySelector(canvasID).getContext('2d')
        this.setDimensions(canvasID)
        this.setEventListeners()
        this.createAll()
        this.drawAll()

    },

    setDimensions(canvasID) {
        this.canvasSize = {
            w: 500,
            h: 700
        }
        document.querySelector(canvasID).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasID).setAttribute('height', this.canvasSize.h)
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

    createRoad() {
        //road

        //rectangle green
        this.ctx.fillStyle = 'green'                      // color relleno
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        //rectangle grey
        this.ctx.fillStyle = 'grey'                      // color relleno
        this.ctx.fillRect(40, 0, this.canvasSize.w / 1.2, this.canvasSize.h)

        //stroke
        this.ctx.setLineDash([0, 0])

        //stroke left
        this.ctx.lineWidth = 15
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(60, 700)
        this.ctx.lineTo(60, 0)
        this.ctx.stroke()
        this.ctx.closePath()

        //stroke right
        this.ctx.lineWidth = 15
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(435, 700)
        this.ctx.lineTo(435, 0)
        this.ctx.stroke()
        this.ctx.closePath()

        //stroke dashed

        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(250, 700)
        this.ctx.lineTo(250, 0)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    //createObstacle(){

    //}

    createAll() {
        this.car = new Car(this.ctx, 220, 600, 60, 100, 'car.png')
        
    },

    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.createRoad()
            this.car.draw()
            //this.
        }, 50)
    },

    

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }

}





