const obstacleFrames = 80;

class Game {
    constructor(ctx){
        this.ctx = ctx;

        this.board = new Board(ctx);
        this.car = new Car(ctx);

        this.obstacles = [];

        this.intervalId = undefined;
        this.fps = 1000 / 60;

        this.obstacleFramesCount = 0;
        this.score = 0;
    }

    start() {
        if (!this.intervalId) {
          this.intervalId = setInterval(() => {
            if(this.obstacleFramesCount % obstacleFrames === 0){
                this.addObstacle();

                this.obstacleFramesCount = 0;
            }

            this.clear();
    
            this.move();
    
            this.draw();

            this.checkCollisions();

            this.obstacleFramesCount++;
          }, this.fps)
        }
    }

    clear(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        const previousObstaclesLength = this.obstacles.length;

        this.obstacles = this.obstacles.filter(obstacle => obstacle.y < this.ctx.canvas.height);
        
        if (this.obstacles.length < previousObstaclesLength) { 
            this.score++;
        }
    }

    draw(){
        this.board.draw();

        this.obstacles.forEach(obstacle => obstacle.draw());
        
        this.car.draw();

        this.drawScore();
    }

    drawScore(){
        this.ctx.save();

        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 24px sans-serif';
        this.ctx.fillText(`Score: ${this.score}`, 85, 50);

        this.ctx.restore();
    }

    move() {
        this.obstacles.forEach(obstacle => obstacle.move());

        this.car.move();
    }

    addObstacle(){
        this.obstacles.push(new Obstacle(
            this.ctx,
            Math.floor(Math.random() * (240 - 70 + 1) + 70)
        ));
    }

    setupListeners(event){
        this.car.setupListeners(event);
    }
    
    checkCollisions(){
        const condition = this.obstacles.some(obstacle => this.car.collidesWith(obstacle));
        
        console.log(condition);
        if (condition){
            this.gameOver();
            this.obstacles = [];
            this.intervalId = undefined;
            this.car.x = 225;
            this.score = 0;
        }
    }

    gameOver(){
        clearInterval(this.intervalId);

        this.ctx.save();

        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);


        this.ctx.fillStyle = 'red';
        this.ctx.textAlign = 'center';
        this.ctx.font = 'bold 24px sans-serif';
        this.ctx.fillText(`Game Over :(`, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2 - 30);
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`Your final score:`, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2 + 30);
        this.ctx.font = 'bold 28px sans-serif';
        this.ctx.fillText(`${this.score}`, this.ctx.canvas.width / 2, this.ctx.canvas.height / 2 + 60);

        this.ctx.restore();
    }

}