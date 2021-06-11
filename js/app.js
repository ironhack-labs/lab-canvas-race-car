const interactionApp = {
    ctx: undefined,
    canvasDOM: undefined,
    car: undefined,
    canvasSize: { w: undefined, h: undefined },
    otherCars: [],

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
        this.createCObs()
        this.setListeners()

        setInterval(() => {
            this.clearScreen()
            this.moveAll()
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
        this.otherCars.forEach(elm => elm.draw())

      //  this.createObstacles()
      //  this.createObstacles2()

    },
    moveAll() {
        this.otherCars.forEach(elm => elm.move())
    },

    createCObs() {
        const otherCar1 = new CarObstacles(this.ctx, 100, -100, 60, 100, 5, this.canvasSize)
        const otherCar2 = new CarObstacles(this.ctx, 300, -200, 60, 100, 10, this.canvasSize)
        const otherCar3 = new CarObstacles(this.ctx, 200, -300, 60, 100, 7, this.canvasSize)
        const otherCar4 = new CarObstacles(this.ctx, 400, -400, 60, 100, 3, this.canvasSize)
        const otherCar5 = new CarObstacles(this.ctx, 50, -500, 60, 100, 8, this.canvasSize)
        const otherCar6 = new CarObstacles(this.ctx, 400, -200, 60, 100, 7, this.canvasSize)
        const otherCar7 = new CarObstacles(this.ctx, 450, -150, 60, 100, 8, this.canvasSize)
        const otherCar8 = new CarObstacles(this.ctx, 300, -350, 60, 100, 6, this.canvasSize)
        const otherCar9 = new CarObstacles(this.ctx, 250, 0, 60, 100, 7, this.canvasSize)

        this.otherCars.push(otherCar1, otherCar2, otherCar3,otherCar4, otherCar5, otherCar6,otherCar7, otherCar8, otherCar9)
    },

    // ------------------

    
    /*drawAllObstacles() {
        this.createObstacles()
    },

    // -----------------------------------------------------------------------

    createObstacles() {
        let randomH = Math.floor(Math.random()*700)
        let randomW = Math.floor(Math.random()*500)
        this.ctx.fillStyle = 'blue'
        this.ctx.fillRect(randomH, randomW, 100, 10)
    },

    createObstacles2() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(100, 200, 100, 10)
    }*/
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




class CarObstacles {

    constructor(ctx, posX, posY, width, height, speed, canvasSize) {
        this.ctx = ctx
        this.cObsPos = { x: posX, y: posY }
        this.cObsSize = { w: width, h: height }
        this.cObsImage = 'car.png'
        this.imageInstance = undefined
        this.cObsSpeed = speed
        this.canvasSize = canvasSize

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.cObsImage}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.cObsPos.x, this.cObsPos.y, this.cObsSize.w, this.cObsSize.h)
    }

    move() {

        if (this.cObsPos.y >= this.canvasSize.h - this.cObsSize.h|| this.cObsPos.x <= -600) {
            this.turn()
        }

        this.cObsPos.y += this.cObsSpeed    }

    turn() {
        this.cObsSpeed *= -1
    }
}