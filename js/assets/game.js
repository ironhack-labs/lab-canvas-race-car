class Game {

    constructor(canvasId) {
        this.intervalId = null;

        const canvas = document.getElementById(canvasId);
        
        this.ctx = canvas.getContext("2d")

        this.road = new Road(this.ctx)
        //this.car = new Car(this.ctx);//

    }


    start() {
        console.log(this.road)
        this.intervalId = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
        }, 1000 / 60);
    }

    stop() {
        clearInterval(this.intervalId);
    }

   /* onKeyEvent(event) {
        this.car.onKeyEvent(event);
    }*/


    draw() {
        this.road.draw()
        //this.car.draw()//
    }

    clear() {
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
    }


    move() {
        //this.road.move()//
        //this.car.move()//
    }
}