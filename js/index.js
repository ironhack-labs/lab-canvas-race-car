window.onload = () => {
    document.getElementById('start-button').onclick = () => {
    app.init("canvas");
    };

    //function startGame() {}*/
}

const app = {
    name: "Island Racer",
    description: "Game done with canvas",
    version: "1.0.0",
    authors: "Rodrigo Garcés y Víctor Sánchez",
    license: undefined,
    canvasDom: undefined,
    ctx: undefined,
    canvasSize: {
        w: 1400,
        h: 800
    },

    init(id) {
        this.canvasDom = document.getElementById(id),
        this.canvasDom.setAttribute('width', this.canvasSize.w * .5),
        this.canvasDom.setAttribute('height', this.canvasSize.h),        
        this.ctx = this.canvasDom.getContext('2d')
        this.drawRoad()
        this.drawRoadLine()
        this.drawObstacles()
        this.drawCar('car.png')
        this.setEventListeners()
        
    },

    drawRoad() {

        this.ctx.beginPath()
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(0, 0, 400, 600)

        this.ctx.fillStyle = "#969292"
        this.ctx.fillRect(25, 0, 350, 600)

        this.ctx.fillStyle = "#fff"
        this.ctx.fillRect(35, 0, 330, 600)

        this.ctx.fillStyle = "#969292"
        this.ctx.fillRect(45, 0, 310, 600)
        this.ctx.stroke()

    },

    drawRoadLine() {

        this.ctx.beginPath()
        this.ctx.setLineDash([30, 20])
        this.ctx.strokeStyle = "white"
        this.ctx.lineWidth = 6
        this.ctx.moveTo(197, 0)
        this.ctx.lineTo(197, 600)
        this.ctx.stroke()
        
    },

    drawObstacles(){
        this.obstacle = new Obstacles (this.ctx, "#870007", 25, 20, 150, 35, 5, this.canvasSize )
        this.obstacle.drawObstacles()
    },

    drawCar(name) {
        this.car = new Car (this.ctx, name, 185, 500, 30, 80, 5, this.canvasSize)
        this.car.init()
        console.log(this.car)
        setInterval(() => {
            this.clearScreen()
            this.drawRoad()
            this.drawRoadLine()
            this.drawObstacles()
            this.car.draw()
        }, 20)
    
    },

    setEventListeners () {
        document.onkeydown = e => {
            if (e.keyCode === 37) {
                this.car.move("left")
                console.log(e.keyCode)

            
            } else if (e.keyCode === 39){
                this.car.move("right")
                console.log(e.keyCode)

            }
            
        }
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }

}

class Car {
    constructor(ctx, name, posX, posY, carW, carH, vel, canvasSize){
        this.ctx = ctx
        this.name = name
        this.posX = posX
        this.posY = posY
        this.carW = carW
        this.carH = carH
        this.vel = vel
        this.canvasSize = canvasSize
        this.car = undefined
    }
    
    init () {
        this.car = new Image()
        this.car.src = `./images/${this.name}` 
        console.log(this.car.src)
        this.car.onload = () => this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)

    }

    move(dir) {
        if(dir === "left"){
            
            if (this.posX == 25){

                alert("Te has salido de la carretera")

            }else{

                this.posX --
                this.draw()
            } 

        } else if (dir === "right") {
           
            if (this.posX == 350){

                alert("Te has salido de la carretera")

            }else{

                this.posX ++
                this.draw()
                
            }
        }
    }


    draw() {
        this.ctx.drawImage(this.car, this.posX, this.posY, this.carW, this.carH)

    }
  
}

class Obstacles {
    constructor(ctx, color, posX, posY, obsW, obsH, vel, canvasSize){
        this.ctx = ctx,
        this.posX = posX,
        this.posY = posY,
        this.obsW = obsW,
        this.obsH = obsH,
        this.vel = vel,
        this.canvasSize = canvasSize
        this.color = color

    }

    drawObstacles(){
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.posX, this.posY, this.obsW, this.obsH )
    }

    move(){
        this.posY++
    }

}



