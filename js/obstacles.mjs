class Obstacles {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = Math.floor(Math.random()*(canvas.width * 0.7)-20);
        this.y = 0;
        this.speed = 5;
        this.size = 5;
        this.direction = 1;
    }

    update(){
        this.y = this.y + this.direction * this.speed;
    }

    draw(){
        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.x, 0, this.x, this.size);
    }

    setDirection(direction){
        this.direction = direction;
    }

}

export default Obstacles;
