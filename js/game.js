class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.background = new Background(this.ctx);
        this.intervalId = null;
        this.car = new Car(this.ctx);
        this.obstacles = [];
        this.tickObstacle = 0;
        this.points = 0;


    }


    start() {

        this.intervalId = setInterval(() => {
            this.clear();
            this.draw();

            this.checkCollisions();
            this.move();
            this.tickObstacle++;
            if (this.tickObstacle % 200 === 0) {
                this.addObstacle()
            }
            
            this.score();
        }, 1000 / 60)

    }
    move() {
        this.background.move()
        this.car.move()
        this.obstacles.forEach(obs => obs.move())

    }
    clear() {
        this.ctx.clearRect(
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height
        )
    }
    draw() {
        this.background.draw();
        this.car.draw()
        this.obstacles.forEach(obs => obs.draw())


    }
    addObstacle() {
        this.obstacles.push(new Obstacle(this.ctx))
    }
    gameOver() {
        clearInterval(this.intervalId);
        this.intervalId = null;
        this.ctx.font = "40px Arial";
        this.fillStyel = "red";
        this.ctx.textAlign = "center";
        this.ctx.fillText(`Game Over`, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2)
    }
  

    checkCollisions() {
        let carVsObs = this.obstacles.find(obs => obs.collide(this.car))

        if (carVsObs || this.car.x + this.car.w >= CANVAS_WIDTH){
            this.gameOver();
        }else{
            this.points++
        }
            
    }

    score() {
        
        this.ctx.font = '18px serif';
        this.ctx.fillStyle = 'black';
        this.ctx.textAlign = "center";
        this.ctx.fillText(`Score:${this.points}`, 300, 100)
    }




}