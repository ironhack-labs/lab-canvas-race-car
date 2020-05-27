class Road extends GameObject{
    constructor(ctx) {
        super(ctx)

        this.vy = 2

        this._img.src = './images/road.png'      
    }

    draw() {
        super.draw()
        
        this._ctx.drawImage(this._img,this.x,this.y - this.h ,this.w,this.h)
    }

    move() {
        super.move()

        if (this.y >= this.h) {
            this.y = 0;
        }
    }
}