// //Create the literal object with its properties and methods
// // 
// const carApp = {
//     name: "Racing cars app",
//     author: "Gabriela Casero",
//     canvasId: undefined,
//     context: undefined,
//     car: undefined,
//     frames: 0,
//     obtaclesQuan: 10,
//     canvasSize: {
//         w: undefined,
//         h: undefined
//     },


//     //To initialize the app
//     startGame(app) {
//         // depending on the argument of this function the app will be chosen
//         this.canvasId = app
//         //gets id of "canvas" and sets context 2d
//         this.context = document.getElementById(this.canvasId).getContext("2d")


//         //---------------------------------------------------------------------
//         //check this this.renderCar("../images/car.png")
//         this.renderCar("car.png")
//         this.expellObstc()
//         this.setKeyEvents()

//     },
//     //I get width and height of canvas
//     getDimensions() {

//         this.canvasSize = {
//             w: document.getElementById(this.canvasId).getAttribute("width"),
//             h: document.getElementById(this.canvasId).getAttribute("height")
//         }

//     },

//     setBackground() {
//         //drawing a green rectangle as big as the canvas
//         this.context.fillStyle = "green"
//         this.context.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

//         //on top of the green i put a grey one, that starts 30px to the right
//         //so it should end 60px to the right too
//         this.context.fillStyle = "grey"
//         this.context.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)

//     },
//     setSolidLines() {
//         //drawing two white lines as tall as the canvas

//         this.context.beginPath()
//         this.context.strokeStyle = "white"
//         this.context.lineWidth = 10
//         this.context.moveTo(50, this.canvasSize.h)
//         this.context.lineTo(50, 0)
//         this.context.stroke()

//         this.context.beginPath()
//         this.context.strokeStyle = "white"
//         this.context.lineWidth = 10
//         this.context.moveTo(this.canvasSize.w - 50, this.canvasSize.h)
//         this.context.lineTo(this.canvasSize.w - 50, 0)
//         this.context.stroke()
//     },

//     setDashedLines() {
//         //This line moves as you play so it's height is ?¿
//         this.context.beginPath()
//         this.context.strokeStyle = "white"
//         this.context.lineWidth = 10
//         this.context.setLineDash([20, 40])
//         this.context.moveTo(this.canvasSize.w / 2 - 5, this.canvasSize.h)
//         this.context.lineTo(this.canvasSize.w / 2 - 5, 0)
//         this.context.stroke()
//     },

//     // to draw the object that we will be moving we pass obj as argument for
//     // renderCar function. 
//     renderCar(nameImg) {

//         this.car = new Car(this.context, 100, 100, 200, 100, this.canvasSize, nameImg)

//         setInterval(() => {
//             this.frames++
//             //--------------------------------------------OBSTACULOS
//             this.frames % this.obtaclesQuan === 0 ? this.expellObstc() : null
//             this.refresh()
//             this.car.drawCar()
//         }, 50)
//     },
//     expellObstc() {
//         console.log("venga, haz los obstáculos")
//     },
//     setKeyEvents() {
//         document.onkeydown = event => {
//             event.keyCode === 37 ? this.car.moveCar("left") : null
//             event.keyCode === 37 ? this.car.moveCar("right") : null
//         }
//     },

//     refresh() {
//         this.context.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
//     }





// }
// // we build this class in case we want to replicate the object somehow i think
// class Car {

//     // 
//     constructor(context, posX, posY, carH, carW, canvasSize, nameImg) {
//         this.context = context
//         this.carPos = {
//             x: posX,
//             y: 40
//         }
//         this.carSize = {
//             h: carH,
//             w: carW
//         }
//         this.canvasSize = canvasSize

//         this.nameImg = nameImg

//         // everytime we find something declared to be undefined it's because 
//         //we're planning on declaring it later in a function, but we need the value 
//         //to remain NOT only inside that function, so we can use it later
//         this.imageInstance = undefined


//         //----------------------------------------------------------------
//         //If it is not working change this to this.startGame()
//         this.initCar()
//     }
//     initCar() {
//         this.imageInstance = new Image()
//         //this.imageInstance.src = `/js/${this.nameImg}`
//         this.imageInstance = `images/${this.nameImg}`


//     }



//     drawCar() {
//         //El método CanvasRenderingContext2D.drawImage() 
//         //de la API Canvas 2D proporciona diferentes formas 
//         //para dibujar una imagen dentro de canvas.
//         this.context.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
//     }

