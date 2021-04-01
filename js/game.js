const raceApp = {
    name: 'Car Race App',
    description: 'Car Race using some basic animations we learned today.',
    author: 'Anthony Guido',
    license: undefined,
    version: '1.0.0',
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: { w: 500, h: 700 },
    road: undefined,
    car: undefined,
    obstacles: [],
    frames: 0,

    init() {
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext('2d')
        this.setCanvasSize()
        this.createRoad() 
        this.createCar()
        this.createObstacle()
        this.setListeners()
        this.drawAll()
    },

    setCanvasSize() {        
        this.canvasDOM.setAttribute('width', this.canvasSize.w)
        this.canvasDOM.setAttribute('height', this.canvasSize.h)
    },

    createRoad() {
    this.road = new Road(this.ctx)
    },

    createCar() {
    this.car = new Car(this.ctx)
    },

    createObstacle() {
    const randomWidth = Math.floor(Math.random() * 100) + 150 
    const randomX = Math.floor(Math.random() * 150) + 50 
    const obstacle = new Obstacle(this.ctx, randomWidth, randomX)

    this.obstacles.push(obstacle)
    },

    drawAll() {
        setInterval(() => {
            this.frames++
            this.frames % 70 === 0 ? this.createObstacle() : null
            this.frames % 90 === 0 ? this.createObstacle() : null
            this.frames % 110 === 0 ? this.createObstacle() : null
            this.clearScreen()
            this.road.draw()
            this.car.draw()
            this.obstacles.forEach(elm => {
                elm.draw()
                elm.moveDown()
                if (elm.obstPos.x < this.car.carPos.x + this.car.carSize.w && elm.obstPos.x + elm.obstSize.w > this.car.carPos.x && elm.obstPos.y < this.car.carPos.y + this.car.carSize.h && elm.obstSize.h + elm.obstPos.y > this.car.carPos.y) {
                    this.gameOver() // I don't know if it is the best place to insert this but I can't find another place where I can access the element.
                }
            }) 
                }, 50)
    },

    gameOver() {
    alert("Game Over!")

    },

    setListeners() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
}

class Road {
    constructor(ctx) {
        this.ctx = ctx
        this.draw()
    }

    draw() {
        this.ctx.fillStyle = 'green' // Asphalt
        this.ctx.fillRect(0, 0, 500, 700)

        this.ctx.fillStyle = 'grey' // Asphalt
        this.ctx.fillRect(30, 0, 440, 700)

        this.ctx.beginPath() // Left Line
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([0, 0])
        this.ctx.moveTo(50, 0)
        this.ctx.lineTo(50, 700)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath() // Right Line
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([0, 0])
        this.ctx.moveTo(450, 0)
        this.ctx.lineTo(450, 700)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath() // Center Line
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 7
        this.ctx.setLineDash([20, 20])
        this.ctx.moveTo(250, 0)
        this.ctx.lineTo(250, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    }
    
}

class Car {
    constructor(ctx) {
        this.ctx = ctx
        this.init()

        this.carPos = { x:230, y:600 }
        this.carSize = { w:40, h:80 }
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png'
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        this.carPos.x -= 10
    }

    moveRight() {
        this.carPos.x += 10
    }
}

class Obstacle {
    constructor(ctx, obstWidth, obstX) {
        this.ctx = ctx
        this.canvasSize = { w: 500, h: 700 } // I needed to repeat this - I am not really sure why.
        this.obstPos = { x:obstX, y:0 }
        this.obstSize = { w:obstWidth, h:20 }
        this.draw()

    }

    draw() {
        this.ctx.fillStyle = '#B73239' 
        this.ctx.fillRect(this.obstPos.x, this.obstPos.y, this.obstSize.w, this.obstSize.h)
    }

    moveDown() {
        if (this.obstPos.y >= this.canvasSize.h) { 
            this.removeObstacle()
        } 
        this.obstPos.y += 7
    }

    removeObstacle() { // I don't know if it is the best way to clean the obstacles but it seems working.
        this.obstSize = { w:0, h:0 }
    }    
}

