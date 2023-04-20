// app

const raceGame = {
    appName: "Obstacle race",
    author: "Lorena Cortés",
    version: "1.0.0" ,
    description: "Obstacle race",
    ctx: undefined, 
    canvasSize: {
        w: 500,
        h: 700
    },
    alpaCar: undefined,
    alpaCarSpecs : {
        position: { x: 210, y: 600},
        size: { x: 80 , y: 100 }
    },
    framesIndex: 0,
    obstacles : [],
    

    init(){
        this.setContext(),
        this.setImageInstances() 
        this.setEventListeners() 
        this.createObstacles()
        this.start()
    },

    setContext(){
        this.ctx = document.querySelector("canvas").getContext("2d") // cogemos el contexto
    },

    setImageInstances(){
        this.alpaCar = new Image(),
        this.alpaCar.src = "./images/car-alpacat.png"
    },
    
    createObstacles(){
        const posX = Math.random()*300
        this.obstacles.push(
            new Obstacle(this.ctx,posX)

        )
    },

    setEventListeners() {
        document.onkeydown = event => {

        const { key } = event

        if (key == 'ArrowLeft') {
            this.alpaCarSpecs.position.x -= 20
        }

        if (key == 'ArrowRight') {
            this.alpaCarSpecs.position.x += 20
         }
        }
    },

    start(){
        setInterval(()=>{
            this.clearAll()
            this.drawAll()
            this.framesIndex++
            this.drawObstacles()
        },70)
    },
    
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },

    drawAll(){ 
        this.drawRoad(),
        this.drawCar()
    },

    drawObstacles() {
        this.obstacles.forEach(elm => elm.draw())
        if (this.framesIndex % 40 === 0) this.createObstacles()
    },

    drawRoad(){
        this.ctx.fillStyle = "green",
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = "#b5b5b5"
        this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h)
        this.ctx.fillStyle = "white",
        this.ctx.fillRect(60, 0, this.canvasSize.w - 120, this.canvasSize.h)
        this.ctx.fillStyle = "#b5b5b5"
        this.ctx.fillRect(80, 0, this.canvasSize.w - 160, this.canvasSize.h)
        // linea discontinua centro carretera
        this.ctx.beginPath()
        this.ctx.lineWidth = 5
        this.ctx.strokeStyle = "white"
        this.ctx.setLineDash([30, 30]) // linea discontinua
        this.ctx.moveTo(this.canvasSize.w / 2, 0) // donde vamos a empezar a pintar
        this.ctx.lineTo(0, this.canvasSize.h * this.canvasSize.w)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    drawCar(){
        this.ctx.drawImage(
            this.alpaCar,
            this.alpaCarSpecs.position.x,
            this.alpaCarSpecs.position.y,
            this.alpaCarSpecs.size.x,
            this.alpaCarSpecs.size.y
        )
    }

}