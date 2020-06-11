const app = {
    name: "CarRace App",
    description: "Car race game",
    version: "1.0",
    authors: "Roberto González y Miguel Serrano",
    license: undefined,
    canvasDOM: undefined,
    ctx: undefined,
    canvasSize: {
        w: window.innerWidth * 0.5,
        h: window.innerHeight,
    },
    car: undefined,
    interval: undefined,
    obstacles: [],

    init(id) {
        this.canvasDom = document.getElementById(id);
        this.canvasDom.setAttribute("width", this.canvasSize.w);
        this.canvasDom.setAttribute("height", this.canvasSize.h);
        this.ctx = this.canvasDom.getContext("2d");

        this.car = new Car(this.ctx, 100, 600, 100, 200, this.canvasSize)

        this.drawAll()
        this.setEventListeners()
    },

    drawFilledSquares() {
        this.ctx.fillStyle = "#008000";
        this.ctx.fillRect(100, 0, this.canvasSize.w - 200, this.canvasSize.h);

        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(150, 0, this.canvasSize.w - 300, this.canvasSize.h);

    },

    drawLines() {
        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 15
        this.ctx.moveTo(170, 0)
        this.ctx.lineTo(170, this.canvasSize.h)
        this.ctx.stroke()

        this.ctx.beginPath()
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 15
        this.ctx.moveTo(this.canvasSize.w - 170, 0)
        this.ctx.lineTo(this.canvasSize.w - 170, this.canvasSize.h)
        this.ctx.stroke()
    },

    discont(){
        this.ctx.beginPath()
        this.ctx.setLineDash([30, 30])
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.moveTo(this.canvasSize.w / 2 - 5, 0)
        this.ctx.lineTo(this.canvasSize.w / 2 - 5, this.canvasSize.h)
        this.ctx.setLineDash([0, 0])
        this.ctx.stroke()
    },



    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.car.move('left') : null
            e.keyCode === 39 ? this.car.move('right') : null
        }
    },


    drawAll(){
        setInterval(()=> {
            this.clearAll()
            this.drawFilledSquares()
            this.drawLines()
            this.discont()
            this.car.draw()
            this.setObstacle()
        }, 50)
    },

    clearAll(){
        this.ctx.clearRect(0,0,this.canvasSize.w, this.canvasSize.h)
    },

    setObstacle(){
        this.ctx.fillStyle = "red";
        const obst1 = this.ctx.fillRect(100, 100, 200, 30);
        const obst2 = this.ctx.fillRect(365, 400, 200, 30);
        const obst3 = this.ctx.fillRect(100, 700, 200, 30);

        
        this.obstacles.push(obst1, obst2, obst3)


         console.log(this.obstacles)  // Nos está pusheando los obstáculos al array pero como undefined... entonces no podemos modificarles la posición.

            // this.obstacles.forEach(elm =>{
            //  if (this.obst.posY < (this.canvasSize.h - this.obst.h)){
            //      this.obst.posY++
            //  }
            // })
            
         
    },


    
};
// class Obstacle {
//     constructor(ctx, name, posX, posY, w, h, vel, canvasSize) {
//         this.ctx = ctx
//         this.name = name
//         this.posX = posX
//         this.posY = posY
//         this.w = w
//         this.h = h
//         this.vel = vel
//         this.canvasSize = canvasSize
//         this.obst = undefined
//     }
