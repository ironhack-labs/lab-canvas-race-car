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
    objectsArray: [],
    time: undefined,
    timeObj: undefined,

    start() {
        this.time = setInterval(() => {
            // this.clearScreen()
            this.greenBackground()
            this.roadBackground()
            this.whiteLine()
            this.whiteLine2()
            this.centralLine()
            car.drawCar(this.ctx)
            this.moveObj();
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
        this.createObject()
        // this.object = new obsts(this.ctx, 60, 0, 70, 20, 3)

        car.initCar()
    },
    randomObj() {
        this.timeObj = setInterval(() => {
            this.createObject();
        }, 2000);
    },
    createObject() {
        // console.log('random')
        let posX = parseInt(Math.random() * (this.windowsSize.width - 1) + 1)
        var newObj = new obsts(this.ctx, posX, 0, 70, 20, 3);
        newObj.drawObj()
        newObj.move()
        this.objectsArray.push(newObj)
    },
    moveObj() {
        this.objectsArray.forEach(el => el.move());
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
        this.ctx.clearRect(0, 0, this.windowsSize.width, this.windowsSize.height)
    },

    moveRoad(posY, vel) {
        posY += vel
        this.centralLine(posY)
    },

    collision() {

        this.objectsArray.forEach((elm, i) => {
            if (car.posX + car.carWidth >= elm._posX &&
                car.posY + car.carHeight >= elm._posY &&
                car.posX <= elm._posX + elm._wWidth &&
                car.posY <= elm._posY + elm._wHeight) {
                return this.gameOver()
            }
        })


    },

    gameOver() {

        clearInterval(this.time)
        clearInterval(this.timeObj)
        alert('Has perdido GAÑAN')
        this.clearScreen()


    },
}