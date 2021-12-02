class Game {
    constructor(ctx){
        this.ctx = ctx;

        this.board = new Board(ctx);
        this.car = new Car(ctx);
        this.obstacle = new Obstacle(ctx, 50, 200);

        this.intervalId = undefined;
        this.fps = 1000 / 60;
    }

    start() {
        if (!this.intervalId) {
          this.intervalId = setInterval(() => {

            this.clear();
    
            this.move();
    
            this.draw();

          }, this.fps)
        }
    }

    clear(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    draw(){
        this.board.draw();

        this.obstacle.draw();
        
        this.car.draw();
    }

    move() {
        this.car.move();
    }

    setupListeners(event){
        this.car.setupListeners(event);
    }
    

}