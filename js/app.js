function instanceImage(name, width, height) {
    const imageInstance = new Image(width, height)
    imageInstance.src = `./images/${name}`
    return imageInstance
}

const carApp = {
    name: 'Island Racer',
    description: 'Avoid the obstacles or die',
    author: 'Jaime Fernánde-Castaño',
    version: '1.0.0',
    license: undefined,
    /** @type {CanvasRenderingContext2D} */
    ctx: undefined,
    canvasDOM: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    keys: {
        left: '',
        right: ''
    },
    car: undefined,
    background: undefined,
    obstacles: [],
    frames: 0,
    intervalId: undefined,

    init(id) {
        this.canvasDOM = document.getElementById(`${id}`)
        this.ctx = this.canvasDOM.getContext('2d')
        this.canvasSize.w = this.canvasDOM.offsetWidth
        this.canvasSize.h = this.canvasDOM.offsetHeight
        this.setEventListeners()
        this.initiateRoad()
        this.initiateCar()
        this.createObstacles()
        this.drawAll()
    },

    setEventListeners() {
        document.onkeypress = e => {
            e.key === "a" ? this.car.move(-10, 0) : null
            e.key === "d" ? this.car.move(10, 0) : null
            e.key === "w" ? this.car.move(0, -10) : null
            if (e.key === "s" && this.car.position.y < this.canvasSize.h - 89) {
                this.car.move(0, 10)
            }
        }
    },

    initiateRoad() {
        const imageName = 'road.png'
        this.background = instanceImage(imageName, this.canvasSize.w, this.canvasSize.h)
    },

    initiateCar() {
        this.car = new Car(this.ctx, this.canvasSize.w / 2 - 20, this.canvasSize.h - 90, 40, 70)
    },

    drawRoad() {
        this.ctx.drawImage(this.background, 0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    randomWidthOfObstacle() {
        return Math.floor(Math.random() * 120 + 70)
    },

    randomPositionOFObstacle() {
        return Math.random()
    },

    randomTimeBetweenObstacles() {
        return Math.floor(Math.random() * 10)
    },

    createObstacles() {
        const temporaryWidth = this.randomWidthOfObstacle()
        const obstacle = new Obstacle(this.ctx, Math.floor(this.randomPositionOFObstacle() * (420 - temporaryWidth)) + 40, -10, temporaryWidth)
        this.obstacles.unshift(obstacle)
    },

    drawAll() {
        this.intervalId = setInterval(() => {
            this.frames++
            this.clearScreen()
            this.drawRoad()
            this.car.draw()
            if (this.frames % 25 === 0) {
                this.createObstacles()
                this.frames += this.randomTimeBetweenObstacles()
            }
            this.obstacles.forEach(elm => {
                elm.draw()
                elm.position.y += 10
            })
            if (this.frames > 120 && this.frames % 30 === 0) {
                this.obstacles.pop()
            }
            this.collision()
        }, 70)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.w, this.h)
    },


    destroyCar() {

    },

    collision() {
        this.obstacles.forEach(elm => {
            if (elm.position.y + 10 > this.car.position.y &&
                elm.position.y < this.car.position.y + this.car.carSize.h &&
                elm.position.x < this.car.position.x + this.car.carSize.w &&
                elm.position.x + elm.w > this.car.position.x) {
                this.stopGame()
            }
        })
    },

    stopGame() {
        clearInterval(this.intervalId)
        this.clearScreen() // esto no parece funcionar, es como si hiciese un loop extra el setInterval antes de parar
        this.ctx.fillStyle = 'red'
        this.ctx.font = '100px sans-serif'
        this.ctx.fillText('TEO,', 160, 200)
        this.ctx.font = '60px sans-serif'
        this.ctx.fillText('¿TÚ TIENES CARNET?', 10, 350, 480)
        this.ctx.fillText('PORQUE NO LO PARECE...', 10, 450, 480)
    }
}

class Car {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.imageName = 'car.png'
        this.position = {
            x: posX,
            y: posY
        }
        this.carSize = {
            w: width,
            h: height
        }
        this.imageInstance = instanceImage(this.imageName, this.carSize.w, this.carSize.h)
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.position.x, this.position.y, this.carSize.w, this.carSize.h)
    }

    move(side, up) {
        this.position.x += side
        this.position.y += up
    }
}

class Obstacle {
    constructor(ctx, posX, posY, width) {
        this.ctx = ctx
        this.position = {
            x: posX,
            y: posY
        }
        this.w = width
    }

    draw() {
        this.ctx.fillRect(this.position.x, this.position.y, this.w, 10)
    }
}