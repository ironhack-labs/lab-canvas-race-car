const game = {
    name: "Race App",
    author: "Gustavo Cevallos",
    version: "1.0", //--> version con mas bugs que cyberpunk
    licence: undefined,
    description: "Un maravilloso juego de cochesitos",
    ctx: undefined,
    canvasSize: {
        w: 500,
        h: 700
    },
    carInstace: undefined,
    carSpects: {
        pos: { x: 200, y: 520 },
        size: { w: 100, h: 150 }
    },
    obstacule: [],
    frameIndex: 0,
    //Ejecutable de la app

    init() {
        this.setContext()
        this.setEventListeners()
        this.setImageInstance()
        this.createObstacule()
        this.drawAll()
        this.start()
    },
    //establecemos contexto
    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },
    //iniciando el metodo
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.frameIndex++
        }, 50)
    },

    //Dibujando los elementos
    drawAll() {
        this.drawRoad()
        this.drawCar()
        this.drawObstacule()

    },
    //elimando todo
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    //DrawRoad
    drawRoad() {
        //rectangulo
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(this.canvasSize.w / 2 - 250, 0, 500, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(this.canvasSize.w / 2 - 200, 0, 400, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(this.canvasSize.w / 2 - 180, 0, 20, this.canvasSize.h)
        this.ctx.fillRect(this.canvasSize.w / 2 + 160, 0, 20, this.canvasSize.h)
        //lineas
        this.ctx.beginPath()
        this.ctx.lineWidth = 15
        this.ctx.strokeStyle = "white"
        this.ctx.setLineDash([60, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },
    //coche
    drawCar() {
        this.ctx.drawImage(
            this.carInstace,
            this.carSpects.pos.x,
            this.carSpects.pos.y,
            this.carSpects.size.w,
            this.carSpects.size.h,
        )
    },

    //InstanciamosLaImagen
    setImageInstance() {
        this.carInstace = new Image()
        this.carInstace.src = './images/car.png'
    },
    setEventListeners() {
        document.onkeyup = event => {
            const { key } = event
            if (key == 'ArrowLeft') {
                this.carSpects.pos.x -= 15
            }

            if (key == 'ArrowRight') {
                this.carSpects.pos.x += 15
            }
        }
    },

    //obstaculos
    createObstacule() {
        console.log("paso por aqui")
        this.obstacule.push(new Obstacule(this.ctx, this.canvasSize, 0))

    },

    drawObstacule() {
        this.obstacule.forEach(e => e.draw())
        if (this.framesIndex % 20 === 0) {
            this.createObstacule()
        }

    }


}