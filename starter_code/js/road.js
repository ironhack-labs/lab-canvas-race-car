class Road {

  constructor(ctx, width, height) {
    this.ctx = ctx
    this.width = width
    this.height = height
    this.posX = 40
    console.log('carretera creada')
    //this.drawLane()
  }

  drawRoad() {
    //console.log('entro en drawLanes()')
    /* Fondo gris */
    this.ctx.fillStyle = 'gray' // cambia los colores de relleno
    this.ctx.fillRect(this.posX, 0, this.width - this.posX * 2, this.height)
    /* Lineas blanca */
    this.drawWhiteLine(this.posX + 10)
    this.drawWhiteLine(this.width - 70)
    this.drawMiddleLine()
  }
  drawWhiteLine(position) {
    this.ctx.fillStyle = 'white' // cambia los colores de relleno
    this.ctx.fillRect(position, 0, 20, this.height)
  }
  drawMiddleLine() {
    //console.log('entro en drawMiddleLine()')
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 15
    this.ctx.setLineDash([40, 20])

    this.ctx.beginPath()
    this.ctx.moveTo(this.width / 2, 0)
    this.ctx.lineTo(this.width / 2, this.height)
    this.ctx.stroke()
  }

}