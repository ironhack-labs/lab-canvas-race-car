const raceCar = {
    name: 'Rayo Mcqueen',
    description: 'lab exercise',
    author: 'Guillermo Muñoz',
    license: undefined,
    version:'1.0.0',
    canvasDOM: undefined,
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    car: undefined,
    obstacles: [],
    
    init(){
        this.canvasDOM = document.querySelector('#canvas')
        this.ctx = this.canvasDOM.getContext('2d')
        console.log(this.canvasDOM)
        console.log(this.ctx)
        this.setCanvasSize()
        this.drawAll()
        this.createCar()
        this.setListeners()
        
        
    },
    setCanvasSize (){
        this.canvasSize = {
            w: 500,
            h: 700,
        }
        this.canvasDOM.setAttribute('width',this.canvasSize.w)
        this.canvasDOM.setAttribute('width', this.canvasSize.h)
    },
    
    
    drawAll(){
        setInterval(() => {
            this.clearAll()
            this.drawRoad ()
            this.car.drawCar()
            this.obstacles.forEach(elm => elm.drawObstacles());

        }, 50);
        
    },
    drawRoad (){
        this.ctx.fillRect(5,5 ,this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'brown'

        this.ctx.fillRect(90, 10 , this.canvasSize.w/1.5 , this.canvasSize.h)
        this.ctx.fillStyle = 'black' 

        this.ctx.beginPath()
        this.ctx.moveTo(110, 5)
        this.ctx.lineTo(110, 800)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.moveTo(400, 5)
        this.ctx.lineTo(400, 800)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 15    
    },
    dashLines(){
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 15

        this.ctx.beginPath()
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, 100)
        this.ctx.lineTo(this.canvasSize.w / 2, 700)
        this.ctx.stroke()
        this.ctx.closePath() 
    },
   createCar(){
       this.car = new car (this.ctx)

   },
   setListeners(){
       document.onkeyup = e => {
           e.key === 'ArrowLeft' ? this.car.moveLeft() : null
           e.key === 'ArrowRight' ? this.car.moveRight() : null

       }
   },

   createObstacles(){
       const obstacle1 = new Obstacles(this.ctx, 100, 100)
       const obstacle2 = new Obstacles(this.ctx, 400, 300)
       const obstacle3 = new Obstacles(this.ctx, 230, 600)

       this.obstacles.push(obstacle1, obstacle2, obstacle3)

   },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }

    
}

class car {
    constructor(ctx){
        this.ctx = ctx
        this.init()

        this.carPos = {x: 230, y: 650}
        this.carSize ={w: 50, h: 50}
        this.drawCar()
        


    }
    init(){
        this.imageInstance = new Image ()
        this.imageInstance.src = 'images/car.png'
    }
    drawCar(){
        this.ctx.drawImage(
            this.imageInstance, 
            this.carPos.x ,
            this.carPos.y, 
            this.carSize.w, 
            this.carSize.h)
    }
    moveLeft() {
        this.carPos.x -= 5
    }

    moveRight() {
        this.carPos.x += 5
    }
}

class Obstacles{
    constructor(ctx, posX, posY){
        this.ctx = ctx
        this.obstaclesMove = {x: posX, y: posY}
        this.obstaclesLine = {x: this.obstaclesMove.x +100, y: this.obstaclesMove.y + 100}
        this.obstacleSpeed = velY

    }
    drawObstacles(){

        this.move
        this.ctx.beginPath()
        this.ctx.moveTo(posX, posY)
        this.ctx.lineTo(this.obstaclesLine.x, this.obstaclesLine.y)
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 15
    }
    move(){
       this.obstaclesMove.y -= this.obstacleSpeed
    }
    turn() {
        this.obstacleSpeed *= 5
    }

}
