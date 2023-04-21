const controlsApp = {
    appName: 'Controls app',
    author: 'Cristian Mausque',
    version: '1.0.0',
    license: undefined,
    description: 'Car Game',
    ctx: undefined,  //Contexto de la pantalla de canvas
    canvasSize: {// tamaño de la pantalla harcodeado
        w: 500,
        h: 700
    },
    frameIndex: 0, // recuento de frames ? 
    guardaObstaculos: [], //aquí se acumulan los obejetos que vas a lanzar sobre la carreta 
    carInstance: undefined,
    carSpecs: {
        pos: { x: 175, y: 510 },
        size: { w: 140, h: 160 }

    },
    init() {  //aquiguardas todos los metodos que se tienen que inicializar cuando start 
        this.setContext()
        this.drawFilledRectangle()
        this.drawDashedLines()
        this.setEventListeners()
        this.setImageInstances()
        this.start()
        this.createObstacles()


    },
    setContext() { //esto es el contexxto de canvas 
        this.ctx = document.querySelector('canvas').getContext('2d')
    },
    drawFilledRectangle() {//esto dibuja los rectangulos
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.canvasSize.w / 2 - 250, 0, 500, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(this.canvasSize.w / 2 - 200, this.canvasSize.h / 2 - 350, 400, 700)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(this.canvasSize.w / 2 - 190, this.canvasSize.h / 2 - 350, 380, 700)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(this.canvasSize.w / 2 - 175, this.canvasSize.h / 2 - 350, 350, 700)
    },
    drawDashedLines() {//esto dibuja la linea de puntos 
        this.ctx.beginPath()
        this.ctx.lineWidth = 15
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([60, 20])      // <-- patrón de repetición
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },


    setEventListeners() { //esto es lo que reacciona a los diferentes botones 
        document.onkeyup = event => {
            const { key } = event

            if (key == 'ArrowLeft') {
                this.carSpecs.pos.x -= 35
            }

            if (key == 'ArrowRight') {
                this.carSpecs.pos.x += 35
            }

            console.log(this.carSpecs)
        }
    },
    setImageInstances() { //esto setea el coche en su posicion 
        this.carInstance = new Image()
        this.carInstance.src = './images/car.png'
        this.ctx.drawImage(
            this.carInstance,
            this.carSpecs.pos.x,
            this.carSpecs.pos.y,
            this.carSpecs.size.w,
            this.carSpecs.size.h
        )
    },


    start() { //esto es el metodo que inicializa todo el sistema??
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.colision()

            if (this.frameIndex % 100 == 0) {
                this.createObstacles()

            }


            this.frameIndex++
        }, 50)
    },



    drawAll() { //esto es lo que pinta la nueva posicion del objeto 

        this.drawFilledRectangle()
        this.drawDashedLines()
        this.ctx.drawImage(
            this.carInstance,
            this.carSpecs.pos.x,
            this.carSpecs.pos.y,
            this.carSpecs.size.w,
            this.carSpecs.size.h
        )
        this.guardaObstaculos.forEach((obstaCulito) => {
            obstaCulito.drawObstacles()
            obstaCulito.move()
        })

    },

    clearAll() { //esto borra cada uno de los 
        this.drawFilledRectangle()
        this.drawDashedLines()
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    createObstacles() { //aqui se crean obstaculos 

        const posX = Math.floor(Math.random() * 400)

        const obstaculo = new obstacle(this.ctx, posX, 0)
        this.guardaObstaculos.push(obstaculo)
    },
    colision() {

        this.guardaObstaculos.forEach(eachObstacle => {
            if (this.carSpecs.pos.x < eachObstacle.posX + eachObstacle.weith &&
                this.carSpecs.pos.x + this.carSpecs.size.w > eachObstacle.posX &&
                this.carSpecs.pos.y < eachObstacle.posY + eachObstacle.high &&
                this.carSpecs.size.h + this.carSpecs.pos.y > eachObstacle.posY) {
                alert("Game Over")
            }

        })

    },


}



