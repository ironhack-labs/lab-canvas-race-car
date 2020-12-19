class Car {
    constructor(ctx) {
      this.ctx = ctx

      this.x = 225
      this.y = 550
      this.w = 60
      this.h = 100

      this.vx = 0
      this.vy = 0

      this.imgCar = new Image()
      this.imgCar.src = './images/car.png'

      this.imgCar.isReady = false
      this.imgCar.onload = () => {
      this.imgCar.isReady = true
      }

      this.movements = {
        right: false,
        left: false
      }
  
      this.score = 0
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

  onKeyEvent(event) {
    const status = event.type === 'keydown'

    switch (event.keyCode) {
        case KEY_RIGHT:
            this.movements.right = status
            break;
        case KEY_LEFT:
            this.movements.left = status
            break;
        default:
            break;
    }
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

  collisionWith(obstacles) {
    if (this.x < obstacles.x + obstacles.w && 
      this.x + this.w < obstacles )
  }
}
