function Road(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

}
Road.prototype.drawRoad = function () {
    this.ctx.fillStyle = 'green';
    this.drawRect(0, 0, 700, 900);
    this.ctx.fillStyle = 'grey';
    this.drawRect(70, 0, 560, 900);
    this.ctx.fillStyle = 'white';
    this.drawRect(90, 0, 20, 900);
    this.drawRect(590, 0, 20, 900);
    var posX = 345;
    for (var posY = 0; posY <= 810; posY += 90) {
        this.drawRect(posX, posY, 20, 50);
    }
}


Road.prototype.drawRect = function (x, y, width, height) {
    this.ctx.fillRect(x, y, width, height);
}