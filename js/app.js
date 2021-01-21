const moveApp = {
    name: ' Canvas App',
    description: 'Canvas App for road animation',
    author: 'Eva Vírseda Sanz',
    version: '1.0.0',
    /** @type {CanvasRenderingContext2D} */
    car: undefined,
    ctx: undefined,
    canvasDom: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    keys: {
        left: 'ArrowLeft',
        right: 'ArrowRight'
    },
    init(id) {
        this.canvasDOM = document.querySelector(`#${id}`)
        this.ctx = this.canvasDOM.getContext('2d')
        this.setDimensions()
        this.drawRoad(new Image())
        this.createCar()
        this.setEventListeners()
        this.drawAll()
            // this.drawCar(new Image())
        console.log(this.drawRoad)
    },
    setDimensions() {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },
    drawRoad(imgName) {
        let imageInstance = new Image()
        imageInstance.src = `images/road.png`
        console.log(imgName)
        imageInstance.onload = () => this.ctx.drawImage(imageInstance, 0, 0, 500, 600)
    },
    createCar() {
        this.car = new Car(this.ctx, this.canvasSize, 180, 430, 60, 80)
        this.car.draw()
            // drawCar(carName) {
            //     let carInstance = new Image()
            //     carInstance.src = `images/car.png`
            //     console.log(carName)
            //     carInstance.onload = () => this.ctx.drawImage(carInstance, 180, 430, 60, 80)
            // }
    },
    drawAll() {

        setInterval(() => {
            this.clearScreen
            this.createCar()
            this.drawRoad()
            this.car.draw()


        }, 20)
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    setEventListeners() {
        document.onkeypress = elm => {
            if (elm.key === this.keys.left) {
                this.car.move(-5)
            }
            if (elm.key === this.keys.right) {
                this.car.move(5)
            }
        }
    }
}

class Road {
    constructor(ctx, canvasSize, posX, posY, width, height) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.boardPosition = {
            x: posX,
            y: posY
        }
        this.boardSize = {
            w: width,
            h: height
        }
        this.imgName = 'road.png'
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.imgName}`
    }
    draw() {
        this.ctx.drawImage(this.imageInstance, this.boardPosition.x, this.boardPosition.y, this.boardSize.w, this.boardSize.h)
    }
}
class Car {
    constructor(ctx, canvasSize, posX, posY, width, height) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.carPosition = {
            x: posX,
            y: posY
        }
        this.carSize = {
            w: width,
            h: height
        }
        this.imgName = 'car.png'
        this.carInstance = new Image()
        this.carInstance.src = `images/car.png`
    }
    draw() {
        this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)
    }
    move(distance) {
        this.posX += distance
    }
}


// class Obstacles {
//     constructor(ctx, canvasSize, width) {
//         this.ctx = ctx
//         this.canvasSize = canvasSize
//         this.width = width
//     
//     }
//     draw() {
//         this.ctx.fillRect(50, 30, 50)
//         this.ctxfillStyle = '#fff000 '
//     }
// }