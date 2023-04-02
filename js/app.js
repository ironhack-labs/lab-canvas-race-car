const basicCanvasForRoad = {
    name: ' Basic Canvas for Road',
    description: 'Basic Canvas app for primitive shapes drawing',
    version: '1.0',
    license: undefined,
    author: 'Pimba',
    canvasTag: undefined,
    ctx: undefined,
    canvasSize: { w: undefined, h: undefined },
    carInstance: undefined,
    carPosition: { x: 215, y: 570 },
    framesIndex: 0,
    carSize: { w: 70, h: 120 },
    obstacles: [],


    init() {

        this.setContext()
        this.setDimensions()
        this.setEventListeners()
        this.createCar()
        this.start()





    },

    setContext() {

        this.canvasTag = document.querySelector('#canvas')
        this.ctx = this.canvasTag.getContext('2d')

    },
    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 700,
        }
        this.canvasTag.setAttribute('width', this.canvasSize.w)
        this.canvasTag.setAttribute('height', this.canvasSize.h)
    },

    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++
            if (this.framesIndex % 100 === 0) this.generateObstacle()
        }, 10)
    },

    drawAll() {
        this.drawRoad()
        this.drawCar()
        // this.obstacles.forEach(elm => elm.drawObstacle())
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawRoad() {
        //rects
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'gray'
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(50, 0, 10, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(this.canvasSize.w - 60, 0, 10, this.canvasSize.h)




        //line
        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.setLineDash([30, 20])
        this.ctx.stroke()
        this.ctx.closePath()

        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 5

    },
    createCar() {
        this.carInstance = new Image();
        this.carInstance.src = './images/car.png';
    },

    drawCar() {
        this.ctx.drawImage(this.carInstance, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h)

    },

    setEventListeners() {
        document.onkeydown = evt => {
            if (evt.key === 'ArrowLeft' && this.carPosition.x > 70) this.carPosition.x -= 10
            if (evt.key === 'ArrowRight' && this.carPosition.x < 360) this.carPosition.x += 10
        }
    },



    // createObstacle() {
    //   this.obstacles.push(
    //       new Obstacle = (this.ctx, this.canvasSize, 300, 50, 2),
    //       new Obstacle = (this.ctx, this.canvasSize, 200, 50, 2),
    //       new Obstacle = (this.ctx, this.canvasSize, 100, 100, 3),
    //  )

    //


    generateObstacles() {
        console.log('OBSTÁCULO GENERADO')
    }




}

