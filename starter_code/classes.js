class Highway {
    constructor(){
        this.x=0;
        this.y=0;
        this.width  = canvas.width;
        this.height = canvas.height;
    }
    draw(){
        ctx.fillStyle='green';
        ctx.fillRect(0, 0, 50, this.height);
        ctx.fillRect(450,0,500,this.height);
        ctx.fillStyle='grey';
        ctx.fillRect(50,0,400,this.height);
        ctx.fillStyle='white';
        let shift = 40
        for(let i = 0; i <= 20; i++){
            ctx.fillRect(245,30*i + i*shift, 7,(this.height)/20);
        }
        ctx.fillRect(60, 0, 10, this.height);
        ctx.fillRect(430, 0, 10, this.height);
    }
}

class Car {
    constructor(){

        this.hp=1;
        this.x=0;
        this.y=0;
        this.width  = 33;
        this.height = 80;
        this.vx = 0;
        this.img = new Image()
        this.img.src = "images/car.png";

    }
    draw(){
        ctx.drawImage(this.img, this.x, this.y + canvas.height - this.height, this.width, this.height)
    }
    moveLeft(){
            this.vx -= 2; 
    }

    moveRight(){
        this.vx += 2; 
    }
	isTouching(obstacle) {
		return (
            (obstacle.x < this.x && this.x < obstacle.x + obstacle.width) && 
            obstacle.y < (canvas.height + 3*this.y) && 
            (canvas.height + 3*this.y) < obstacle.y + obstacle.height 
		);
	}
}

class RandomBlocks {
    constructor(){
        this.y = 0;
		this.width = Math.floor(Math.random() * 300);
		this.x = Math.floor(Math.random() * (400 - this.width)) + 50;
		this.height = 15;
    }

    draw(){
        this.y++;
        ctx.fillStyle='red';
        ctx.fillRect(this.x,this.y, this.width,this.height)
    }
}

