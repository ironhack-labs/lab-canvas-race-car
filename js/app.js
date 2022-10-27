const app = {
    appName: "Car Race",
    version: 1.01,
    license: undefined,
    author: "Teresa Chaves",
    description: "My first Canvas lab",
    ctx: undefined,
    imageInstance: undefined,
    canvasSize: {
        w: 500, h: 700

    },

    carData: {
        pos: {
            x: 200, y: 340
        },
        size: { w: 80, h: 160 },
        image: 'images/car.png'
    },


    init() {

        this.setContext()
        this.createcar()
        this.drawnRoad()
        this.start()
        this.setEventHandlers()

    },

    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()

        }, 20)
    },


    drawAll() {

        this.drawnRoad()

        this.ctx.drawImage(
            this.imageInstance,
            this.carData.pos.x,
            this.carData.pos.y,
            this.carData.size.w,
            this.carData.size.h
        )



    },
    clearAll() {

        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)

    },

    createcar() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.carData.image
        console.log("coche")

    },

    drawnRoad() {

        this.ctx.fillStyle = "green"
        this.ctx.fillRect(0, 0, this.canvasSize.h, this.canvasSize.w)
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(30, 0, 440, this.canvasSize.w)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(45, 0, 20, 800)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(440, 0, 20, 800)
        this.ctx.beginPath()
        this.ctx.setLineDash([50, 20])
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, 500)
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "white"
        this.ctx.stroke()
        this.ctx.closePath()


    },

    setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.carData.pos.x -= 10
                    break;
                case 'ArrowRight':
                    this.carData.pos.x += 10
                    break;
            }
        }
        console.log("movimientocoche")
    },


}



