const OBSTACLE_FRAMES = 120;

class Game {
    constructor(ctx) {

        this.ctx = ctx;
        this.road = new Road(ctx)
        this.car = new Car(ctx, 205, 475)
        
        this.obstacles = [];

        this.intervalId = undefined;
        this.fps = 1000/60;
        
        this.obstaclesFramesCount = 0;


    }

    startGame() {
       if(!this.intervalId){

        this.intervalId = setInterval(() => {
                if(this.obstaclesFramesCount % this.OBSTACLE_FRAMES === 0){
                    this.addObstacles()

                    this.obstaclesFramesCount = 0;

                }

            this.clear()

            this.move()

            this.draw()


        }, this.fps)
       } 
        
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        const previousObstaclesLenght = this.obstacles.length
        this.obstacles = this.obstacles.filter(obstacle => obstacle.y + obstacle.height > 0 )
    }

    move() {
        this.obstacles.forEach(obstacle => obstacle.move());
        this.road.move();
        this.car.move();
    }

    draw() {
        
        this.road.draw()
        this.car.draw()
        this.obstacles.forEach(obstacle => obstacle.draw());

    }
    
    addObstacles(){
        const max = this.ctx.canvas.width - 150;
        const x = Math.floor(Math.random()*max);
        this.obstacles.push(new Obstacle(this.ctx,this.canvas.height,x))
    }
    
    setupListener(event){
        this.car.setupListener(event)
    };

}