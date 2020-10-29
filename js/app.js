const drawingApp = {
    canvasTag: undefined,
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },

    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.drawRectangle()
        this.drawContinuousLines()
        this.drawDashedLines()
        //this.drawImage(imgName)
    },

    setDimensions() {
        this.canvasSize.w = 500
        this.canvasSize.h = 700
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },

    drawRectangle() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)
    },

    drawContinuousLines() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(55, 0)
        this.ctx.lineTo(55, this.canvasSize.h)
        this.ctx.closePath()
        this.ctx.stroke()

        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.w - 55, 0)
        this.ctx.lineTo(this.canvasSize.w - 55, this.canvasSize.h)
        this.ctx.closePath()
        this.ctx.stroke()
    },

    drawDashedLines() {
        this.ctx.lineWidth = 5
        this.ctx.beginPath()
        this.ctx.setLineDash([30, 20])
        this.ctx.moveTo(this.canvasSize.w / 2 - this.ctx.lineWidth / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2 - this.ctx.lineWidth / 2, this.canvasSize.h)
        this.ctx.stroke()
    },

    drawImage(imgName) {
        let imageInstance = new Image()
        imageInstance.src = `images/${imgName}`
        imageInstance.onload = () => this.ctx.drawImage(imageInstance, this.canvasSize.w / 2 - 25 , this.canvasSize.h - 150, 50, 100)
    }
}




// const animateApp = {
//     name: 'Animate app',
//     description: 'Canvas app for basic shapes animating',
//     version: '1.0.0',
//     license: undefined,
//     author: 'Germán Álvarez',
//     canvasTag: undefined,
//     ctx: undefined,
//     camels: [],
//     frames: 0,
//     canvasSize: {
//         w: undefined,
//         h: undefined
//     },
//     init(id) {
//         this.canvasTag = document.getElementById(id)
//         this.ctx = this.canvasTag.getContext('2d')
//         this.setDimensions()
//         this.createCamels()
//         this.drawAll()

//         console.log(this.ctx)       // Puedes ver el contexto por consola
//     },

//     setDimensions() {
//         this.canvasSize = {
//             w: window.innerWidth,
//             h: window.innerHeight
//         }
//         this.canvasTag.setAttribute('width', this.canvasSize.w)
//         this.canvasTag.setAttribute('height', this.canvasSize.h)
//     },

//     createCamels() {
//         const camel1 = new Camel(this.ctx, this.canvasSize, 0, 0, 200, 200, 4, 'dromedary.png')
//         const camel2 = new Camel(this.ctx, this.canvasSize, 0, 300, 160, 160, 7, 'football-ball.png')
//         const camel3 = new Camel(this.ctx, this.canvasSize, 0, 500, 300, 300, 3, 'dromedary.png')

//         this.camels.push(camel1, camel2, camel3)
//     },

//     drawAll() {
//         setInterval(() => {
//             this.frames++
//             this.frames % 50 === 0 ? console.log('NUEVO CAMELLO/OBSTÁCULO/WHATEVER') : null
//             this.clearScreen()
//             this.camels.forEach(elm => {
//                 elm.draw()
//                 // console.log('El camello está en la posición', elm.camelPos.x, ' - ', elm.camelPos.y)
//             })
//         }, 70)
//     },

//     clearScreen() {
//         this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
//     }
// }



// class Camel {
//     constructor(ctx, canvasSize, posX, posY, camelWidth, camelHeight, speed, image) {
//         this.canvasSize = {
//             w: canvasSize.w,
//             h: canvasSize.h
//         }
//         this.camelPos = {
//             x: posX,
//             y: posY
//         }
//         this.camelSize = {
//             w: camelWidth,
//             h: camelHeight
//         }
//         this.speed = speed
//         this.imageName = image
//         this.ctx = ctx
//         this.imageInstance = undefined

//         this.init()
//     }

//     init() {
//         this.imageInstance = new Image()
//         this.imageInstance.src = `img/${this.imageName}`
//     }

//     draw() {
//         this.moveCamel()
//         this.ctx.drawImage(this.imageInstance, this.camelPos.x, this.camelPos.y, this.camelSize.w, this.camelSize.h)
//     }

//     moveCamel() {
//         // if (this.camelPos.x >= this.canvasSize.w - this.camelSize.w) {
//         //     this.speed *= -1
//         // }

//         // if (this.camelPos.x < 0) {
//         //     this.speed *= -1
//         // }

//         if (this.camelPos.x >= this.canvasSize.w - this.camelSize.w || this.camelPos.x < 0) {
//             this.changeDirection()
//         }

//         this.camelPos.x += this.speed
//     }

//     changeDirection() {
//         this.speed *= -1
//     }
// }

class Car {
    constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImage) {
        this.ctx = ctx
        this.carPos = {
            x: carPosX,
            y: carPosY
        }
        this.carSize = {
            w: carWidth,
            h: carHeight
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
        drawingApp.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    move(dir) {
        dir === 'left' ? this.carPos.x -= 20 : null
        dir === 'right' ? this.carPos.x += 20 : null
    }
}

const controlledApp = {
    canvasTag: undefined,
    ctx: undefined,
    frames: 0,
    car: undefined,
    keys: {
        left: 37,
        right: 39
    },
    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.createCar()
        this.drawAll(id)
        this.setEventListeners()
    },

    createCar() {
        this.car = new Car(this.ctx, drawingApp.canvasSize.w / 2 - 25, drawingApp.canvasSize.h - 100, 50, 100, 'car.png')
    },

    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === this.keys.left ? this.car.move('left') : null
            e.keyCode === this.keys.right ? this.car.move('right') : null
        }
    },

    drawAll(id) {
        setInterval(() => {
            this.frames++
            // this.frames % 50 === 0 ? this.generateObstacle() : null
            this.clearScreen()
            drawingApp.init(id)
            this.car.draw()
        }, 70)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, drawingApp.canvasSize.w, drawingApp.canvasSize.h)
    }
}