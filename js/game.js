class Game{
    constructor(ctx){
        this.ctx = ctx
        this.road = new Road(ctx)

        this.interval = undefined
    }

    start(){
        this.interval = setInterval(() =>{
            this.clear();

            this.draw()

            this.move()
        },1000/60)
    }

    clear(){
        this.ctx.clearRect(0,0, this.ctx.canvas.width,this.ctx.canvas.height)
    }

    draw(){
        this.road.draw()
    }
    move(){
        this.road.move()
    }
}