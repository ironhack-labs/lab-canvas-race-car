const roadApp = {		
    name: "Canvas road application",
    author: "Rafael Sánchez",
    version: "1.0.0",
    canvasSize: {
        w: undefined,
        h: undefined
    },
    
    ctx: undefined,
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext("2d")
        this.setDimensions(canvasId)
        this.drawRoad()
        this.drawDashedLines()
        this.createCar()
        this.drawCar()
        this.setEventListeners()
        this.createObs();
    },

    setDimensions(canvasId) {
        this.canvasSize = {
        w: 500,
        h: 550
    }
    document.querySelector(canvasId).setAttribute("width", this.canvasSize.w)
    document.querySelector(canvasId).setAttribute("height", this.canvasSize.h)
    
},

    drawRoad() {
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(50, 0, 400, this.canvasSize.h)
        this.ctx.setLineDash([0, 0])
        this.ctx.strokeStyle = "white"
        this.ctx.lineWidth = 20
        this.ctx.strokeRect(85, -20, 330, 700)
    }, 
     
    drawDashedLines() {
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = "white"
        this.ctx.beginPath()
        this.ctx.setLineDash([40, 40])
        this.ctx.moveTo(this.canvasSize.w / 2, 5)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    createCar() {
        this.car = new car(this.ctx, 225, 460, 50, 70, this.canvasSize)
    },

    drawCar() {
        setInterval(() => {
           this.clearAll()
           this.drawRoad()
           this.drawDashedLines()
           this.car.draw()
           this.obs.drawObs()
    }, 50)
    }, 

    setEventListeners() {
        document.onkeydown = e => {
          const { key } = e
          switch (key) {
             case "ArrowLeft":
                   this.car.moveLeft()
                   break;
               case "ArrowRight":
               this.car.moveRight()
               break;
           }
        }
    },
    
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    
    createObs() {
        this.obs = new obstacle(this.ctx, 225, 460, 50, 70, this.canvasSize)
    },
    
    }