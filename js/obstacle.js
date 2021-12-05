// distance between  obstacles
const OBSTACLE_FRAMES =  120;

class Obstacle{
    constructor(ctx, x, y,rW){
        this.ctx = ctx;
        // coordinates of the obstacle
        this.x = x;
        this.y = y;

        // size of the obstacle
        this.width = rW;
        this.patata = 20;
        
        // speed of the obstacles : positive "Y" => go down
        this.vy = 3;
    }

    draw(){
        this.ctx.save();
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, this.y, this.width, this.patata);
        this.ctx.restore();
    }

    move() {
        this.y += this.vy;
    }
}