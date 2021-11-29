class Game {
    constructor(ctx) {
        this.ctx = ctx;

        this.background = new Background(ctx);
        this.car = new Car(ctx);
    }
}