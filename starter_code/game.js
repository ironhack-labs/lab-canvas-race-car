class Game{
  constructor(ctx){
    this.ctx = ctx
    this.background = new Board(ctx)

    this.car = new Car(ctx)
    this.intervalId = null
    this.tick = 0
    this.obstacles =  []

  }


  run(){
    
    this.intervalId = setInterval(() => {
      this.clear()
      this.draw()
      this.move()
      this.checkcollisions()

      if (this.tick++ > 100){
        this.tick = 0
        this.obstacles.push(new Obstacle(this.ctx))
      }
    }, 1000 / 60)
  }

  move(){

this.car.move()
this.obstacles.forEach(o => o.move())

  }


  draw(){
    this.background.draw()
    this.car.draw()
    this.obstacles.forEach(o => o.draw())

    
  }

  clear(){
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
  }
  checkcollisions(){
    const col = this.obstacles.some(o => {
      return o.collide(this.car) 
    })

    if(col){
      this.gameOver()
    }
  }

  gameOver(){
    this.audio.pause()
    clearInterval(this.intervalId)

    this.gameOverAudio.play()
    this.ctx.font = "40px Comic Sans MS";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "GAME OVER",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2
    );

  }
}