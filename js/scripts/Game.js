/**  @type {HTMLCanvasElement} */ 

class Game{
  constructor(ctx, width, height, car){
      this.ctx = ctx
      this.width = width
      this.height = height
      this.car = car
      this.isIntervalID = null;
      this.frames = 0;
}
start(){
  this.isIntervalID = setInterval(this.update, 1000/60)
  }

  update = () => {
    this.frames++
    this.clear()
    this.car.newPos()
    this.car.draw()
}
stop(){
  clearInterval(this.isIntervalID)
}

clear(){
  this.ctx.clearRect(0, 0, this.width, this.height)
}
}

