class Game {
    constructor(ctx, width, height, player) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.player = player;
        this.intervalId = null;
        this.obstacles = [];
        this.frames = 0;
    }

    start() {
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    drawRoad() {
        const road = new Image();
        road.src = "/images/road.png";
        ctx.drawImage(road, 0, 0, 500, 700);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    score() {
        const points = Math.floor(this.frames / 5);
        this.ctx.font = '22px monospace';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`Score: ${points}`, 100, 50);
    }

    update = () => { //arrow function to refer to the hole class Game

        this.frames++;
        this.clear();
        this.drawRoad();
        this.player.newPosition();
        this.player.draw();
        this.updateObstacles();
        this.checkGameOver();
        this.score();
    };

    stop() {
        clearInterval(this.intervalId);
    }

    checkGameOver() {
        const crashed = this.obstacles.some((obstacle) => {            
            return this.player.crashWith(obstacle);
            
            
        })

        if (crashed) {
            this.stop();
            
        }
    }

    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].y += 5;
            this.obstacles[i].draw();
        }

        if (this.frames % 100 === 0) {
            let y = 0;
            
            let minWidth = 100;
            let maxWidth = 350;

            let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);


            //add the obstacles to the array

            this.obstacles.push(new Component(width, y, width, 50, "#870007", this.ctx));

        }
    }
}