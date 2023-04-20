const raceCarApp = {
    appName: 'backGround',
    author: "Miguel Siesto",
    version: "0.0.1",
    license: undefined,
    description: "race_car_app",
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },

    alpaCarInstance: undefined,
    alpaCarSpecs: {
        pos: { x: 215, y: 500 },
        size: { w: 70, h: 100 }
    },

    framesIndex: 0,
    obstaclesArr: [],

    init(){
        this.setContext()
        this.setDimensions()
        this.setEventListeners()
        this.setImageInstances()
        this.createObstacle()
        this.start()

        this.drawBackground()
        this.setEventListeners()
        this.setImageInstances()
    },

    setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
    },
    

    setImageInstances() {
        this.alpaCarInstance = new Image()
        this.alpaCarInstance.src = "./images/car.png"
    },

    setEventListeners() {
     document.onkeydown = event => {
         const { key } = event
         if (key == 'ArrowLeft') {
            if(this.alpaCarSpecs.pos.x < 35) {
              this.alpaCarSpecs.pos.x
            } else {
              this.alpaCarSpecs.pos.x -= 10
            }
         }
         if (key == 'ArrowRight') {

            if(this.alpaCarSpecs.pos.x > 410) {
               this.alpaCarSpecs.pos.x
            } else {
               this.alpaCarSpecs.pos.x += 10
            }
             
         }
     }
    },

    setDimensions() {
        
        this.canvasSize = {
            w: document.querySelector("canvas").getAttribute('width'),
            h: document.querySelector("canvas").getAttribute('height'),
        }
    
        console.log(this.canvasSize.w, this.canvasSize.h)
        
    },

    drawBackground() {
        this.ctx.fillStyle = '#7ad459'; //verde
        this.ctx.fillRect(this.canvasSize.w / 2 - 250, 0, 500, this.canvasSize.h);
        this.ctx.fillStyle = '#787878' //gris oscuro
        this.ctx.fillRect(this.canvasSize.w / 2 - 200, 0, 400, this.canvasSize.h);
        this.ctx.fillStyle = '#ebe6e6'  //gris claro
        this.ctx.fillRect(this.canvasSize.w / 2 - 180, 0, 360, this.canvasSize.h);
        this.ctx.fillStyle = '#787878'  //gris oscuro
        this.ctx.fillRect(this.canvasSize.w / 2 - 160, 0, 320, this.canvasSize.h);

        this.ctx.beginPath()
        this.ctx.lineWidth = 15
        this.ctx.strokeStyle = '#ebe6e6'
        this.ctx.setLineDash([60, 20])  
        this.ctx.moveTo(this.canvasSize.w/2, 0)
        this.ctx.lineTo(this.canvasSize.w /2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()
    },

    createObstacle() {
        let randomYPosition = Math.floor(Math.random() * 501);
        let randomSpeed = Math.floor(Math.random() * (26 - 10)) + 10;

        this.obstaclesArr.push(
            new Obstacle(this.ctx, this.canvasSize, randomYPosition, 100, randomSpeed),
        )
    },
    
   
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.framesIndex++
        }, 50)
    },


    drawAll() {
        this.drawBackground()
        this.ctx.drawImage(
            this.alpaCarInstance,
            this.alpaCarSpecs.pos.x,
            this.alpaCarSpecs.pos.y,
            this.alpaCarSpecs.size.w,
            this.alpaCarSpecs.size.h
        )
        
        this.obstaclesArr.forEach(elm => elm.draw())
        if (this.framesIndex % 100 === 0) this.createObstacle()
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
   

}