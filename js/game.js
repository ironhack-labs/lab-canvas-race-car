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

            this.draw()

            this.move()

        }, this.fps)
       } 
        
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        const previousObstaclesLenght = this.obstacles.length
        this.obstacles = this.obstacles.filter(obstacle => obstacle.y + obstacle.height > 0 )
    }

    addObstacles(){
        const max = this.ctx.canvas.width - 150;
        const x = Math.floor(Math.random() * max);
        this.obstacles.push(new Obstacle(this.ctx,this.canvas.height,x))
    }

    draw() {
        
        this.obstacles.forEach(obstacle => obstacle.draw());
        this.road.draw()
        this.car.draw()
        

    }
    
    move() {
        this.obstacles.forEach(obstacle => obstacle.move());
        this.road.move();
        this.car.move();
    }

    

    
    
    
    
    setupListener(event){
        this.car.setupListener(event)
    };

}