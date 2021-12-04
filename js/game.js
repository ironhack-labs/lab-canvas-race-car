class Game {
    constructor(ctx){
        this.ctx = ctx;
        this. obstacles = [];

        this.car = new Car(ctx);
        this.background = new Background(ctx);

        this.intervalId = undefined;
        this.fps = 1000 / 60;

        this.score = 0;


    }

    start(){
        if(!this.intervalId){
            this.intervalId = setInterval(() => {
            this.draw();
            this.move();
            }, this.fps)
        }
        
    }

    move(){
        this.background.move();
        this.car.move();
    }

    draw(){
        this.background.draw();
        this.car.draw();
    }

    onKeyDown(keyCode){
        this.car.onKeyDown(keyCode);
    }

    onKeyUp(keyCode){
        this.car.onKeyUp(keyCode);
    }

    



}