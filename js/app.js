const app = {
    name: 'Canvas App',
    description: 'Island racer car game',
    version: '1.0.0',
    author: 'Eva y SoonWoo',
    license: undefined,
    canvasDom: undefined, //<= trae el id 
    ctx: undefined,
    car: undefined,
    frames: 0,
    canvasSize: {
        // w: document.querySelector('#canvas').setAttribute('width'), //<= ancho 
        // h: document.querySelector('#canvas').setAttribute('height') //<= alto 
        w: window.innerWidth = 500,
        h: window.innerHeight = 700
    },

    init(id) {
        this.canvasDom = document.getElementById(id) //<= traer el html id <#canvas>
        this.canvasDom.setAttribute('width', this.canvasSize.w) //<= tamaño ancho del id (with - 500)
        this.canvasDom.setAttribute('height', this.canvasSize.h) //= tamaño del alto del id (height -500)
        this.ctx = this.canvasDom.getContext('2d')
        this.drawCar('car.png')
        this.setEventListeners()
    },

    drawBackground() {
        this.ctx.fillStyle = '#008000'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

        this.ctx.fillStyle = '#828282'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
    },

    drawBackgroundLine() {
        // Left continous line
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.moveTo(65, this.canvasSize.h)
        this.ctx.lineTo(65, 0)
        this.ctx.stroke()

        // Right continous line
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.moveTo(435, this.canvasSize.h)
        this.ctx.lineTo(435, 0)
        this.ctx.stroke()

        // Center discontinous line
        this.ctx.beginPath()
        this.ctx.setLineDash([30, 50])
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.moveTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.lineTo(this.canvasSize.w / 2, 0)
        this.ctx.stroke()
    },


    drawCar(imgName) {

        //Dibujo a lo bruto
        // let image = new Image()
        // image.src = `images/${imgName}`
        // image.onload = () => this.ctx.drawImage(image, this.canvasSize.w / 2 - 39, this.canvasSize.h - 165, 79, 159)


        this.car = new Car(this.ctx, imgName, 211, 535, 79, 159, this.canvasSize)
        this.car.init()

        setInterval(() => {
            this.clearScreen()
            this.drawBackground()
            this.drawBackgroundLine()
            this.car.draw()
        }, 29)
    },

    setEventListeners() {
        document.onkeydown = e => {
            if (e.keyCode === 37) {
                this.car.move('left')
                console.log(e.keyCode)
            } else if (e.keyCode === 39) {
                this.car.move('right')
                console.log(e.keyCode)
            } else {
                return undefined
            }
            // e.keyCode === 37 ? this.car.move('left') : null
            // e.keyCode === 39 ? this.car.move('right') : null
        }
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
}

class Car {
    constructor(ctx, imgName, posX, posY, carW, carH, canvasSize) {
        this.ctx = ctx //<= canvas
        this.imgName = imgName // <= Nombre imagen
        this.posX = posX // <= posicion X
        this.posY = posY
        this.carW = carW
        this.carH = carH
        this.canvasSize = canvasSize
        this.img = undefined

    }

    init() {
        this.img = new Image()
        this.img.src = `images/${this.imgName}`
        this.img.onload = () => this.ctx.drawImage(this.img, this.canvasSize.w / 2 - 39, this.canvasSize.h - 165, 79, 159)
    }

    draw() {
        this.ctx.drawImage(this.img, this.posX, this.posY, this.carW, this.carH)
    }


    move(dir) {
        if (dir === 'left') {
            this.posX -= 10
            this.draw()
        } else if (dir === 'right') {
            this.posX += 10
            this.draw()
            // dir === 'right' ? this.posX++ : null
        } else {
            return undefined
        }
    }

}