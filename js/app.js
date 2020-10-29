const raceGame = {
    name: 'Race Game',
    description: "Race game with colisions",
    version: '1.0.0',
    license: undefined,
    author: 'Gonzalo Arguelles Navarro',
    ctx: undefined,
    //car racegame
    car: undefined,
    keys: {
        left: 37,
        right: 39
    },
    //canvas
    canvasTag: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    //obstacles
    frames: 0,
    


    //metodos del juego

    init(id) {
        this.canvasTag = document.getElementById(id)
        this.ctx = this.canvasTag.getContext('2d')
        this.setDimensions()
        this.drawCar()
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
        //fillRect(x, y, width, height)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(0,0,this.canvasSize.w,this.canvasSize.h)
        //cesped
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 30, this.canvasSize.h)
        this.ctx.fillRect(this.canvasSize.w - 30, 0, 30, this.canvasSize.h)
        //laterales
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(40, 0, 10, this.canvasSize.h)
        this.ctx.fillRect(this.canvasSize.w - 50, 0, 10, this.canvasSize.h)
        //lineas carretera
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 20
        this.ctx.beginPath()
        this.ctx.setLineDash([100, 50])  
        this.ctx.moveTo(this.canvasSize.w / 2 + 10, 0)
        this.ctx.lineTo(this.canvasSize.w / 2 + 10, this.canvasSize.h)
        this.ctx.stroke()
    },

    drawCar() {
        this.car = new Car(this.ctx, this.canvasSize.w - 290, this.canvasSize.h - 200, 100, 200, '../images/car.png')
    
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
            
            this.clearScreen()
            this.drawRoad()
            //this.frames % 50 === 0 ? this.createObstacles() : null
            this.createObstacles()
            this.car.draw()
        }, 70)
    },

    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    createObstacles() {
        this.ctx.fillStyle = "red"
        this.ctx.fillRect(0,0 + this.frames * 4, 200, 25)
    }
     
    
    
}

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
    
        if (dir === 'left' && this.carPos.x >= 0) {
            this.carPos.x -=20
        } else null
       
        if (dir === 'right' && this.carPos.x < 400) {
            this.carPos.x += 20
        } else null
    }
}







