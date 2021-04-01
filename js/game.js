const carGame = {
    name: 'HTML5 Canvas Application',
    description: 'App Islande Racer',
    Author: 'Paula de Andrés',
    license: undefined,
    version: '1.0.0',
    canvasDOM: undefined,
    ctx: undefined,
    canvasSize: {w: 500, h: 700 },
    car: undefined,
    obstacles: [],
    frames:0,
    lives: 5,
    score: 0,

    init( ){
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext('2d')
        this.createRoad()
        this.drawCar()
        this.drawObstacles()
        this.setListeners()
        this.hitBox()
        
    
    },
    createRoad() {
        //Rectangulo verde
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        //Rectangulo Gris
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)
        //Primera linea blanca
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.setLineDash([])
        this.ctx.moveTo(60, 0)
        this.ctx.lineTo(60, 700)
        this.ctx.stroke()
        this.ctx.closePath()
        //Segunda linea blanca
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.setLineDash([])
        this.ctx.moveTo(440, 0)
        this.ctx.lineTo(440, 700)
        this.ctx.stroke()
        this.ctx.closePath()
        //linea blanca discontinua
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.setLineDash([40, 20])
        this.ctx.moveTo((this.canvasSize.w / 2) - 5, 0)
        this.ctx.lineTo((this.canvasSize.w / 2) - 5, 700)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    drawCar () {
        this.car = new Car(this.ctx, 205, 500, 80, 170)
    },
    drawObstacles () {
        let obstacle = new Obstacle(this.ctx, 100)
        this.obstacles.push(obstacle)

        // if(this.obstacle.blockPos.y > 700) {
        //     remove()
        // }

        this.obstacles.forEach(elm => {
        this.blockX = elm.blockPos.x
        this.blockY = elm.blockPos.y
        console.log(this.obstacles)
        
        })
    },
    drawAll() {
        setInterval(( ) => {
           
            this.frames++
            this.frames % 150 === 0 ? this.drawObstacles() : null
            this.clearScreen()
            this.createRoad()
            this.car.draw()
            this.obstacles.forEach(elm => elm.lauch())
            
         }, 1000/60)
    },
    setListeners() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
     },
    hitBox() {
    
        let carArea = { x: this.car.carPos.x, y: this.car.carPos.y, width: 80, height: 170 }
        console.log(carArea)

        let blockArea = { x: this.blockX, y: this.blockY, width: 100, height: 30 }
        console.log(blockArea)

        if (carArea.x < blockArea.x + blockArea.width &&
            carArea.x + carArea.width > blockArea.x &&
            carArea.y < blockArea.y + blockArea.height &&
            carArea.y +carArea.height> blockArea.y ){
            console.log('HIT')
        }
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
}

class Car {
    constructor(ctx, posX, posY, carWidth, carHeight) {
        this.ctx = ctx
        this.carPos = { x: posX, y : posY }
        this.carSize = {w: carWidth, h: carHeight}

        this.init()
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = './images/car.png'
    }
    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }
    moveRight() {
        this.carPos.x += 15
    }
    moveLeft() {
        this.carPos.x -= 15
    }
}

class Obstacle {
    constructor(ctx, blockWidth) {
        this.ctx = ctx
        this.blockPos = { x: Math.floor(Math.random() * 350), y: 0}
        this.blockSize = {w: blockWidth, h: 30}

        this.init()
    }
    init() {
        this.lauch()
    }
    lauch() {
        this.move()
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(this.blockPos.x, this.blockPos.y, this.blockSize.w, this.blockSize.h)
    }
    move() {
        this.blockPos.y += 2
    }
    remove() {
            this.obstacles.shift(this.obstacles[0])
        }
        
}