const board = {
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { width: undefined, height: undefined },

  init() {
    this.setContext()
    this.setDimensions()

    this.drawBordRectagles()
    this.drawRegularLines()
  },

  setContext() {
    this.canvasDOM = document.querySelector("#canvas")
    this.ctx = this.canvasDOM.getContext("2d")
  },

  setDimensions() {
    this.canvasSize.width = 500
    this.canvasSize.height = 700
  },


  drawBordRectagles() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, this.canvasSize.width, this.canvasSize.height)
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(50, 0, this.canvasSize.width - 100, this.canvasSize.height)

    this.ctx.fillStyle = "white";
    this.ctx.fillRect(70, 0, 20, this.canvasSize.height)
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(410, 0, 20, this.canvasSize.height)
  },

  drawRegularLines() {

    this.ctx.beginPath()
    this.ctx.strokeStyle = 'white'
    this.ctx.lineWidth = 6
    this.ctx.setLineDash([35, 25]);
    this.ctx.moveTo(this.canvasSize.width / 2, 0)
    this.ctx.lineTo(this.canvasSize.width / 2, this.canvasSize.height)
    this.ctx.stroke()
    this.ctx.closePath()
  },

}

