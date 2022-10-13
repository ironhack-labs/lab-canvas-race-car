class Game {
    constructor(ctx, width, height, car) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.car = car;
        this.intervalId = null;
        this.obstacles = [];
        this.frames = 0;
        this.road = new Image();
    }

    // Clear the background using the image of the road
    drawBackground() {
        this.road.src = "/images/road.png"
        ctx.drawImage(this.road, 0, 0, 500, 700 )
    }

    stop() {
        clearInterval(this.intervalId)
    }

    checkGameOver = () => {
        const crashed = this.obstacles.some((obstacle) => {
            return this.car.crashWith(obstacle);
          });
      
          if (crashed) {
            this.stop();
          }
        
    }

    score() {
        const points = Math.floor(this.frames / 30);
        this.ctx.font = '22px monospace';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText(`Score: ${points}`, 300, 50);
      }

    start() {
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    update = () => {
        this.frames++;
        this.drawBackground();
        this.car.drawCar();
        this.updateObstacles();
        this.score();

    }

    updateObstacles() {
        for (let i = 0; i < this.obstacles.length; i++) {
            //updates the position of the obstacle
            this.obstacles[i].y +=1
            // draw the obstacles
            this.obstacles[i].draw()
        }

        // update obstacles every 3 seconds = 60secs * 3
        if (this.frames % 180 === 0) {
        
           
            // calculate the width of th obstacles
            let minWidth = 75;
            let maxWidth = 300;

            let width = Math.floor(
                Math.random() * (maxWidth - minWidth + 1) +
                minWidth);
            
            let height = 35;

            let minGap = 75;
            let maxGap = 230;

            let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap)

            // add the obstacles to the array
            this.obstacles.push(new Enemy(0 + gap, 0, width,
                height, 'purple', this.ctx))

        }
    }
}

