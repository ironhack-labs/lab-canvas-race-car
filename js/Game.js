const obstacleFrames = 80;

class Game {
    constructor(ctx){
        this.ctx = ctx;
        
        this.car = new Car(ctx);
        this.road = new Road(ctx);
        this.obstacles = []; 
        this.intervalId = undefined;
        this.fps = 1000 / 60;
        this.obstacleFramesCount = 0;
        this.score = 0;
    }

    start(){
        if(!this.intervalId){
            this.intervalId = setInterval(() => {
                if(this.obstacleFramesCount % obstacleFrames === 0) {
                    this.addObstacle();
                    this.obstacleFramesCount = 0;
                }
                
                this.clear();
                this.move();
                this.draw();
                this.checkCollissions();
                this.obstacleFramesCount++;
            },this.fps)
        }
    }

    clear() {
        this.ctx.clearRect(
            0, 
            0, 
            this.ctx.canvas.width, 
            this.ctx.canvas.height)
        
        const previousObstaclesLength = this.obstacles.length;

        this.obstacles = this.obstacles.filter(obstacle => obstacle.y + obstacle.height < 700 );
        
        if(this.obstacles.length < previousObstaclesLength) {
            this.score++;
        }
    }

    move() {
        this.road.move();

        this.obstacles.forEach(obstacle => obstacle.move());
    }

    draw(){
        this.road.draw();
        this.obstacles.forEach(obstacle => obstacle.draw());
        this.car.draw();
        this.drawScore();
    }

    drawScore(){
        this.ctx.save();

        this.ctx.fillStyle = 'white';
        this.ctx.font = 'bold 24px sans-serif';
        this.ctx.fillText(`Score: ${this.score} ptos`, 85, 50);

        this.ctx.restore();
    }

    addObstacle() {
        const max = this.ctx.canvas.width - 100
        const y = Math.floor(Math.random() * max)
        this.obstacles.push(
          new Obstacle(this.ctx, y , 0)
        )
    }
    
    setupListeners(event){
        this.car.setupListeners(event);
    }

    checkCollissions(){
        const condition = this.obstacles.some(obstacle => this.car.collidesWith(obstacle));

        if (condition){
            this.gameOver();
        }
    }

    gameOver(){
        clearInterval(this.intervalId);

        this.ctx.save();

        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
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