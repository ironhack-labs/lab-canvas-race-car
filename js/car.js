class Car {
    constructor(ctx, x, y, w, h, img) {
      this.ctx = ctx
      this.x = x
      this.y = y
      this.w = w
      this.h = h
  
      this.vx = 0
  
      this.img = img
    }
  
    draw() {
      this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    move(){
      if(this.x < 50){
        this.x += 20

      }
      if(this.x > 380){
      this.x += -20
      }
      
      this.x = this.x + this.vx
      
    }
/*     collisionWith (obstacles) {
      if (this.x < obstacles.x + obstacles.w && 
        this.x + this.w < obstacles )
    } */
}






