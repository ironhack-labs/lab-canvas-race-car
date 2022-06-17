class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.intervalId = null
        this.width = ctx.canvas.width;
        this.height = ctx.canvas.height;
        this.background = new Background(this.ctx);
        this.player = new Player(this.ctx);
        this.score = new Score(this.ctx)
        this.obstacles = []
        this.timeObstacle = 0;
        this.obstacleLeft = false
        this.timeScore = 0
    }
    start() {
        this.intervalId = setInterval(() => {
            this.draw();
            this.checkCollisions()
            this.move()
            this.timeObstacle++;
            if (this.timeObstacle % 100 === 0) {
                this.addObstacle();
                this.timeScore++;
            }
        }, 1000 / 60);
    }
    move() {
        this.player.move();
        this.obstacles.forEach(obstacle => {
            obstacle.move();
        })
    }

    draw() {
        this.background.draw();
        this.player.draw();
        this.score.draw(this.timeScore)
        this.obstacles.forEach(obstacle => {
            obstacle.draw();
        });
        
        
    }

    addObstacle() {
        this.obstacles.push(new Obstacle(this.ctx, this.obstacleLeft));
        this.obstacleLeft = !this.obstacleLeft
    }

    checkCollisions(){
        let playerVsObs = this.obstacles.find(obs => {
            return obs.collide(this.player)
        })
        if (playerVsObs || this.player.x + this.player.w >= this.ctx.canvas.width || this.player.x <= 0)  {
            this.gameOver()
          }  
    }
    gameOver(){
        this.stop();
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = "red";
        this.ctx.fillText("Game Over", this.ctx.canvas.width / 2 - 70, this.ctx.canvas.height / 2);
        this.ctx.fillStyle = 'white';
        this.ctx.fillText("Your Final Score: ", this.ctx.canvas.width / 2 - 100, this.ctx.canvas.height / 2 + 50);
        this.ctx.fillText(this.timeScore, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2 + 80);

        
    }
    stop() {
        clearInterval(this.intervalId);
    }
}