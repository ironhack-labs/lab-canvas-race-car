const drawingApp = {
    appName: 'Canvas drawing car app',
    author: 'Ángela rueda',
    version: '1.0.0',
    license: undefined,
    gameSize: { w: undefined, h: undefined },
    ctx: undefined,
    createCar: undefined,
    Obstacle:[],
    framesIndex: 0,  
    
    
    
    init() {
        this.setContext()
        this.setSize()
        this.start()
        this.createCar()
        this.car.init()
        this.drawAll()
        this.setEventHandlers()
        this.createObstacle()
     },
     setContext() {
        this.ctx = document.querySelector('canvas').getContext('2d')
     },
     setSize() {
        this.gameSize.w = document.querySelector('canvas').getAttribute('width')
        this.gameSize.h = document.querySelector('canvas').getAttribute('height')
        
        },
        
        start() {
            this.drawRectangleGreen();
            this.lineWhite();
            this.lineWhite2();
            this.discountLine();


         },
         drawRectangleGreen() {
         
         this.ctx.fillStyle = "green"
         this.ctx.fillRect(0, 0, 500,700)
         this.ctx.fillStyle = 'gray'
         this.ctx.fillRect(13,0, 475, 700)
         },

         lineWhite() {
            
         this.ctx.beginPath()
         this.ctx.lineWidth = 10
         this.ctx.strokeStyle = 'white'
         this.ctx.moveTo(450, 0)
         this.ctx.lineTo(450, this.gameSize.h)
         this.ctx.stroke()
         this.ctx.closePath()
        
         },

         lineWhite2() {
            
         this.ctx.beginPath()
         this.ctx.lineWidth = 10
         this.ctx.strokeStyle = 'white'
         this.ctx.moveTo(60, 0)
         this.ctx.lineTo(60, this.gameSize.h)
         this.ctx.stroke()
         this.ctx.closePath()
        
         },

         discountLine() {
         this.ctx.lineWidth = 10
         this.ctx.strokeStyle = 'white'    
         this.ctx.beginPath()
         this.ctx.moveTo(250, 0)
         this.ctx.setLineDash([40,40])
         this.ctx.lineTo(250, this.gameSize.h)
         this.ctx.stroke()
         this.ctx.closePath()
         this.ctx.setLineDash([0,0])
        
         },

         createCar() {
         this.car = new Car(this.ctx, 157, 450, 50, 100)
    
        },
         drawAll() {
         setInterval(() => {
            this.clearAll()
            this.drawRectangleGreen();
            this.lineWhite();
            this.lineWhite2();
            this.discountLine()
            this.car.draw()
         }, 40)
        
         },
         clearAll() {
           this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h)
           },
         setEventHandlers() {
          document.addEventListener('keydown', event => {
          const { key } = event
            key === 'ArrowRight' ? this.car.moveRight() : null
            key === 'ArrowLeft' ? this.car.moveLeft() : null
          })
         },

      createObstacle(){}



} 