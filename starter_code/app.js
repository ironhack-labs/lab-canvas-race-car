const carApp = {
    name: "car app",
    descritption: "a car game",
    authors: "ruben and carlos",
    license: undefined,
    version: 1.0,
    canvasDom: undefined,
    ctx: undefined,
    obstacle1: undefined,
    canvasSize: {
        width: 400,
        height: 600
    },
    theCar: {
        topBorder: undefined,
        leftBorder: undefined,
        rigthBorder: this.leftBorder + 50,
        velocity: 5,
        image: undefined
    },
    init() {
        // console.log("hola")
        this.canvasDom = document.getElementById("myCanvas")
        this.ctx = this.canvasDom.getContext("2d")
        this.setDimesion()
        this.setEventListeners()
        this.buildRoad()
        this.insertCarImage()
    },
    setDimesion() {
        this.canvasDom.width = this.canvasSize.width
        this.canvasDom.height = this.canvasSize.height
    },
    setEventListeners() {
        document.onkeyup = e => {
            // if (e.keyCode == 39) {
            //     console.log(`se esta moviendo, nuevo x ${this.theCar.leftBorder}`)

            //     this.moveCarRigth()
            // }

            // if (e.keyCode == 37) {
            //     console.log(`se esta moviendo, nuevo x ${this.theCar.leftBorder}`)
            //     this.moveCarLeft()
            e.keyCode == 37 ? this.moveCar('left') : null
            console.log(`se esta moviendo, nuevo x ${this.theCar.leftBorder}`)
            e.keyCode == 39 ? this.moveCar('right') : null
            console.log(`se esta moviendo, nuevo x ${this.theCar.leftBorder}`)
        }

    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },

    drawFilledCenterdRectangle(color, width) {
        this.ctx.fillStyle = color
        let x = this.canvasSize.width / 2 - width / 2
        this.ctx.fillRect(x, 0, width, this.canvasSize.height)
    },
    buildRoad() {
        this.drawFilledCenterdRectangle('grey', 350)
        this.drawFilledCenterdRectangle('white', 320)
        this.drawFilledCenterdRectangle('grey', 300)
        this.roadLine()
    },
    roadLine() {
        // console.log("principio de road line")
        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([20, 20])
        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.width / 2, 0)
        this.ctx.lineTo(this.canvasSize.width / 2, this.canvasSize.height)
        this.ctx.stroke()
        // console.log("fin de road line")
    },
    insertCarImage() {

        this.theCar.image = new Image()
        this.theCar.image.src = "../starter_code/images/car.png"
        this.theCar.image.onload = () => this.ctx.drawImage(this.theCar.image, this.canvasSize.width / 2 - 25, this.canvasSize.height - 120, 50, 100)

        this.theCar.leftBorder = this.canvasSize.width / 2 - 25
        this.theCar.topBorder = this.canvasSize.height - 120

    },

    // moveCarRigth() {
    //     this.theCar.leftBorder += this.theCar.velocity
    // },

    // moveCarLeft() {
    //     this.theCar.leftBorder -= this.theCar.velocity
    // },


    moveCar(dir) {

        dir === 'right' ? this.theCar.leftBorder += this.theCar.velocity : null

        dir === 'left' ? this.theCar.leftBorder -= this.theCar.velocity : null

        //draw the image with the new udated left and top borders(x,y coordenates)
        this.ctx.drawImage(this.theCar.image, this.theCar.leftBorder, this.theCar.topBorder, 50, 100)
    },

    drawGame() {
        this.init()
        // this.obstacle1 = new obstacle(this.ctx)
        // this.obstacle.init()
        setInterval(() => {
            this.clearScreen()
            this.buildRoad()
            this.moveCar()

        }, 10)
    },


}
carApp.drawGame()





class obstacle {

    constructor(ctx) {

        this._ctx = ctx
        this._width = Math.random() * 200
        this._height = 20
        this._xposition = Math.random() * 300
        this._yposition = 0
        this._velocity = 10
    }

    init() {
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(this._xposition, this._yposition, this._width, this._height)
    }

    moveObstacle() {
        this._yposition += this._velocity
        this.ctx.fillRect(this._xposition, this._yposition, this._width, this._height)
    }



}