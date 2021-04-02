const raceCarApp = {
    name: 'HTML 5 Canvas Race Car App',
    description: 'Race Car Video Game',
    author: 'Juanjo Prada',
    
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    car: undefined,
    obstacle: [],
    
    init() {
    this.canvasDom = document.querySelector('#canvas')
    this.ctx = this.canvasDom.getContext('2d')
    this.setCanvasSize()
    this.drawRoad()
        this.createCar()
        this.createObstacle()
        this.setListeners()
    this.drawAll()
    
       
    },

    setCanvasSize() {
        this.canvasSize = {
            w: this.canvasDom.width,
            h: this.canvasDom.height
        }
        
    },
    

    drawRoad(){
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(this.canvasSize.w / 2 - 200, 0, this.canvasSize.w -100, this.canvasSize.h)
        this.ctx.closePath()
       
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.moveTo(65, 0)
        this.ctx.lineTo(65, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.moveTo(this.canvasSize.w - 65, 0)
        this.ctx.lineTo(this.canvasSize.w - 65, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5
        this.ctx.setLineDash([40,30])
        this.ctx.moveTo(240, 20)
        this.ctx.lineTo(240, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()   
        
    },

    createCar() {
        this.car = new Car(this.ctx)
    
    },

    createObstacle() {
        const obstacle1 = new Obstacle(this.ctx, 100, 500, 120, 100, this.canvasSize.w, this.canvasSize.h, 20)
        const obstacle2 = new Obstacle(this.ctx, 100, 500, 120, 100, this.canvasSize.w, this.canvasSize.h, 20)
        const obstacle3 = new Obstacle(this.ctx,)
        this.obstacle.push(obstacle1, obstacle2, obstacle3)
    },

    drawAll() {
        setInterval(() => {
            
            this.clearAll()
            this.frames++
            this.frames % 50 === 0 ? this.createObstacle() : null
            this.drawRoad()
            this.car.draw()
            this.obstacle.forEach(elm => elm.draw())

            
        }, 50)
    },
     

    setListeners() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }


}


class Car {

    constructor(ctx) {
        this.ctx = ctx
        this.init()
        this.carPos = { x: 190, y: 500 }
        this.carSize = { w: 100, h: 150 }
       
  
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/car.png';
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        this.carPos.x -= 20
    }

    moveRight() {
        this.carPos.x += 20
    }

}

class Obstacle {

    constructor(ctx, posX, posY, obstacleWidth, obstacleHeight, canvasWidth, canvasHeight, velY) {
        this.ctx = ctx
        this.init()
        this.obstaclePos = { x: posX, y: posY }
        this.obstacleSize = { w: obstacleWidth, h: obstacleHeight }
        this.canvasSize = { w: canvasWidth, h: canvasHeight }
        this.obstacleSpeed = velY

        
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = 'images/47441.png'
    }

    draw() {
        this.move()
        this.ctx.drawImage(this.imageInstance, this.obstaclePos.x, this.obstaclePos.y, this.obstacleSize.w, this.obstacleSize.h)
    }

    move() {

        this.obstaclePos.y += this.obstacleSpeed
    }



}
