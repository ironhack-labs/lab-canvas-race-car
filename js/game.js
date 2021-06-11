const gameApp = {
    name: 'Race Car',
    description: 'Canvas Race Car App',
    author: 'Luca Tuveri',
    license: undefined,
    version: undefined,
    repository: undefined,
    ctx: undefined,
    canvasDom: undefined,
    canvasSize: { w: 500, h: 700 },
    init() {
        this.setContext()
        this.drawBackgroud()
        this.createCar()
        this.gameDraw()
        this.setListeners()
        this.start()
    },
    setContext() {
        // this.canvasDOM = document.querySelector(#game-board)
        this.canvasDom = document.querySelector('#canvas')
        this.ctx = this.canvasDom.getContext('2d')
        console.log('contesto è questo', this.ctx);
    },
    drawBackgroud() {

        this.ctx.lineWidth = 460
        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h);
        this.ctx.strokeStyle = "grey";
        this.ctx.stroke()
        this.ctx.closePath()
        //road line
        console.log('background-painting')
        this.ctx.lineWidth = 100
        this.ctx.beginPath()
        this.ctx.moveTo(0, 0)
        this.ctx.lineTo(0, this.canvasSize.h);
        this.ctx.strokeStyle = "green";
        this.ctx.stroke()
        this.ctx.closePath()
        //left line
        this.ctx.lineWidth = 100
        this.ctx.beginPath()
        this.ctx.moveTo(500, 0)
        this.ctx.lineTo(500, this.canvasSize.h);
        this.ctx.strokeStyle = "green";
        this.ctx.stroke()
        this.ctx.closePath()
        //right line
        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.moveTo(70, 0)
        this.ctx.lineTo(70, this.canvasSize.h);
        this.ctx.strokeStyle = "white";
        this.ctx.stroke()
        this.ctx.closePath()
        //left road line
        this.ctx.lineWidth = 10
        this.ctx.beginPath()
        this.ctx.moveTo(430, 0)
        this.ctx.lineTo(430, this.canvasSize.h);
        this.ctx.strokeStyle = "white";
        this.ctx.stroke()
        this.ctx.closePath()
        //right road line
         this.ctx.lineWidth = 5
         this.ctx.beginPath()
         //this.ctx.setLineDash([60, 10])//porque me crea el conflicto en toda la pantalla?? || h 02:00 buenas.... por hoy he dado todo
         this.ctx.moveTo(this.canvasSize.w / 2 - 10, 0)
         this.ctx.lineTo(this.canvasSize.w / 2 - 10, this.canvasSize.h)
         this.ctx.strokeStyle = "white";
         this.ctx.stroke()
         this.ctx.closePath()
        //middle road line || h 00:23 first time understood canvas up to here thanks ironhack....XD

    },
    setListeners() {
        document.onkeyup = e => {
            e.key === 'ArrowLeft' ? this.car.moveLeft() : null
            e.key === 'ArrowRight' ? this.car.moveRight() : null
        }
    },
    start() {
        this.createCar()


        setInterval(() => {
            this.clearScreen()
            this.gameDraw()
        }, 70)
    },

    createCar() {
        console.log('creating-cars');
        this.car = new Car(this.ctx, this.canvasSize.w / 2 - 25, this.canvasSize.h - 100, 50, 75, 'car.png')
    },
    gameDraw() {
        //console.log('drawin-cars');
        this.drawBackgroud()
        this.car.draw()
        
        
    }, 
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.gameDraw()
    },



}

class Car {

    constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImg) {
        this.ctx = ctx
        this.carPos = { x: carPosX, y: carPosY }
        this.carSize = { w: carWidth, h: carHeight }
        this.carImage = carImg
        this.imageInstance = undefined

        this.init()
    }

    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = `images/${this.carImage}`
    }

    draw() {
        this.ctx.drawImage(this.imageInstance, this.carPos.x, this.carPos.y, this.carSize.w, this.carSize.h)
    }

    moveLeft() {
        this.carPos.x -= 10
        console.log('left');
    }

    moveRight() {
        this.carPos.x += 10
        console.log('right');
    }
}