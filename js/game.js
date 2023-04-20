const game = {
    appName: 'Island Racer',
    author: 'Paula Luengo',
    version: '1.0.0',
    license: undefined,
    description: 'Move the car left to right',
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    carInstance: undefined,
    carSpecs: {
        pos: {x: 210, y: 525},
        size: {w: 80, h: 150}
    },
    obstacles: [],
init() {
    this.setContext()
    this.setDimensions()
    this.setCarInstances()
    this.setEventListeners()
    this.createObstacles()
    this.drawAll()
    this.start()
},
setContext(){
    this.ctx = document.querySelector('canvas').getContext('2d')
},
setDimensions(){
    this.canvasSize= {
        w: 500,
        h: 700
    }
    document.querySelector('canvas').setAttribute('width', this.canvasSize.w)
    document.querySelector('canvas').setAttribute('height', this.canvasSize.h)    
},
setEventListeners(){
    document.onkeyup = event => {
        const { key } = event
        if ( key == 'ArrowLeft') {
            this.carSpecs.pos.x -= 20
        }
        if (key == 'ArrowRight'){
            this.carSpecs.pos.x += 20
        }
        if (key == 'ArrowUp'){
            this.carSpecs.pos.y -= 20
        }
        if (key == 'ArrowDown'){
            this.carSpecs.pos.y += 20
        }
        
    }
},

drawRoad(){
    this.ctx.fillStyle = '#55a630'
    this.ctx.fillRect(this.canvasSize.w / 2 - 250, 0, 500, this.canvasSize.h)
    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(this.canvasSize.w / 2 - 200, 0, 400, this.canvasSize.h)
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(this.canvasSize.w / 2 - 190, 0, 380, this.canvasSize.h)
    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(this.canvasSize.w / 2 - 175, 0, 350, this.canvasSize.h)
        //lineas
    this.ctx.beginPath()
    this.ctx.lineWidth = 10
    this.ctx.strokeStyle = 'white'
    this.ctx.setLineDash([60, 20])
    this.ctx.moveTo(250, 7)
    this.ctx.lineTo(250, 700)
    this.ctx.stroke()
    this.ctx.closePath()
},


drawCar(){
    this.ctx.drawImage(
        this.carInstance,
        this.carSpecs.pos.x,
        this.carSpecs.pos.y,
        this.carSpecs.size.w,
        this.carSpecs.size.h  
    )
} ,   

setCarInstances(){
    this.carInstance = new Image()
    this.carInstance.src = './images/car.png'
},  
    
start(){
    setInterval(() => {
        this.clearAll()
        this.drawAll()
        this.framesIndex++
    }, 50)
},

drawAll(){
    this.drawRoad()
    this.drawCar()
    this.drawObstacles()
},

clearAll(){
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
},
drawObstacles(){
    this.obstacles.forEach(elm => elm.draw())
    if (this.framesIndex % 20 === 0) this.createObstacle()
    // this.ctx.fillStyle = 'black'
    // this.ctx.fillRect(160, 100, 300, 60)
    // this.ctx.fillStyle = 'blue'
    // this.ctx.fillRect(300, 320, 140, 90)
    // this.ctx.fillStyle = 'red'
    // this.ctx.fillRect(100, 20, 140, 60)
    // this.ctx.fillStyle = 'yellow'
    // this.ctx.fillRect(140, 420, 140, 60)
},
createObstacles(){
    this.obstacles.push(
        new Block(this.ctx, this.canvasSize, 160, 100, 300, 60),
        new Block(this.ctx, this.canvasSize, 300, 320, 140, 90),
        new Block(this.ctx, this.canvasSize, 100, 20, 140, 60),
        new Block(this.ctx, this.canvasSize, 140, 420, 140, 60),
    )
}
}
