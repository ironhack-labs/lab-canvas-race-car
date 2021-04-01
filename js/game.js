const islRac = {
    name: 'HTML5 Canvas Game',
    description: 'Island Racer',
    author: 'Guillermo Suarez',
    license: undefined,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    car: undefined,
    boundary: {x: undefined, y: undefined, w: undefined, h: undefined, lineWidth: undefined},

    init() {
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext('2d')
        this.setCanvasSize()
        this.insertCar()
        this.loadMap()
        this.drawCar()
        this.setListeners()
    },

    setCanvasSize() {
        this.canvasSize = { w: window.innerWidth - 800, h: window.innerHeight - 150}
        //no se porque no funciono sin el -800^^ ni -150^^. Parece que el canvas se sale o algo
    },

    loadMap(){
        this.drawRoad()
        this.insertObstacles()
    },

    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, this.canvasSize.w - 60, this.canvasSize.h)
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([]) //para que no me lo resetee la linea punteada de mas abajo
        this.boundary.lineWidth = 10
        this.boundary.x = 45
        this.boundary.y = -10
        this.boundary.w = this.canvasSize.w - 90
        this.boundary.h = this.canvasSize.h + 20
        this.ctx.lineWidth = this.boundary.lineWidth
        this.ctx.strokeRect(this.boundary.x, this.boundary.y, this.boundary.w, this.boundary.h)
        //Este^^ son los boundaries.
        this.ctx.beginPath()
        this.ctx.lineWidth = 6
        this.ctx.setLineDash([25, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    insertObstacles() {
        setInterval(() => {
            this.obstacle = new Obstacle(this.ctx, this.boundary, this.car)
        }, 2500)
    },

    insertCar() {
        this.car = new Car(this.ctx, this.canvasSize, this.boundary)
    },

    drawCar() {
        setInterval(() => {
            this.clearScreen()
            this.drawRoad()
            this.car.draw()
        }, 60)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    setListeners() {
        document.onkeydown = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
            //Un extra namas pa ver si podia
            e.key === 'ArrowUp' ? this.car.moveUp() : null
        }
        document.onkeyup = e => {
            e.key === 'ArrowUp' ? this.car.moveBackDown() : null
        }
    },
}

class Car{
    constructor(ctx, canvasSize, boundary) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.boundary = boundary
        this.init()
        this.startingPos = { x: this.canvasSize.w / 2 - 25, y: this.canvasSize.h - 130 }
        this.carPos = { x: this.startingPos.x, y: this.startingPos.y }
        this.carSize = { w: 50, h: 100 }
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        if (this.boundaryCollisionDetection() !== -1) this.carPos.x -= 5
        else this.carPos.x += 5
    }

    moveRight() {
        if (this.boundaryCollisionDetection() !== 1) this.carPos.x += 5
        else this.carPos.x -= 5
    }

    boundaryCollisionDetection() {
        if (this.carPos.x < (this.boundary.x + this.boundary.lineWidth))
            return -1 //LeftCollision
        else if ((this.carPos.x + this.carSize.w) > ((this.boundary.x + this.boundary.w) - this.boundary.lineWidth))
            return 1 //RightCollision
        else
            return 0 //no hay colision
    }
    //EXTRAS
    moveUp() {
        this.carPos.y += -10
    }

    moveBackDown() {
        this.carPos.y = this.startingPos.y
    }
}

class Obstacle{
    constructor(ctx, boundary, car) {
        this.ctx = ctx
        this.boundary = boundary
        this.car = car
        this.obstaclePos = { x: undefined, y: undefined }
        this.obstacleSize = { width: undefined, height: undefined }
        this.obstacleMaxWidth = undefined
        this.obstacleMinWidth = undefined
        this.init()
    }

    init() {
        console.log('new obstacle initilized')
        this.draw()
        this.moveDown()
        this.obstacleMaxWidth = (this.boundary.w - this.boundary.lineWidth * 2) - (this.car.carSize.w * 2)
        this.obstacleMinWidth = this.car.carSize.w / 2
        this.obstacleSize.w = Math.floor(Math.random() * this.obstacleMaxWidth) + this.obstacleMinWidth
        this.obstacleSize.h = this.obstacleMinWidth
        this.obstaclePos.y = 0
        this.obstaclePos.x = this.spaceBetweenBoundary(this.obstacleSize.w)
    }
    
    draw() {
        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

    moveDown() {
        setInterval(() => {
            this.obstaclePos.y += 5
            this.draw()
        }, 50)
    }

    spaceBetweenBoundary(itemSize) {
        const bSize = this.boundary.w
        const iSize = itemSize
        const bCenter = (((this.boundary.x + this.boundary.w) / 2) + (this.boundary.lineWidth * 2)) - (iSize / 2)
        const addOrMinus = Math.floor(Math.random() * 2) + 1
        const maxRange = bCenter / 2
        let iPosition = 0
        if (addOrMinus === 1) {
            iPosition = bCenter + maxRange
        }
        else if (addOrMinus === 2) {
            iPosition = bCenter - maxRange
        }
        return iPosition
    }

    // carCollisionDetection() {
    //     if (this.car.carPos.x

    //     ) {
            
    //     }
    // }
    //necesito dormir 12:30am
}

