class Car {
    constructor(){
        this.x = 275;
        this.y = 650;
        this.width = 50;
        this.height = 100;
        this.img = new Image();// should define here instead od in start function other wise the car wont appear properly
        this.img.src = '../images/car.png';
    }

    Start(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }

    

    Move(key){
        ctx.clearRect(this.x, this.y, this.width, this.height);
        switch (key) {
            case 'ArrowLeft': // left arrow
                if(this.x >= 100){
                    this.x -= 10;
                } 
                break;
            case 'ArrowRight': // right arrow
                if(this.x <= 470){
                this.x += 10;
                }
                break;
        }
        this.Start();
    }
}

