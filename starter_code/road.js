function Road(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;


}
Road.prototype.drawRoad = function () {
    this.ctx.fillStyle = 'green';
    this.drawRect(this.x, this.y, 700, 900);
    this.ctx.fillStyle = 'grey';
    this.drawRect(this.x + 70, this.y, 560, 900);
    this.ctx.fillStyle = 'white';
    this.drawRect(this.x + 90, this.y, 20, 900);
    this.drawRect(this.x + 590, this.y, 20, 900);
    var posX = this.x + 345;
    posY = this.y
    for (posY; posY <= 810; posY += 90) {
        this.drawRect(posX, posY, 20, 50);
    }
}


Road.prototype.drawRect = function (x, y, width, height) {
    this.ctx.fillRect(x, y, width, height);
}



