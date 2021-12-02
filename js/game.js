const obstacleFrames = 80;

class Game {
    constructor(ctx){
        this.ctx = ctx;

        this.board = new Board(ctx);
        this.car = new Car(ctx);

        this.obstacles = [];
        this.obstacleFramesCount = 0;

        this.intervalId = undefined;
        this.fps = 1000 / 60;

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

            this.obstacleFramesCount++;

          }, this.fps)
        }
    }

    clear(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        const previousObstaclesLength = this.obstacles.length;

        this.obstacles = this.obstacles.filter(obstacle => obstacle.y + 30 > 0);

        console.log(this.obstacles.length);
        console.log(previousObstaclesLength);

        if (this.obstacles.length < previousObstaclesLength) { 
        this.score++;
        }
    }

    draw(){
        this.board.draw();

        this.obstacles.forEach(obstacle => obstacle.draw());
        
        this.car.draw();
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
    

}