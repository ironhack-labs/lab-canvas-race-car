class Player {
  constructor(ctx, width, height) {
    this.ctx = ctx
    this.winW = width
    this.winH = height
    this.initialPosX = this.winW / 2 - 40

    this.avatar = new Image()
    this.avatar.src = 'images/car.png'
    this.avatar.width = 158 / 2 //original img width
    this.avatar.height = 319 / 2 //original img height

    this.initialPosY = this.winH - this.avatar.height
    this.vel = 10
  }

  drawPlayer() {
    /*  this.avatar.onload = () => {
       this.ctx.drawImage(this.avatar, this.initialPosX, this.winH - this.avatar.height, this.avatar.width, this.avatar.height)
     } */
    //this.initialPosY -= 100
    this.ctx.drawImage(this.avatar, this.initialPosX, this.initialPosY, this.avatar.width, this.avatar.height)
    //console.log('Dibujo player')
  }
  moveLeft() {
    if (this.initialPosX > 70) this.initialPosX -= this.vel
    console.log("Ahora mi posx es:", this.initialPosX)
  }
  moveRight() {
    console.log("me muevo a la derecha")
    if (this.initialPosX < 450)
      this.initialPosX += this.vel
    console.log("Ahora mi posx es:", this.initialPosX)
  }
  right() {
    return this.initialPosX
  }


}