class Obstacle {
    constructor (ctx) {
        this.ctx = ctx;

<<<<<<< HEAD
        // this._leftLimit = this.ctx.canvas.width * 0.10;
        // this._rightLimit = this.ctx.canvas.width * 0.80;

        this._leftLimit = 200;
        this._rightLimit = 300;
        
        this.w = Math.floor(Math.random() * (0.5 * this.ctx.canvas.width) + 100);
        this.h = 50;

        this.x = Math.random(this._leftLimit) * this._rightLimit;
        this.y = 0;

        this.vy = 2;

    }

    draw() {
        this.ctx.fillStyle = '#B82F55';
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
    }

    move() {
        this.y += this.vy;
=======
        this.dist = Math.random() 
        this.x = Math.random() > 

        this.w = this.ctx.canvas.width;
        this.h = Math.random() * 40 + 50;
>>>>>>> b477165b8e1629cce0ace383c2b3f6d7842a8edb
    }
}