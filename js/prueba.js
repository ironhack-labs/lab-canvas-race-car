


 backgroundImage() = {
    img: this.drawRoad
    x: 0,
    speed: -1,

    move: function () {
        this.x += this.speed;
        this.x %= canvas.height;
    },

    draw: function () {
        ctx.drawRoad(this.img, this.x, 0);
        if (this.speed < 0) {
            ctx.drawRoad(this.img, this.x + canvas.height, 0);
        } else {
            ctx.drawRoad(this.img, this.x - this.img.height, 0);
        }
    },


    function updateCanvas() {
        backgroundImage.move()

ctx.clearRect(0, 0, canvas.height, canvas.whith);
backgroundImage.draw();

    
}
}