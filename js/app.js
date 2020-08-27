const raceCarGame = {
    name: 'Race Car',
    author: 'Juan Semprún',
    version: '1.0.0',
    license: undefined,
    description: 'Racing car',
    canvasID: undefined,
    ctx: undefined,
    canvasSize: {
        w: 500,
        h: 700
    },
    init(id) {
        this.canvasID = id
        this.ctx = document.getElementById(this.canvasID).getContext('2d')
        // console.log(this.ctx) 
        this.setEventListeners()
        this.drawGameBoard()
        this.drawCarImage()
        this.gameOver()
    },
    drawGameBoard() {

        this.drawBackGround()
        this.drawLateralLines()
        this.drawCenterLines()

    },
    drawBackGround() {

        // Green
        this.ctx.fillStyle = '#1d8100'
        this.ctx.fillRect(0, 0, 500, 700)

        // Gray
        this.ctx.fillStyle = '#808080'
        this.ctx.fillRect(50, 0, 400, 700)

    },
    drawLateralLines() {

        // Right white line
        this.ctx.fillStyle = '#fff'
        this.ctx.fillRect(60, 0, 15, 700)


        // Left white line
        this.ctx.fillStyle = '#fff'
        this.ctx.fillRect((this.canvasSize.w - 75), 0, 15, 700)

    },
    drawCenterLines() {

        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = '#fff'
        this.ctx.beginPath()
        this.ctx.setLineDash([25, 75])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.closePath()
        this.ctx.stroke()

    },
    drawCarImage() {

        const carInamePath = 'images/car.png'
        this.car = new Car(this.ctx, 210, 550, 75, 150, this.canvasSize, carInamePath)
        setInterval(() => {
            
            this.clearScreen()
            this.drawGameBoard()
            this.car.draw()
            this.gameOver()
            
        }, 50)
        
    },  
    drawObstacles() {

    },
    setEventListeners() {
        
        document.onkeydown = e => {
            
            e.keyCode === 37 ? this.car.move('left') : null
            e.keyCode === 39 ? this.car.move('right') : null

        }

    },
    gameOver() {

        if (this.car.carPos.x < 60) {

            alert('you lose')
            this.car.carPos.x = 210

        } else if (this.car.carPos.x > 360) {

            alert('you lose derecha')
            this.car.carPos.x = 210

        } 

    },
    clearScreen() {

        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)

    }

}

class Car {

    constructor(ctx, posX, posY, carWidth, carHeight, canvasSize,carImage) {
        this.ctx = ctx
        this.carPos = {
            x: posX,
            y: posY
        }
        this.carSize = {
            w: carWidth,
            h: carHeight
        }
        this.canvasSize = canvasSize
        this.imageName = carImage
        this.imageInstance = undefined

        this.init()


    }

    init() {

        this.imageInstance = new Image()
        this.imageInstance.src = this.imageName

    }

    draw() {

        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)

    }

    move(dir) {

        dir === 'left' ? this.carPos.x -= 10 : null
        dir === 'right' ? this.carPos.x += 10 : null

    }


}

