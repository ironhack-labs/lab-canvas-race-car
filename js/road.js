class Road {
    constructor(ctx){
        this.ctx = ctx;

        this.y = 0
        this.vy = 4

        this.width = this.ctx.canvas.width
        this.height = this.ctx.canvas.height

        this.img = new Image();
        this.img.src = './images/road.png';
        this.img.isReady = false
        this.img.onload = () =>{
            this.draw()
        }
    }

    draw(){
        this.ctx.drawImage(
            this.img,
            this.x = 0,
            this.y = 0,
            this.ctx.canvas.width,
            this.ctx.canvas.height,
        )
    }

    move() {
        this.y += this.vy

        if (this.y >= this.height) {
          this.y = 0
        }
      }
    }




