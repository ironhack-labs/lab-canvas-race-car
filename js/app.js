// -- CAR RACE APP --
const carRaceApp = {
    name: 'Canvas Race Car',
    description: 'Canvas Race Car APP',
    version: '1.0.0',
    license: undefined,
    author: 'Carlos Martin-Salas Larena',
    canvasTag: undefined,
    ctx: undefined,
    car: undefined,
    obstacles: [],
    frames: 0,
    keys: {
        left: 37,
        right: 39
    },
    canvasSize: {
        w: undefined,
        h: undefined
    },

    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.drawRoad()
        this.createCar()
        this.createObstacles()
        this.drawAll()
        this.setEventListeners()
    },

    setDimensions() {
        this.canvasSize.w = 500
        this.canvasSize.h = 700
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },

    drawRoad() {
        // Info posicion de cada valor (x, y, w, h)

        // Background color green
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        // Grey road
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, 440, this.canvasSize.h)
        // White left continuos line
        this.ctx.setLineDash([0, 0])
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.moveTo(50, 0)
        this.ctx.lineTo(50, this.canvasSize.h)
        this.ctx.stroke()
        // White right continuos line
        this.ctx.setLineDash([0, 0])
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.moveTo(450, 0)
        this.ctx.lineTo(450, this.canvasSize.h)
        this.ctx.stroke()
        // White central dashed line
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.setLineDash([40, 15])
        this.ctx.moveTo(245, 0)
        this.ctx.lineTo(245, this.canvasSize.h)
        this.ctx.stroke()
    },

    createCar() {
        this.car = new Car(this.ctx, 215, 580, 60, 120, 'car.png')
    },

    createObstacles() {
        const obstacle1 = new Obstacle(this.ctx, this.canvasSize, 60, -120, 60, 120, 5, 'redcar.png')
        const obstacle2 = new Obstacle(this.ctx, this.canvasSize, 150, -120, 60, 120, 15, 'greencar.png')
        const obstacle3 = new Obstacle(this.ctx, this.canvasSize, 260, -120, 60, 120, 4, 'yellowcar.png')
        const obstacle4 = new Obstacle(this.ctx, this.canvasSize, 380, -120, 60, 120, 11, 'violetcar.png')

        this.obstacles.push(obstacle1, obstacle2, obstacle3,obstacle4)
    },

    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === this.keys.left ? this.car.move('left') : null
            e.keyCode === this.keys.right ? this.car.move('right') : null
        }
    },

    drawAll() {
        setInterval(() => {
            this.frames++
            this.frames % 70 === 0 ? this.createObstacles() : null
            this.clearScreen()
            this.drawRoad()
            this.car.draw()
            this.obstacles.forEach(elm => {
                elm.draw()
            })
        }, 70)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
}


// -- CLASE CAR --
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
        this.ctx.drawImage(this.carInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    move(dir) {
        // Para evitar que se salga el coche por la izquierda de la carretera
        if (60 > this.carPos.x) {
        } else {
            dir === 'left' ? this.carPos.x -= 18 : null
        }
        // Para evitar que se salga el coche por la derecha de la carretera
        if (450 < this.carPos.x + this.carSize.w) {
        } else {
            dir === 'right' ? this.carPos.x += 18 : null  // Nota: Por la derecha el coche toca la linea blanca porque cada movimiento lateral es de 18px, lo he ajustado lo maximo posible
        }
    }
}


// -- CLASE OBSTACLE (SON LOS COCHES DE COLORES) --
class Obstacle {
    constructor(ctx, canvasSize, obstaclePosX, obstaclePosY, obstacleWidth, obstacleHeight, speed, image) {
        this.canvasSize = {
            w: canvasSize.w,
            h: canvasSize.h
        }
        this.obstaclePos = {
            x: obstaclePosX,
            y: obstaclePosY
        }
        this.obstacleSize = {
            w: obstacleWidth,
            h: obstacleHeight
        }
        this.speed = speed
        this.imageName = image
        this.ctx = ctx
        this.imageInstance = undefined
        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.imageName}`
    }

    draw() {
        this.moveObstacle()
        this.ctx.drawImage(this.imageInstance, this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

    moveObstacle() {
        this.obstaclePos.y += this.speed
    }
}


/* -- COSAS QUE FALTAN --
Creo que hay que añadir las siguientes lineas de código para parar el juego cuando choquen los obstaculos con el coche:

// stop() {
//  clearInterval(this.interval);
//  }

Y también estas otras adaptando su contenido a este juego porque lo he sacado de https://developer.mozilla.org/es/docs/Games/Techniques/2D_collision_detection:

// if (rect1.x < rect2.x + rect2.width &&
//    rect1.x + rect1.width > rect2.x &&        // rect1 => obstacle
//    rect1.y < rect2.y + rect2.height &&       // rect2 => car
//    rect1.height + rect1.y > rect2.y) {
//     // ¡colision detectada!
// }

*/
