const app = {
    appName: 'car run in road',
    version: '1.0.0',
    license: undefined,
    autor: 'YANXIA WU',
    description: 'road+obtaculos+car',
    ctx: undefined,

    // obstaculos
    frameCounter:0,
    obstaculos:[],
    
    imageInstance: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },

   
    
    // car!! 
    car: {
        pos: { x: 215, y: 570 },
        size:{w:60,h:120},
        image: '/images/car.png' 
    },



    init() {
        // road
        this.setDimensions()
        this.setContext()
        this.drawranguloverde()
        this.drawRoadGris()
        this.drawLeftBorde()
        this.drawRightBorde()
        this.drawLineaDis()
        
        // car

        this.setEventHandlers()
        this. createCar()
       
         // crear obstaculo
        this.createObstaculos()
        

        this.start()
        
       

        
        
    },

    setDimensions() {
        this.canvasSize = {
            w: 500,
            h: 700,
        }
    },

    setContext() {
        this.ctx = document.querySelector('#canvas').getContext('2d')
    },
    //   crear el fondo verde
    drawranguloverde() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)
      
    },

    // crear el fondo gris

    drawRoadGris() {
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)
        
    },
    

    // left Borde
    drawLeftBorde() {
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(70, 0, 10, this.canvasSize.h)
    },
    // right Borde
    drawRightBorde() {
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(this.canvasSize.w - 70, 0, 10, this.canvasSize.h)
    },
    //  liena discontinua
    drawLineaDis() {
        this.ctx.beginPath()
        this.ctx.moveTo(this.canvasSize.w / 2 - 5, 0)
        this.ctx.lineTo(this.canvasSize.w / 2 - 5, this.canvasSize.h)
        this.ctx.setLineDash([60, 20])
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.stroke()
        this.ctx.closePath()
    },
    




    // car part
   
   


    createCar() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.car.image
    },
   
   setEventHandlers() {
        document.onkeydown = event => {
            switch (event.key) {
                case 'ArrowLeft':
                    this.car.pos.x -= 10
                    break;
                case 'ArrowRight':
                    this.car.pos.x += 10
                    break;
                 case 'ArrowUp':
                    this.car.pos.y -= 10
                    break;
                case 'ArrowDown':
                    this.car.pos.y += 10
                    break;
                
            }
        }
    },
   
   
//    crear obstaculos
    createObstaculos() {
        this.obstaculos.push(
            new Obstaculos(this.ctx,this.canvasSize)
        )
        
    },
   

    start() {
        setInterval(() => {
      // this.createObstaculos() 
            this.frameCounter++
            if(this.frameCounter%40===0)this.createObstaculos()
           
            this.clearAll()
            this.drawAll()

        }, 50)
    },


    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    moveAll() {
         this.obstaculos.forEach(elm => elm.move())
    },

    drawAll() {
            this.drawranguloverde()
            this.drawRoadGris()
            this.drawLeftBorde() 
            this.drawRightBorde()
            this.drawLineaDis() 

        this.ctx.drawImage(
            this.imageInstance,
            this.car.pos.x,
            this.car.pos.y,
            this.car.size.w,
            this.car.size.h
        )
        this.obstaculos.forEach(elm => elm. drawObustaculos())
    }



}