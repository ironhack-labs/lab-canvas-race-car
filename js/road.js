class Road {
    constructor(game) {
        this.context = game.context;
        this.width = 10;
        this.height = 30;
        this.x = game.width / 2 - 5;
        this.y = 0;
        this.speedY = 2;
    }

    draw() {
        this.context.save();
        this.context.fillStyle = "white";
        this.context.fillRect(this.x, this.y, this.width, this.height);


        this.context.restore();
    }

    update() {
        this.y += this.speedY;
    }


}