const basicCarApp = {
    name: 'PabloCar app',
    description: 'Canvas app drive',
    version: '1',
    author: 'Pablo Rodríguez',
    license: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: { w: 500, h: 700 }, // como se estan definiendo abajo aqui podrian ser sus valores "undefined"

    init() {
        this.setContext() // inicializido el contexto (el DOM??)
        this.setDimensions() // inicializo el canvas (su dimesion)
        this.insertImage()// inserto imagen coche
        this.setListeners()
        this.start()
    },
    setListeners() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            console.log(e.key)
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
    },

    start() {
        this.car = new Car(this.ctx, this.canvasSize.w / 2 - 40, this.canvasSize.h - 100, 80, 100, 2, this.canvasSize)
        setInterval(() => {
            //this.clearScreen() // Las comento porque me da error. no doy con el !!!
            //this.moveAll()
            this.drawAll()

            // this.framesCounter++
            // this.framesCounter % 20 === 0 ? console.log('OBSTÁCULO VAAAA') : null
        }, 1000 / 50)

    },
    setContext() {
        this.canvasDOM = document.querySelector("#canvas") //establezco con el id = canvas el tamaño del DOM
        this.ctx = this.canvasDOM.getContext('2d') // LINEA OBLIGATORIA para que sepa que es en 2d
    },
    setDimensions() {
        this.canvasSize.w = 500 // esta ya definida arriba
        this.canvasSize.h = 700 // esta ya definida arriba
        this.canvasDOM.setAttribute('width', this.canvasSize.w) //establezco ancho y alto
        this.canvasDOM.setAttribute('height', this.canvasSize.h) // LINEA OBLIGATORIA JUNTO CON LA DE ARRIBA
    },
    drawRoad() {
        //console.log("funciono")
        //console.log(this.canvasSize)
        //void ctx.fillRect(x, y, width, height);
        this.ctx.fillStyle = "green"// realizo un rectangulo verde que ocupe todo el canvasSize
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(30, 20, this.canvasSize.w - 60, this.canvasSize.h - 50)

        //LINEAS BLANCAS LATERALES
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 6
        this.ctx.beginPath() // Esta función sirve para decirle al contexto del canvas que vamos a empezar a dibujar un camino
        this.ctx.moveTo(10, 0) //this.ctx.moveTo(posicion x, posicion y) INICIAL DE LA LINEA
        //this.ctx.lineTo(posicion x, posicion y) FINAL DE LA LINEA DE LA LINEA
        this.ctx.lineTo(10, 700)
        this.ctx.stroke() // DIBUJA EL TRAZO DEL PUNTO INICIAL AL FINAL
        //this.ctx.closePath() //

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 6
        this.ctx.beginPath()
        this.ctx.moveTo(490, 0) // posicion inicial x, y
        this.ctx.lineTo(490, 700) // posicion final x, y
        this.ctx.stroke()
        //this.ctx.closePath() //NO necesaria

        //LINEA CENTRAL DISCONTINUA

        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.setLineDash([60, 30])
        this.ctx.moveTo(this.canvasSize.w / 2, 20)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h - 30)
        this.ctx.stroke()
        // this.ctx.closePath()
    },
    insertImage() {
        const imageInstance = new Image()
        imageInstance.src = "./images/car.png"
        //void ctx.drawImage(image, dx, dy, dWidth, dHeight);
        imageInstance.onload = () => this.ctx.drawImage(imageInstance,
            this.canvasSize.w / 2 - 40, this.canvasSize.h - 100, 80, 100)
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    drawObstacle() {
        const obs1 = new Obs(this.ctx, 30, 5, 200, 15, 1, this.canvasSize)
        const obs2 = new Obs(this.ctx, 150, 180, 150, 30, 1.3, this.canvasSize)
        const obs3 = new Obs(this.ctx, 20, 350, 160, 30, 1.8, this.canvasSize)
        const obs4 = new Obs(this.ctx, 145, 340, 220, 30, 2, this.canvasSize)
        const obs5 = new Obs(this.ctx, 200, 200, 200, 15, 1.45, this.canvasSize)
    },

    drawAll() {
        this.drawRoad() //inicializo la carretera.
        this.car.drawCar()
        this.obstacle.drawObstacle()
    },

};

class Car {

    constructor(ctx, posX, posY, width, height, speed, canvasSize) {
        this.ctx = ctx
        this.carPos = { x: posX, y: posY }
        this.carSize = { w: width, h: height }
        this.carImage = "car img"
        this.imageInstance = undefined
        this.carSpeed = speed
        this.canvasSize = canvasSize

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `./images/car.png`
    }

    drawCar() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y,
            this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        this.carPos.x -= 10
    }

    moveRight() {
        this.carPos.x += 10
    }
}

class Obstacle {

    constructor(ctx, posX, posY, width, height, speed, canvasSize) {
        this.ctx = ctx
        this.obsPos = { x: posX, y: posY }
        this.obsSize = { w: width, h: height }
        this.obsSpeed = speed
        this.canvasSize = canvasSize

        this.init()
    }
    init() {
        this.drawObstacle()
        this.move()
    }
    drawObstacle() {
        this.ctx.fillStyle = "blue"
        this.ctx.fillRect(this.obsPos.x, this.obsPos.y, this.obsSize.w, this.obsSize.h)
    }
    move() {

        this.obsPos.y += this.obsSpeed
    }

}

/*codigo para la colisión
let rect1 = { x: 5, y: 5, width: 50, height: 50 }
let rect2 = { x: 20, y: 10, width: 10, height: 10 }

if (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.height + rect1.y > rect2.y) {
    // ¡colision detectada!
}

// reemplazando los valores =>

if (5 < 30 &&
    55 > 20 &&
    5 < 20 &&
    55 > 10) {
    // ¡colision detecteda!
}*/
