class Car {

    constructor(ctx){
        this.ctx = ctx

        this.x = 250
        this.y = 350

        this.w = 75
        this.h = 150
        
        this.vx = 0
        this.vy = 0

        this.img = new Image()
        this.img.src='./images/car.png'
    }

    draw(){
        this.ctx.drawImage(
            this.img, 
            this.x,
            this.y,
            this.w,
            this.h,
        )
    }

}