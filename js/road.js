class Road {

    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
        this.car = new Car(this, 200, 550, 65, 100);
        this.x;
        this.y;
        this.width = 500;
        this.height = 700;
        this.score = 0;
        this.back;
        this.backImg = new Image();
        this.obstacles = [];
    }

    start() {
        this.x = 0;
        this.y = 0;
        this.loadBackground();
        this.loadCar();
        this.createObstacles();
        this.interval = setInterval(() => {
            this.clear();
            this.loadBackground();
            this.loadCar();
            this.car.changePos();
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].changePos();
                this.obstacles[i].loadObstacle();
                if (!this.car.crashWith(this.obstacles[i])) {
                    console.log('crash');
                    clearInterval(this.interval);
                }
                
                if (this.obstacles[i].y > 800) {
                    this.obstacles.splice(i, 1);
                }
            }
        },1000 / 60);
        
    }

    createObstacles() {
        if (Math.floor(Math.random() * 25) % 2 === 0) {
            this.obstacles.push(new Obstacle(this));
        }

        setTimeout(() => {
            this.createObstacles();
        }, 2000);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    loadCar() {
        this.car.drawCar();
    }

    loadBackground() {
        this.backImg.src = "./images/road.png";
        this.ctx.drawImage(this.backImg,this.x,this.y,this.width,this.height);
    }
}