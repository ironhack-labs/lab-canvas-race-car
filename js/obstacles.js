class Obstacle {
    constructor(ctx, canvasSize) {
        this.ctx = ctx
        this.pos = {
            x: Math.random() * 400,
            y: 0,
        }
        this.size = {
            w: Math.random() * 300,
            h: 20,
        }

        // this.obsSpeed = obsSpeed;

        this.canvasSize = canvasSize;



    }

    drawObs() {
        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size.w, 30)
        this.moveObs()
        // console.log('Uh sedoso')
    }
    moveObs() {
        this.pos.y += 10;
        // console.log('Uh sedoso')
    }


}



