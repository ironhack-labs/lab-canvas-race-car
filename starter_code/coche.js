function Coche(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.w = 40;
    this.h = 100;
    this.image = new Image();
    this.image.src = "./images/car.png";
    this.x = this.canvas.width / 2 - this.w / 2;
    this.y = this.canvas.height * 0.75;

    this.setListeners()
}

Coche.prototype.draw = function() {
    this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
};

Coche.prototype.setListeners = function() {
    document.onkeydown = function(event) {
        this.x += 10
    }.bind(this)
}
