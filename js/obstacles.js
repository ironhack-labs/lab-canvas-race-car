class Obstacles {
    constructor(ctx){
        this.ctx = ctx;

        this.width = this.randomWidth();
        this.height = 30;

        this.x = this.randomPos();
        this.y = -this.height;

        this.vy = 7;
    }

    draw() {
        this.ctx.fillRect(this.x, this.y, this.width, this.height)
    }

    move() {
        this.y += this.vy;
    }

    randomPos() {
        const options = ['left', 'right'];
        let resultPos = options[Math.floor(Math.random() * options.length)];

        if(resultPos === 'left'){
            return 38;
        } else {
            return this.ctx.canvas.width - (this.width + 34);
        }
    }

    randomWidth() {
        return Math.floor(Math.random() * (340 - 100) + 100)
    }
}