//     moveCar(direction) {
//         //In this case the car will only move 
//         //from left to right and vice versa
//         direction === "left" ? this.carPos.x -= 5 : null
//         direction === "right" ? this.carPos.x += 5 : null


//     }

// }



//NO CONSIGO QUE SALGA EL COCHE, NO SÉ POR QUÉ. 
//EMPIEZO DE NUEVO

const carApp = {
    name: 'Car run',
    author: 'Gabriela Casero',
    version: "1.0.0",
    licence: undefined,
    ctx: undefined,
    car: undefined,
    frames: 0,
    obstaclesDensity: 20,
    speed: 0,
    canvasSize: {
        w: undefined,
        h: undefined


    },
    obsPos: 0,

    init(id) {
        this.canvasId = id
        this.ctx = document.getElementById(this.canvasId).getContext('2d')
        this.getDimensions()

        this.setBackground()
        this.setSolidLines()
        this.setDashedLines()


        this.drawCar("car1.png")
        this.setEventListeners()

        console.log(this.ctx)

    },

    getDimensions() {

        this.canvasSize = {
            w: document.getElementById(this.canvasId).getAttribute("width"),
            h: document.getElementById(this.canvasId).getAttribute("height")
        }
    },

    setBackground() {
        //drawing a green rectangle as big as the canvas
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

        //on top of the green i put a grey one, that starts 30px to the right
        //so it should end 60px to the right too
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)

    },



    setSolidLines() {
        //drawing two white lines as tall as the canvas

        //AL COMENTAR LAS LÍNEAS DASHED SALEN ESTAS, PERO SI NO NO, NO SÉ POR QUÉ

        this.ctx.beginPath()
        this.ctx.strokeStyle = "white"
        this.ctx.lineWidth = 10
        this.ctx.moveTo(50, this.canvasSize.h)
        this.ctx.lineTo(50, 0)
        this.ctx.stroke()

        this.ctx.beginPath()
        this.ctx.strokeStyle = "white"
        this.ctx.lineWidth = 10
        this.ctx.moveTo(this.canvasSize.w - 50, this.canvasSize.h)
        this.ctx.lineTo(this.canvasSize.w - 50, 0)
        this.ctx.stroke()
        this.generateObstacle()

    },

    setDashedLines() {
        //This line moves as you play so it's height is ?¿
        this.ctx.beginPath()
        this.ctx.strokeStyle = "white"
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([20, 40])
        this.ctx.moveTo(this.canvasSize.w / 2 - 5, this.canvasSize.h)
        this.ctx.lineTo(this.canvasSize.w / 2 - 5, 0)
        this.ctx.stroke()
    },

    drawCar(imageName) {
        this.car = new Car(this.ctx, 100, this.canvasSize.w, 50, 100, this.canvasSize, imageName)
        setInterval(() => {
            this.frames++
            this.frames % this.obstaclesDensity === 0 ? this.generateObstacle() : null
            this.clearScreen()
            this.setBackground()
            this.setSolidLines()
            this.setDashedLines()
            this.car.draw()
            this.generateObstacle()

        }, 50)
    },
    generateObstacle() {

        this.obs = new Obstacle(this.ctx, )

        obsPosA = 0
        this.ctx.fillStyle = "blue"
        this.ctx.fillRect(60, 0, 90, 20)

    },

    moveObstacle() {

    },
    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.car.move('left') : null
            e.keyCode === 39 ? this.car.move('right') : null
        }
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }

}
class Car {
    constructor(ctx, posX, posY, carW, carH, canvasSize, imageName) {
        this.ctx = ctx
        this.carPos = {
            x: posX,
            y: posY
        }
        // this.carAround{
        //      this.x = left
        // }
        this.carSize = {
            w: carW,
            h: carH
        }
        this.canvasSize = canvasSize
        this.imageName = imageName

        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.imageName}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    move(dir) {
        dir === 'left' ? this.carPos.x -= 10 : null
        dir === 'right' ? this.carPos.x += 10 : null
    }
    // crash(obstacle) {
    //     const
    // }

}

class Obstacle {
    constructor(ctx, posX, posY, obsW, obsH, canvasSize) {
        this.ctx = ctx
        this.obsPos = {
            x: posX,
            y: posY
        }


        this.canvasSize = canvasSize

        this.init()
    }

    init() {
        console.log("hi")

    }

    moveObstacle(speed) {
        this.y += this.speed
    }
}

carApp.init("canvas")
console.log(carApp.this.Obstacle.obsPos.x)