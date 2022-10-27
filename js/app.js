const app = {
    appName: 'Car Race',
    version: '1.0.0',
    license: undefined,
    author: 'Miguel Ángel García',
    description: 'car race',
    ctx: undefined,
    imageInstance: undefined,
    
    
    canvasSize: {
        w: '500', h: '700'
    },
    init() {
        console.log('hola')
        this.setContext()
        this.setEvenHandlers()
        this.createCar()
        this.start()
        
    },
    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
    },
    
    drawRoad() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
       
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(60, 0, this.canvasSize.w - 480, this.canvasSize.h)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(420, 0, this.canvasSize.w - 480, this.canvasSize.h)
        

      
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)


        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        
        this.ctx.stroke()
        this.ctx.setLineDash([60, 20])
        
        
    },


     carData: {
        pos: { x: 200 , y: 590},
        size: { w: 100, h: 100 },
        image: './images/car.png'
    },
    setEvenHandlers() {
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
    },
    createCar() {
        this.imageInstance = new Image()
        this.imageInstance.src=this.carData.image
    },
    start() {
        setInterval(() => {
            this.clearAll()
            this.drawAll()
            this.drawCar()
        },50)
    },
    clearAll() {
        this.ctx.clearRect(0,0,this.canvasSize.w,this.canvasSize.h)
    },
    drawAll() {
        this.drawRoad()
        this.setEvenHandlers
    },
    drawCar() {
        this.ctx.drawImage(
        this.imageInstance,
            this.carData.pos.x,
            this.carData.pos.y,
            this.carData.size.w,
            this.carData.size.h
        )
    }

    }




