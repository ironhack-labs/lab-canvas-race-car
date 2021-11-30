class Game {
    constructor(ctx){
        this.ctx = ctx;

        this.board = new Board(ctx);
        this.car = new Car(ctx, 225, 550);
    }

    start(){
        this.board;
        this.car;
    }
}