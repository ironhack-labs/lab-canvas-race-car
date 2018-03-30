function Game(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.road = new Road(this.canvas, this.ctx);
    // this.roads = [
    //   new Road(this.canvas, this.ctx),
    //   new Road(this.canvas, this.ctx)
    // ]

    this.car = new Car(this.canvas, this.ctx, "images/car.png");

    this.obstacles = [];
}

Game.prototype.start = function () {
    this.id= setInterval(function () {
        this.clear();
        this.road.draw();

        this.car.drawImage();
        this.drawObstacles();

        this.checkCollisions();

    }.bind(this), 30);
    setInterval(this.addObstacle.bind(this), 5000);
};

Game.prototype.clear = function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
}

Game.prototype.addObstacle = function () {
    this.obstacles.push(new Obstacle(this.canvas, this.ctx));
}
Game.prototype.drawObstacles = function () {
    var d = 1;

    for (var i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].y += d;
        this.obstacles[i].draw();
    }
};

Game.prototype.checkCollisions = function () {
    for (var j = 0; j < this.obstacles.length; j++) {
        // if ((this.obstacles[j].y + this.obstacles[j].h >= this.car.y) && (this.obstacles[j].x <= this.car.x + this.car.width)) {
        //     console.log("BOOM")
        //     clearInterval(this.id);
            
        // }
        if((Math.abs(this.obstacles[j].y - this.car.y) <= this.obstacles[j].h || (this.obstacles[j].y > this.car.y))
        && 
        (Math.abs(this.obstacles[j].x - this.car.x) <= this.obstacles[j].w) ){
            console.log ("COLISION VERTICAL!!!!!!!!!!!!!1111");
            console.log("COLISION HORIZONTAL!!!111");
            clearInterval(this.id);
        }

        // if(Math.abs(this.obstacles[j].x - this.car.x) < this.obstacles[j].w && 
        // Math.abs(this.obstacles[j].y - this.car.y) < this.obstacles[j].h){
        //     console.log("BOOOM derecho")
        // }
    }
}