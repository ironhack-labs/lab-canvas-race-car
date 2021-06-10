const gameApp = {
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { w: 500, h: 700 },

    init() {
        this.setContext()
        this.setDimensions()
        this.road()
        this.dashedLine()
        this.carImage()
    },
    setContext() {
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext('2d')

    },
    setDimensions() {

        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },

    road() {

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(120, 50, 310, 700)
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(50, 50, 50, 700)
        this.ctx.fillRect(450, 50, 300, 700)
    },
    dashedLine() {
        this.ctx.strokeStyle = 'yellow'
        this.ctx.lineWidth = 8;
        this.ctx.setLineDash([50, 50]);
        this.ctx.beginPath();
        this.ctx.moveTo(275, 100);
        this.ctx.lineTo(275, 700);
        this.ctx.stroke();
        this.ctx.closePath();
    },
    carImage() {
        const blueCar = new Image()
        blueCar.src = 'images/car.png'
        blueCar.onload = () => this.ctx.drawImage(blueCar, 225, 550, 100, 150)
    },
}
class Car {
    constructor(ctx, carPosX=0, carPosY=0, carWidth=100, carHeight=100, carImg) {
        this.ctx = ctx
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { w: carWidth, h: carHeight }
        this.carImage = carImg
        this.imageInstance = undefined

        this.init()
    }


    setListeners() {
        document.onkeyup = e => {
            e.key === 'ALeft' ? this.car.moveLeft() : null
            e.key === 'ARight' ? this.car.moveRight() : null
        }
    }
    moveLeft() {
        this.carPos.x -= 10
    }
    moveRight() {
        this.carPos.x += 10
    }
}





