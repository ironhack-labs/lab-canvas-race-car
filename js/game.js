class Game {
    constructor(ctx){
        this.ctx = ctx,
        this.car = new Car(this.ctx, this.ctx.canva.wdith/2,100,2,20)
    }
    start(){
        this.draw();
        
    }
    draw(){
        this.car.draw();
        
    }
    move(){

    }
    colition(){

    }
}