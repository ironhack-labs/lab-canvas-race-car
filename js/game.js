/** @type {HTMLCanvasElement} */

class Game {
    constructor(ctx, width, height, car) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.car = car;
        this.intervalId = null;
        this.frames = 0;
        this.enemies = [];
    }

    start() {
        this.intervalId = setInterval(this.update, 1000/60);
    }

    update = () => {
        this.frames++;
        this.clear();
        this.car.draw();
        this.car.newPosition();
        this.updateEnemies();
    }

    stop() {
        clearInterval(this.intervalId);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height)
    }

    updateEnemies() {
        for(let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].y += 1;
            this.enemies[i].draw();
        }

        if (this.frames % 240 === 0) {
            let y = 700;

            // width of the columns/enemies
            let minWidth = 50;
            let maxWidth = 120;

            let width = Math.floor(Math.random() * maxWidth - minWidth) + minWidth;

            // gap between obstacles
            let minGap = 80;
            let maxGap = 350;

            let gap = Math.floor(Math.random() * maxGap - minGap ) + minGap;

            // left enemies
            this.enemies.push(new Component(0, 0, width, 40, "yellow", this.ctx));
            // right enemie
            this.enemies.push(new Component(width + gap, 0, y - width - gap, 40, "yellow", this.ctx));

        }
    }

}