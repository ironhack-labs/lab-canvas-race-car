const drawRoad = {
    appName: 'Island Race',
    author: 'Roberto Cadenas',
    version: '1.0.0',
    license: undefined,
    ctx: undefined,
    gameSize: {w: undefined, h: undefined},
    obstacles: undefined,
    framesIndex: 0,
    

    init() {
        this.setContext()
        this.setSize()
        this.drawRoad2()
        this.createCar()
        this.drawAll()
        this.setEventHandlers()
        
        
        

    },

    setContext() {
        this.ctx = document.querySelector("#canvas").getContext("2d")
    },
    setSize() {
        this.gameSize = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        
    },
    drawRoad2() {
        this.drawGrass()
        this.drawDashedLines()
        
    },

    drawGrass() {
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(0, 0, this.gameSize.w, this.gameSize.h)
        this.ctx.fillStyle = "gray"
        this.ctx.fillRect(50, 0, 400, this.gameSize.h)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(65, 0, 10, this.gameSize.h)
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(425, 0, 10, this.gameSize.h)
    },

    drawDashedLines() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.beginPath()
        this.ctx.moveTo(250, 0)
        this.ctx.setLineDash([40, 20])
        this.ctx.lineTo(250, this.gameSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },


    // DRAWING CAR

    createCar() {
        this.car = new Car(this.ctx, 225, 550, 50, 100)
    },

    drawAll() {
        setInterval(() => {
            this.clearAll()
            this.drawRoad2()
            this.car.draw()
        }, 40)
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
    },

    setEventHandlers() {
        document.addEventListener("keydown", event => {
            const { key } = event
            key === "ArrowRight" ? this.car.moveRight() : null
            key === "ArrowLeft" ? this.car.moveLeft() : null
        })
    },


    // DRAWING OBSTACLES 

    
    


    
}