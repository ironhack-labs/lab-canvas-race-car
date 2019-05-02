class Player {
  constructor(ctx, url, width, height, middleLinePos) {
    this.ctx = ctx
    this.winW = width
    this.winH = height

    this.avatar = new Image()
    this.avatar.src = url
    this.avatar.width = 158 //original img width
    this.avatar.height = 319 //original img height
  }

  drawPlayer() {
    console.log('Dibujo player')
    debugger;
    this.ctx.drawImage(this.avatar, this.winW / 2 - 40, this.winH - this.avatar.height / 2, this.avatar.width / 2, this.avatar.height / 2)
  }

}