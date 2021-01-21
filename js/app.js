const carGame = {
    ctx: undefined,
    /** @type {CanvasRenderingContext2D} */
    canvasDOM: undefined,
    canvasSize: {
        w: 500,
        h: 700
    },
    car: undefined,

    init() {
        this.canvasDOM = document.querySelector('canvas')
        this.ctx = this.canvasDOM.getContext('2d')

        mainRoad.ctx = this.ctx
        mainRoad.canvasDOM = this.canvasDOM
        mainRoad.init()

        this.createCar()
        this.drawAll()
        
    },

    createCar() {
        this.car = new Car (this.ctx, this.canvasSize, this.canvasSize.w / 2 -35, this.canvasSize.h - 160, 70, 140)
    },

    drawAll() {
        setInterval(() => {
            this.clearScreen()
            mainRoad.init()                   //para que salga la carretera cada vez que se limpia
            this.car.drawCar()
        }, 17)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }

    
}

/*----Drawing Main Road----*/

const mainRoad = {
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: carGame.canvasSize,


    init() {
        this.drawRoadSides()
        this.drawMainRoad()
        this.drawCentralLine()
    },

    /*----Green and Grey parts on the side of the road (left and right)----*/
    drawRoadSides() {
        this.ctx.fillStyle = "#008200" 
        this.ctx.fillRect(0, 0, 30, this.canvasSize.h)
        this.ctx.fillRect(this.canvasSize.w-30, 0, 30, this.canvasSize.h)
        this.ctx.fillStyle = "#808080"
        this.ctx.fillRect(30, 0, 10, this.canvasSize.h)
        this.ctx.fillRect(this.canvasSize.w-40, 0, 10, this.canvasSize.h)
    },

    /*----Central grey background----*/
    drawMainRoad() {
        this.ctx.fillRect(this.canvasSize.w / 2 - 200, 0 , 400, this.canvasSize.h)
        
    },

    /*----Central dashed line----*/
    drawCentralLine() {
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash ([40, 20])
        this.ctx.lineWidth = 10
        this.ctx.stroke()
    }
    
}

class Car {
    constructor(ctx, canvasSize, posX, posY, width, heigth) {

        this.ctx = ctx
        this.canvasSize = canvasSize
        this.carPos = {
            x: posX,
            y: posY
        }
        this.carSize = {
            w: width,
            h: heigth
        }
        this.imageName = 'car.png'
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.imageName}`

    }

    drawCar() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    
}