class Background{
  constructor(ctx) {
      this.ctx = ctx
      this.x = 0
      this.y = 0
      this.vy = -8

      this.width = this.ctx.canvas.width
      this.height = this.ctx.canvas.height

      this.img = new Image()
      this.img.src = 'images/road.png'

      this.img.startGame = false
      this.img.onload = () => {
          this.img.startGame = true
      }
  }
    startGame(){
        return this.img.startGame
    }
  draw(){
      if(this.startGame()){
          this.ctx.drawImage(
          this.img,
          this.x,
          this.y,
          this.width,
          this.height
          )
      }
      this.ctx.drawImage(
          this.img,
          this.x,
          this.y - this.height,
          this.width,
          this.height
      )
  }
  move(){
      this.y -= this.vy

      if(this.y >= this.height){
          this.y = 0
      }
  }
}