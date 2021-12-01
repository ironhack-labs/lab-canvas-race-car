class Road {
    constructor(ctx){
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = './images/road.png';
        this.img.onload = () =>{
            this.draw()
        }

    }
    draw(){
        this.ctx.drawImage(
        this.img,
        this.x = 0,
        this.y = 1,
        this.ctx.canvas.width,
        this.ctx.canvas.height,
        )
    }
    }




