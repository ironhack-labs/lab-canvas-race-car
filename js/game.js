class Game {
    constructor (ctx){
        this.ctx = ctx;
        
        this.background = new Road(ctx);
        this.car = new Car(ctx);

        this.intervalId = undefined   

      }
    
}