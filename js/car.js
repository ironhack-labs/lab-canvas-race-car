class Car {
    constructor(ctx) {
      this.ctx = ctx
      this.x = 225
      this.y = 500
      this.w = 50
      this.h = 90

      this.vx = 0
      this.vy = 0

      this.scoreCounter = 0
      this.score = document.getElementById('score')

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

    this.x + this.w >= canvas.width ? this.x = canvas.width - this.w : 1
    this.x <= 0 ? this.x = 0 : 1

    this.y + this.h >= canvas.height ? this.y = canvas.height - this.h : 1
    this.y <= 0 ? this.y = 0 : 1
  }


  checkColision(obstacle){
    
    return this.x < obstacle.x + obstacle.w &&
      this.x + this.w > obstacle.x &&
      this.y < obstacle.y + obstacle.h &&
      this.y + this.w > obstacle.y
  }

  getScore(obstacle){
    if(!(this.y < obstacle.y + obstacle.h && this.y + this.w > obstacle.y)){
      this.scoreCounter += 0.1
      this.score.innerHTML = parseInt(this.scoreCounter)
    }
  }
}