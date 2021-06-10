const canvasRacingCar = {
    name: 'Canvas racing car app',
    description: 'Canvas racing car app',
    version: '1.0.0',
    author: 'Alexander Marino',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    car: undefined,
    canvasSize: { w: undefined, h: undefined },
    init() {
        this.setContext()
        this.setDimensions()
        this.start()
    },
    setContext() {
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext('2d')

    },
    setDimensions() {
        this.canvasSize.w = 500
        this.canvasSize.h = 700
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },
    setListeners() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
    },
    start() {
        this.createcar()
        this.setListeners()

        setInterval(() => {
            this.clearScreen()
            this.drawAll()
        }, 70)
    },


    createcar() {
        this.car = new car(this.ctx, 220, 550, 60, 120, 'car.png')
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawAll() {

        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, 500, 700);
        this.ctx.fillStyle = "gray";
        this.ctx.fillRect(50, 0, 400, 700);
        this.ctx.fillStyle = "white";
        this.ctx.fillRect(60, 0, 10, 700);
        this.ctx.fillRect(430, 0, 10, 700);

        this.ctx.beginPath();

        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white';
        this.ctx.setLineDash([30, 30]);
        this.ctx.moveTo(250, 700);
        this.ctx.lineTo(250, 0);
        this.ctx.stroke();
        this.car.draw()
    }
}



class car {

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
        this.imageInstance.src = `images/car.png`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        this.carPos.x -= 10
    }

    moveRight() {
        this.carPos.x += 10
    }
}
