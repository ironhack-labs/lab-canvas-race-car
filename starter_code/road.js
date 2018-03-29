function Road(canvas,ctx) {
    this.canvas = canvas;
    this.w = 500;
    this.h = 600;
    this.ctx = ctx;
}

Road.prototype.drawRect = function (x, y, width, height) {
    this.ctx.fillRect(x, y, width, height)
}

Road.prototype.draw = function () {
    this.ctx.fillStyle = "green";
    this.drawRect(0, 0, 500, this.h);
    this.ctx.fillStyle = "grey";
    this.drawRect(40, 0, 420, this.h);
    this.ctx.fillStyle = "white";
    this.drawRect(50, 0, 20, this.h);
    this.drawRect(this.w - 70, 0, 20, this.h);
    this.ctx.beginPath();
    this.ctx.setLineDash([30, 15]);
    this.ctx.lineWidth = 10;
    this.ctx.moveTo(this.w / 2 - 5, 0);
    this.ctx.lineTo(this.w / 2 - 5, this.h);
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
    this.ctx.closePath();
}
