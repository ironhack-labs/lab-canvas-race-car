class Car {
    constructor(ctx) {
        this.ctx = ctx;

        this.x = 210;
        this.y = 500;
        this.width = 80;
        this.height = 135;
        this.vx = 0;

        this.img = new Image();
        this.img.src = this.randomCar();
        this.img.isReady = false
        this.img.onload = () => {
            this.img.isReady = true
        }
    }

    // Select random car color 
    randomCar() {
        const Cars = ['orange-car', 'red-car', 'white-car', 'blue-car'];
        let randCar = Cars[Math.floor(Math.random() * Cars.length)];
        return `images/${randCar}.png`;
    }

    // Check if img is Ready
    isReady() {
        return this.img.isReady
    }

    // Draw the car
    draw() {
        if(this.isReady()){
            this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }

    // Move the car
    move(){
        this.x += this.vx
        
        if(this.x <= this.ctx.canvas.width - this.ctx.canvas.width){
            this.x = this.ctx.canvas.width - this.ctx.canvas.width;
        }
        if(this.x >= this.ctx.canvas.width - this.width){
            this.x = this.ctx.canvas.width - this.width
        }
    }
}