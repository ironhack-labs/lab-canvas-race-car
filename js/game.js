class Game{
    constructor(ctx, width, height, car){
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.car = car;
        this.intervalId = null;
        this.frames = 0;
    }
    start(){
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    clear(){
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    update = () => {
        this.frames;
        this.clear();
        this.car.newPos();
    }
}