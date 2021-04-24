class Score {
    constructor (ctx) {
        this.ctx = ctx;
        this.x = 29;
        this.y = 50;
        this.value = 0;
    }

    draw() {
        this.ctx.font = "30px Arial";
        this.ctx.fontStyle = "white";
        this.ctx.fillText(`Score: ${this.value}!`, this.x, this.y);
        }
    }

