class Car {
    constructor(ctx){
        this.ctx = ctx;
        this.img = new Image();
        this.img.src = 'images/car.png';
        this.img.isReady = false;
        this.img.onload = () => {
            this.img.isReady = true;
        }
        this.width = 50
        this.height = 100
        this.x = 225
        this.y = 550

        this.vx = 0
        this.speedX = 15
    }
    
    draw(){
        this.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        )
    }

    move(){
        this.x += this.vx
        
        if(this.x <= 0){
            this.x = 0
        }

        if (this.x + this.width >= this.ctx.canvas.width){
            this.x = this.ctx.canvas.width - this.width;
        }

    }

    onKeyDown(keyCode){
        if(keyCode === RIGHT_KEY){
            this.x += this.speedX
        }
        if(keyCode === LEFT_KEY){
            this.x -= this.speedX
        }
    }

    onKeyUp(keyCode){
        if( keyCode === RIGHT_KEY || keyCode === LEFT_KEY){
            this.vx = 0
        }
    }
}