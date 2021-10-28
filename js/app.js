const islandRacer = {
    name: "Isalnd Racer",
    description: "A car racing game",
    ctx: undefined,
    cavasDOM: undefined,
    canvasSize: { width: undefined, height: undefined },
    car: undefined,
    obstacles: [],
    framesCounter: 0,
    collisionsCounter: 0,

    init() {
        this.setContext()
        this.setDimensions()
        this.drawRoad()
        this.setListeners()
        this.createCar()
        this.createObstacles()
        this.start()
        
        
    },

    

    setContext() {
        this.canvasDOM = document.querySelector("#canvas")
        this.ctx = this.canvasDOM.getContext("2d")
    },

    setDimensions() {
        this.canvasDOM.setAttribute("width", 500)
        this.canvasDOM.setAttribute("height", 700)
        this.canvasSize.width = window.innerWidth
        this.canvasSize.height = window.innerHeight
    },

    start() {
        this.intervalID = setInterval(() => {
            this.framesCounter++
            this.framesCounter % 100 === 0 ? this.moveAll() : null
            // this.framesCounter % 100 === 0 ? this.stop() : null
            this.detectCollision()
        
            this.clearScreen()
            this.drawRoad()
            this.car.draw()
            this.randomXPosition()
            this.framesCounter >= 30 ? this.drawAll() : null

        }, 1000 / 50)
    },

    stop() {
        clearInterval(this.intervalID)
    },

    createCar() {
        this.car = new Car(this.ctx, 215, 550, 50, 100)
    },

    createObstacles() {
        this.obstacles.push(new Obstacles(this.ctx, this.randomXPosition(), 10, 100, 20))
        this.obstacles.push(new Obstacles(this.ctx, this.randomXPosition(), 80, 170, 10))
        this.obstacles.push(new Obstacles(this.ctx, this.randomXPosition(), 150, 50, 20))
        this.obstacles.push(new Obstacles(this.ctx, this.randomXPosition(), 255, 80, 10))
        this.obstacles.push(new Obstacles(this.ctx, this.randomXPosition(), 320, 100, 20))
        this.obstacles.push(new Obstacles(this.ctx, this.randomXPosition(), 410, 170, 10))
        this.obstacles.push(new Obstacles(this.ctx, this.randomXPosition(), 1, 300, 20))
        this.obstacles.push(new Obstacles(this.ctx, this.randomXPosition(), 2, 80, 10))
    },

    randomXPosition() {
        let minWidth = 30
        let maxWidth = 350
        let randomXPosition = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
        return randomXPosition;
    },


    drawAll() {
        this.obstacles.forEach(obstacle => obstacle.draw())
    },

    moveAll() {
        this.obstacles.forEach(obstacle => obstacle.moveDown())
    },

    setListeners() {
        document.onkeydown = e => {
            console.log("La tecla: ", e.key)
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    },

    drawRoad() {
        this.drawFilledRectangle();
        this.drawRegularLines();
        this.drawDashedLines();
    },

    detectCollision() {
        this.obstacles.forEach((obstacle) => {
            if (this.car.collisionObstacles(obstacle)) {
                ++this.collisionsCounter
                console.log("no collision detected"+ this.collisionsCounter)
                return (this.collisionsCounter)
            }
        })
    },

    printCounter(){
        let counter = document.querySelector("counter span")
        counter.innerText = this.collisionsCounter
    },

    drawRegularLines() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 8
        this.ctx.beginPath()
        this.ctx.setLineDash([0, 0]);
        this.ctx.moveTo(45, 0)
        this.ctx.lineTo(45, 690)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.moveTo(445, 0)
        this.ctx.lineTo(445, 690)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    drawFilledRectangle() {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(0, 0, 490, 690)
        this.ctx.fillStyle = "gray";
        this.ctx.fillRect(30, 0, 430, 690)
    },


    drawDashedLines() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.beginPath()
        this.ctx.setLineDash([20, 30])
        this.ctx.moveTo(240, 0)
        this.ctx.lineTo(240, 695)
        this.ctx.stroke()
        this.ctx.closePath()

    },



}


class Car {
    constructor(ctx, posX, posY, width, height, image) {
        this.ctx = ctx

        this.posX = posX
        this.posY = posY

        this.width = width
        this.height = height

        this.image = undefined

        this.init()
    }

    init() {
        this.image = new Image();
        this.image.src = "../images/car.png"
    }

    draw() {
        this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height)
    }

    moveLeft() {
        this.posX > 30 ? this.posX -= 15 : null
    }

    moveRight() {
        this.posX < 360 ? this.posX += 15 : null
    }

    collisionObstacles(obstacle) {

        if (this.posX < obstacle.posX + obstacle.width &&
            this.posX + this.width > obstacle.posX &&
            this.posY < obstacle.posY + obstacle.height &&
            this.height + this.posY > obstacle.posY) {
            return true;
        }
        return false;
    }
}


class Obstacles {
    constructor(ctx, posX, posY, width, height) {
        this.ctx = ctx
        this.posX = posX
        this.posY = posY
        this.width = width
        this.height = height

    }

    draw() {
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

    moveDown() {
        this.posY > 0 ? this.posY += 15 : null
    }
}



