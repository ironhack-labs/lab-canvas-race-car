class Car {
    constructor() {
        this.x = 210;
        this.y = 500;
        this.width = 75
        this.height = 100
        this.img = new Image();
        this.speedX = 0;
        
        
    }
    drawCar() {
        this.img.src = "../images/car.png"
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
      
    left(){
        return this.x
    }

    right(){
        return this.x + this.width
    }

    crashHeigth(obstacle){
        return !(
            this.bottom() < obstacle.top() ||
            this.top() > obstacle.bottom() || 
            this.right() < obstacle.left() || 
            this.left() > obstacle.right()
        );
    }
    
    update() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    
    
}

