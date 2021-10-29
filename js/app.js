const gameCar = {
    name: 'Basic shapes app',
    description: 'Canvas app fro basic shapes drawing',
    version: '1.0.0',
    author: 'Teodoro López',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { width: undefined, height: undefined },
    canvasSize: { width: undefined, height: undefined },
    car: undefined,

    init() {
        this.setContext()
        this.setDimensions()
        this.drawFilledRectangle()
        this.drawRegularLines()
        this.createCar()
        this.setListeners()

        this.start();
    },

    start() {
        setInterval(() => {
            this.clearScreen()
            this.drawFilledRectangle()
            this.drawRegularLines()
          this.car.draw()
        }, 1000 / 50)
    },

    createCar() {
      this.car = new Car(this.ctx, 225, 550, 90, 90)
    },

    setListeners() {
        document.onkeydown = e => {
            console.log("La tecla: ", e.key)
            // if (e.key === 'ArrowLeft') {
            //   this.ball.moveLeft()
            // }
            // if (e.key === 'ArrowRight') {
            //   this.ball.moveRight()
            // }
            //Versión con operador ternario
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
    },

    setContext() {
        this.canvasDOM = document.querySelector("#canvas")
        this.ctx = this.canvasDOM.getContext("2d")
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },



    setDimensions() {
        this.canvasDOM.setAttribute("width", 500)
        this.canvasDOM.setAttribute("height", 650)
        // this.canvasSize.width = window.innerWidth
        // this.canvasSize.height = window.innerHeight
    },
    drawFilledRectangle() {

        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, 500, 650)
        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(40, 0, 420, 650)


    },
    drawRegularLines() {

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10

        this.ctx.beginPath() 
        this.ctx.moveTo(55, 0)
        this.ctx.setLineDash([0, 0]);
        this.ctx.lineTo(55, 700)
        this.ctx.stroke()
        this.ctx.fill() 
        this.ctx.closePath()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10

        this.ctx.beginPath()
        this.ctx.moveTo(445, 0)

        this.ctx.lineTo(445, 700)
        this.ctx.stroke()
        this.ctx.fill()
        this.ctx.closePath()

        // Dashed line
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath();
        this.ctx.setLineDash([20, 20]);
        this.ctx.moveTo(250, 0);
        this.ctx.lineTo(250, 700);
        this.ctx.stroke();
        this.ctx.closePath()


        // this.ctx.beginPath()
        // this.ctx.moveTo(0, 0)
        // this.ctx.lineTo(300, 600)
        // this.ctx.stroke()
        // this.ctx.closePath()
    },



}

class Car {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx

        this.posX = posX
        this.posY = posY

        this.width = width
        this.height = height

        this.image = undefined

        this.init()
        
    }

    init() {
        this.image = new Image()
        this.image.src = "./images/duck.jpg"
        // this.image.src ="./images/car.png"
        console.log(this.image)
    }

    draw() {
        console.log(this.image)
       this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    moveLeft() {
        
        console.log("Muevo a la izquierda", this.posX)
        this.posX > 80 ? this.posX -= 20 : null
    }

    moveRight() {
        console.log("Muevo a la derecha", this.posX)
       this.posX <340 ? this.posX += 20 : null
    }
}
