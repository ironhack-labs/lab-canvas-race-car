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

    clear(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    moveCar(event){
        if (event.key === 'ArrowLeft' && this.car.x > 70) {
            this.car.x -= 10;
            this.clear();
            this.board.draw();
            this.car.draw();
            console.log('you pushed the left key');
        } else if(event.key === 'ArrowRight' && this.car.x < 380) {
            this.car.x += 10;
            this.clear();
            this.board.draw();
            this.car.draw();
            console.log('you pushed the right key');
        }
    }
}