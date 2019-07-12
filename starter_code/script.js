window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    Race.init("mycanvas")
  }

  let Race = {
    canvas: undefined,
    ctx: undefined,
    // garage: undefined,

    init: function(id) {
      this.canvas = document.getElementById(id)
      this.ctx = this.canvas.getContext("2d")
      this.canvas.width = window.innerWidth * -0.5
      this.canvas.height = window.innerHeight * 0.95
      this.drawBackground()
      this.drawLine()
      // this.garage = new Court(
      //   0,
      //   0,
      //   this.canvas.width,
      //   this.canvas.height,
      //   this.ctx
      // )
    },

    //Llamamos a start en init para que comience automaticamente. Recordatorio *

    drawBackground: function() {
      this.ctx.fillStyle = "green"
      this.ctx.fillRect(0, 0, 300, this.canvas.height)
      this.ctx.fillStyle = "grey"
      this.ctx.fillRect(10, 0, 280, this.canvas.height)
      this.ctx.fillStyle = "white"
      this.ctx.fillRect(20, 0, 260, this.canvas.height)
      this.ctx.fillStyle = "grey"
      this.ctx.fillRect(30, 0, 240, this.canvas.height)
    },
    drawLine: function() {
      this.ctx.strokeStyle = "white"
      this.ctx.beginPath()
      this.ctx.moveTo(this.canvas.width / 2, 0)
      this.ctx.lineTo(this.canvas.width / 2, this.canvas.height)
      this.ctx.setLineDash([15, 10])
      this.ctx.stroke()
    },
    restart: function() {
      this.rectangles = new Court(
        0,
        0,
        this.canvas.width,
        this.canvas.height,
        "green"
      )
    }
  } // END OF the GAME CODE
}
