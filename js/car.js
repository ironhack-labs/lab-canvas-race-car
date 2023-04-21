class Car {
    constructor(){
        this.x = 500/2; //original x position
        this.y = 700-55; //original y position


        const car = new Image()
        car.addEventListener('load', ()=>{
            this.car = car;
            
        });

        car.src="./images/car.png";
    }




    moveLeft(){
        this.x -= 25;
    }

    moveRight(){
        this.x += 25;
    }

    draw(){
        ctx.drawImage(this.car, this.x, this.y, 50, 50);
    }

}

const car = new Car();