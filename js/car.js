class Car {
    constructor(ctx) {
      this.ctx = ctx
      this.x = 225
      this.y = 500
      this.w = 50
      this.h = 90
  
      this.vx = 0
      this.vy = 0

      this.imgCar = new Image()
      this.imgCar.src = './images/car.png'

      this.imgCar.isReady = false
      this.imgCar.onload = () => {
        this.imgCar.isReady = true
      }

    }
  
    isReady() {
      return this.imgCar.isReady
  }

  draw() {
      if(this.isReady()){
          this.ctx.drawImage(
            this.imgCar, 
            this.x, 
            this.y, 
            this.w, 
            this.h
            )
      }

  }
    move() {
      this.x += this.vx
      this.y += this.vy
    }
  }