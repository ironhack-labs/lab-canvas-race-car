const carApp = {
    name: 'Car app',
    description: 'Canvas app car exercise',
    version: '1.0.0',
    license: undefined,
    author: 'Jose Dorado',
    car: undefined,
    canvasTag: undefined,
    ctx: undefined,
    keys: {
        left: 37,
        right: 39
    },
    canvasSize: {
        w: '500',
        h: '700'
    },

    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.drawHighway()
        this.createCar()
        this.drawAll()
        this.setEventListeners()
    },

    drawHighway() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 1000, 1000)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, 440, 800)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(40, 0, 10, 800)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(450, 0, 10, 800)
    },

    drawDashedLine() {

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.beginPath()
        this.ctx.setLineDash([10, 20])
        this.ctx.moveTo(250, 10)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
    },

    createCar() {
        this.car = new Car(this.ctx, 210, 550, 100, 100, '../images/car.png')
    },

        setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === this.keys.left ? this.car.move('left') : null
            e.keyCode === this.keys.right ? this.car.move('right') : null
        }
    },


    drawAll() {
        setInterval(() => {
            this.clearScreen()
            this.drawHighway()
            this.drawDashedLine()
            this.frames++
            this.car.draw()
        }, 70)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
}

    class Car {
        constructor(ctx, carPosX, carPosY, carWidth, carHeigth, carImage) {
            this.ctx = ctx
            this.carPos = {
                x: carPosX,
                y: carPosY
            }
            this.carSize = {
                w: carWidth,
                h: carHeigth
            }
            this.imageName = carImage 
            this.carInstance = undefined
            this.init()
        }

        init() {
            this.carInstance = new Image()
            this.carInstance.src = `images/${this.imageName}`
        }
        
        draw() {
            this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
        }

        move(dir) {
            dir === 'left' ? this.carPos.x -= 20 : null
            dir === 'right' ? this.carPos.x += 20 : null
            
        }
    }

