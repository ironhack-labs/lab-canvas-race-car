class Obstacles {
   constructor(ctx, canvasSize) {
      this.ctx = ctx
      this.canvasSize = {
         w: 500,
         h: 700
      }

      this.obstaclesSize = {
         h: 25,
         w: 100 + Math.random() * 100
      }

      this.obstaclesPos = {
         x: 130 + Math.random() * 100,
         y: 0
      }

      this.obstaclesSpeed = {
         speed: 5
      }
   }


   draw() {
      this.ctx.fillStyle = '#536872',
      this.ctx.fillRect(this.obstaclesPos.x, this.obstaclesPos.y, this.obstaclesSize.w, this.obstaclesSize.h)
   }

   move() {
      this.obstaclesPos.y += this.obstaclesSpeed.speed
   }

}