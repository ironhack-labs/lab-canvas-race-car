class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.background = new Component(this, 0, 0, this.canvas.width, this.canvas.height, "./images/road.png");
        this.racecar = new Player(this, 222, 580, 50, 90, "./images/car.png");
        //this.obstacle = new Obstacle(this, 222, 0, 100, 30, "maroon");
        this.score = 0;
    }

    start() {    
        this.drawLoop();
        this.racecar.move()
        }


    drawScore() {
        this.context.fillStyle = "white";
        this.context.font = "28px Arial";
        this.context.fillText(`Score: ${this.score}`, 200, 30);
    }

    drawLoop() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.background.drawComponent();
        this.drawScore();
        this.racecar.drawComponent();
        //this.obstacle.makeObstacle();
        window.requestAnimationFrame(() => this.drawLoop())
    };
   

    
}