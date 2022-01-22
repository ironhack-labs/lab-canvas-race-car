class BackgroundRoad {
  constructor(ctx, gameSize) {
    this.ctx = ctx;
    this.gameSize = gameSize;
  }

  draw() {
    this.drawFilledRectangle();
    this.drawRegularLines();
    this.drawDashedLines();
  }

  drawFilledRectangle() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.gameSize.w / 2 - 250, 0, 500, this.gameSize.h);
    this.ctx.fillStyle = "#808080";
    this.ctx.fillRect(this.gameSize.w - 460, 0, 420, this.gameSize.h);
  }

  drawRegularLines() {
    this.ctx.lineWidth = 15;
    this.ctx.strokeStyle = "white";

    this.ctx.beginPath();
    this.ctx.moveTo(60, 0);
    this.ctx.lineTo(60, this.gameSize.h);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.lineWidth = 15;
    this.ctx.strokeStyle = "white";

    this.ctx.beginPath();
    this.ctx.moveTo(440, 0);
    this.ctx.lineTo(440, this.gameSize.h);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawDashedLines() {
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.moveTo(250, 0);
    this.ctx.setLineDash([50, 20]);
    this.ctx.lineTo(250, this.gameSize.h);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.setLineDash([0, 0]);
  }
}
