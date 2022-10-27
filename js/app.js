const app = {
   appName: 'Canvas Race Car by IH',
   version: '1.0.0',
   licensed: undefined,
   author: 'Blabla',
   ctx: undefined,
   imageInstance: undefined,
   obstacles: [],
   framesCounter: 0,

   canvasSize: {
      h: undefined,
      w: undefined,
   },

   carData: {
      carPos: { x: 215, y: 550 },
      carSize: { h: 120, w: 60,},
      image: 'images/car.png',
      speed: 15
   },

   init(){
      this.setDimensions()
      this.setContext()
      this.createCar()
      this.drawRoad()
      this.start()
      this.setEventHandlders()
      this.createObstacle()
   },

   setDimensions() {
      this.canvasSize = {
         h: 700,
         w: 500,
      }
   },

   setContext() {
      this.ctx = document.querySelector('#canvas').getContext('2d')
   },

   start() {
      setInterval(() => {

         this.framesCounter++
         if(this.framesCounter % 50 === 0) this.createObstacle()

         this.clearAll()
         this.drawAll()
      }, 20)
   },

   drawRoad() {

      this.ctx.fillStyle = 'green',
      this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

      this.ctx.fillStyle = 'black',
      this.ctx.fillRect(50, 0, this.canvasSize.w - 100, this.canvasSize.h)

      this.ctx.fillStyle = 'white',
      this.ctx.fillRect(60, 0, this.canvasSize.w - 480, this.canvasSize.h)
      this.ctx.fillRect(420, 0, this.canvasSize.w - 480, this.canvasSize.h)

      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 20

      this.ctx.setLineDash([80, 30])
      this.ctx.moveTo(this.canvasSize.w /2 - 5 , 0)
      this.ctx.lineTo(this.canvasSize.w / 2 - 5, this.canvasSize.h)
      this.ctx.stroke()
   },

   createCar() {
      this.imageInstance = new Image()
      this.imageInstance.src = this.carData.image
   },

   createObstacle() {
      this.obstacles.push(
         new Obstacles(this.ctx, this.canvasSize)
      )
   },

   clearAll() {
      this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
   },

   drawAll() {

      this.drawRoad()
      this.ctx.drawImage(
         this.imageInstance,
         this.carData.carPos.x,
         this.carData.carPos.y,
         this.carData.carSize.w,
         this.carData.carSize.h
      )
      this.obstacles.forEach(elm => elm.draw())
      this.obstacles.forEach(elm => elm.move())
   },

   setEventHandlders() {
      document.onkeydown = event => {
         switch (event.key) {
            case 'ArrowLeft':
               this.carData.carPos.x -= this.carData.speed
               break;
            case 'ArrowRight':
               this.carData.carPos.x += this.carData.speed
               break;
            case 'ArrowDown':
               this.carData.carPos.y += this.carData.speed
               break;
            case 'ArrowUp':
               this.carData.carPos.y -= this.carData.speed
               break;
         }
      }
   }
}