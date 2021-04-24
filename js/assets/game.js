class Game {

    constructor(canvasId) {
        this.intervalId = null;

        const canvas = document.getElementById(canvasId);
        
        this.ctx = canvas.getContext("2d")

        this.road = new Road(this.ctx)
        this.car = new Car(this.ctx);

        this.tick = 0;
        this.blockings = [
            new Blocking(this.ctx)
        ]
        this.score = new Score(this.ctx);

    }


    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
            this.checkCollissions();
            this.clearObstacles();
            if(this.tick > 300){
                this.tick = 0;
                this.addObstacle()
              }
        
        }, 1000 / 60);
    }

    updateScore() {
        this.score.value += 20
    }
        
    stop() {
        clearInterval(this.intervalId);
    }

   onKeyEvent(event) {
        this.car.onKeyEvent(event);
    }

    clear() {
        this.ctx.clearRect(0,0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    clearObstacles() {
        this.blockings = this.blockings.filter((b) => {
            if(b.isVisible()) {
                return true
            } else {
                this.updateScore()
            }
        })
    }

    move() {
        this.road.move()
        this.car.move()
        this.blockings.forEach(b => b.move())
    }
    draw() {
        this.tick++
        this.road.draw()
        this.car.draw()
        this.blockings.forEach(b => b.draw())
        this.score.draw()
        
        
    }

    addObstacle() {
        const newBlocking = new Blocking (this.ctx)
        this.blockings.push(newBlocking)
        
    }

    checkCollissions() {
        const collision = this.blockings.some(blocking => {
            const colX = (
                this.car.x + this.car.w >= blocking.x &&
                this.car.x <= blocking.x + blocking.w

            )

            const colY = (
                this.car.y + this.car.h >= blocking.y &&
                this.car.y <= blocking.y + blocking.h
            )

            return colX && colY;
        })

        if (collision) {
            this.gameOver()
        }

    }

    gameOver() {
        clearInterval(this.intervalId)

        this.ctx.font = "35px Arial";
        this.ctx.textAlign = "center";
    
        this.ctx.fillText(
            "GAME OVER",
            this.ctx.canvas.width / 2, 
            this.ctx.canvas.height / 2
            );


    }
    


    
}