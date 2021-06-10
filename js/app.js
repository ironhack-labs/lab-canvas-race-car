const interactionApp = {
    ctx: undefined,
    canvasDOM: undefined,
    car: undefined,
    canvasSize: { w: undefined, h: undefined },
    obstacles: [],
    init() {
        this.setContext()
        this.setDimensions()
        this.backgroundColor()
        this.start()
    },
    setContext() {
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext('2d')
        console.log('Echa un vistazo al contexto 2d:', this.ctx)
    },
    setDimensions() {
        this.canvasSize.w = 500
        this.canvasSize.h = 700
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },
    backgroundColor() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 500, 700)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, 400, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(70, 0, 360, 700)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(80, 0, 340, 700)
        this.ctx.lineWidth = 5
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white';
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(this.canvasSize.w / 2 - 10, 0)
        this.ctx.lineTo(this.canvasSize.w / 2 - 10, this.canvasSize.h - 0)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    setListeners() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
            e.key === 'ArrowUp' ? this.car.moveUp() : null
            e.key === 'ArrowDown' ? this.car.moveDown() : null

        }
    },
    start() {
        this.createCar()
        this.setListeners()

        setInterval(() => {
            this.clearScreen()
            this.drawAll()
        }, 70)
    },

    createCar() {
        this.car = new Car(this.ctx, 210, 600, 60, 100, 'car.png') 
        /*duda, se supone que para la posicion en el eje Y podria usar canvasSize.h -100 
        (que es el tamaño del coche no?)*/
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {
        this.backgroundColor()
        this.car.draw()
        this.createObstacles()

    },

    // -----------------------------------------------------------------------

    createObstacles() {
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(0, 0, 100, 100)
    }
}



class Car {

    constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImg) {
        this.ctx = ctx
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { w: carWidth, h: carHeight }
        this.carImage = carImg
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.carImage}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        this.carPos.x -= 20
    }

    moveRight() {
        this.carPos.x += 20
    }

    moveUp () {
        this.carPos.y -= 20
    }
    moveDown () {
        this.carPos.y += 20
    }
}
