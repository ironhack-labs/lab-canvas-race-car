class Background {
  constructor(ctx) {
    this.ctx = ctx
    this.w = this.ctx.canvas.width
    this.h = this.ctx.canvas.height
    this.x = 0
    this.y = 0
    this.wGreen = 40
    this.wWhite = 10
    this.xWhite = 50

    this.yrl = 0
    this.roadLines = []
    for (this.i = 0; this.yrl <= this.ctx.canvas.height; this.i++) {
      this.yrl = this.i * 30
      this.roadLines.push(new RoadLine(this.ctx, this.yrl))
    }
    this.tick = 0
  }

  clearRoadLine() {
    this.roadLines = this.roadLines.filter(rl => {
      return rl.y + rl.h >= 0
    })
  }

  _addRoadLine() {
    this.roadLines.push(new RoadLine(this.ctx, this.ctx.canvas.height))
  }

  draw() {
    const blackRectangle = new Rectangle(
      this.ctx,
      this.x,
      this.y,
      (this.w = this.ctx.canvas.width),
      this.ctx.canvas.height,
      "grey"
    ).draw()

    const greenRectanlgeLeft = new Rectangle(
      this.ctx,
      this.x,
      this.y,
      this.wGreen,
      this.ctx.canvas.height,
      "green"
    ).draw()

    const greenRectanlgeRight = new Rectangle(
      this.ctx,
      this.ctx.canvas.width - this.wGreen,
      this.y,
      this.wGreen,
      this.ctx.canvas.height,
      "green"
    ).draw()

    const whiteRectanlgeLeft = new Rectangle(
      this.ctx,
      this.xWhite,
      this.y,
      this.wWhite,
      this.ctx.canvas.height,
      "white"
    ).draw()

    const whiteRectanlgeRight = new Rectangle(
      this.ctx,
      this.ctx.canvas.width - this.wWhite - this.xWhite,
      this.y,
      this.wWhite,
      this.ctx.canvas.height,
      "white"
    ).draw()

    this.roadLines.forEach(rl => rl.draw())

    this.tick++

    if (this.tick > 25) {
      this.tick = 0
      this._addRoadLine()
    }
  }

  move() {
    this.roadLines.forEach(rl => rl.move())
  }
}
