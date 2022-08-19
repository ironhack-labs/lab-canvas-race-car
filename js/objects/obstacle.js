class Obstacle {
    constructor(context) {
        this.x = 0;
        this.y = 0;
        this.context = context;
        this.draw(context);
        // this.minHeight = 20;
        // this.maxHeight = 200;
        // let height = Math.floor(Math.random() * (this.maxHeight - this.minHeight + 1) + this.minHeight);
        // let minGap = 50;
        // let maxGap = 200;
        // let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

    }

    doCollision(car) {
        car.kill();
    }

    moveDown() {
        this.y += obsMove;
    }

    draw() {
        this.context.beginPath();
        this.context.fillStyle = 'red';
        this.context.fillRect(this.x, this.y, 100, 50);
        this.context.stroke();

        // requestAnimationFrame(this.draw);
    }

    randomizePos() {
        // let x = canvas.width;
    }
}