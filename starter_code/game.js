const myGame = {
    name: 'GD Game',
    author: "David y Gonzalo",
    license: undefined,
    version: '1.0',
    canvasDom: undefined,
    ctx: undefined,
    windowsSize: {
        width: 400,
        height: 600,
    },
    object: undefined,
    time: undefined,

    start() {
        this.time = setInterval(() => {
            // this.clearScreen()
            this.greenBackground()
            this.roadBackground()
            this.whiteLine()
            this.whiteLine2()
            // this.moveRoad(0, 2)
            this.centralLine()
            // console.log(this.ctx)
            car.drawCar(this.ctx)
            // this.object.drawObj()
            this.object.move()
            this.collision()
        }, 1000 / 60);
    },

    init(id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.setWindowsMove()
        this.start()
        this.randomObj()
        // this.object = new obsts(this.ctx, 60, 0, 70, 20, 3)

        car.initCar()
    },
    randomObj() {
        const timeObj = setInterval(() => {
            console.log('random')
            let posX = parseInt(Math.random() * (this.windowsSize.width - 1) + 1)
            new obsts(this.ctx, posX, 0, 70, 20, 3)

        }, 5000);
    },
    setDimensions() {
        this.canvasDom.width = this.windowsSize.width
        this.canvasDom.height = this.windowsSize.height
    },
    setWindowsMove() {
        window.onresize = () => this.setDimensions()
    },
    greenBackground() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.windowsSize.width, this.windowsSize.height)
    },
    roadBackground() {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, 300, this.windowsSize.height)
    },
    whiteLine() {
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(60, 0, 10, this.windowsSize.height)
    },
    whiteLine2() {
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(330, 0, 10, this.windowsSize.height)
    },
    centralLine(posY) {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([20, 40])
        this.ctx.beginPath()
        this.ctx.moveTo(195, 0)
        this.ctx.lineTo(195, this.windowsSize.height)
        this.ctx.stroke()


    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.windowsSize.width, whit.windowsSize.height)
    },

    moveRoad(posY, vel) {


        // if (this._posX >= this._wWidth - 276) {this.changeDirection()}
        // if (this._posX <= 0) {this.changeDirection()}

        // this._posX >= this._wWidth - 276 || this._posX <= 0 ? this.changeDirection() : null

        posY += vel
        this.centralLine(posY)

    },

    collision() {
        // console.log(car.posY)
        // console.log('collision')
        if (car.posX + car.carWidth >= this.object._posX &&
            car.posY + car.carHeight >= this.object._posY &&
            car.posX <= this.object._posX + this.object._wWidth &&
            car.posY <= this.object._posY + this.object._wHeight) {
            return this.gameOver()
        }


    },

    gameOver() {
        //Cerra interval
        console.log('Hola');
        console.log(this.time)

        clearInterval(this.time)
        alert('Has perdido GAÑAN')
    },
}