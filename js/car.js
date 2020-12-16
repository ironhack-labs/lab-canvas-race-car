class Car {
    constructor(ctx) {
        this.ctx = ctx;

        this.x = this.ctx.canvas.width / 2;
        this.y = this.ctx.canvas.height / 1.3;

        this.width = 45;
        this.height = 100;

        this.vx = 0;
        this.maxLeft = 60;
        this.maxRight = this.ctx.canvas.width - this.width - 55;

        this.img = new Image();
        this.img.src = 'images/car.png';
        this.img.isReady = false;
        this.img.onload = () => {
            this.img.isReady = true;
        }
    }

    isReady() {
        return this.img.isReady;
    }

    draw() {
        if (this.isReady()) {
            this.ctx.drawImage(
                this.img,
                this.x,
                this.y,
                this.width,
                this.height
            );
        }
    }

    move() {
        this.x += this.vx
        if (this.x <= 60) {
            this.x = this.maxLeft;
        } else if (this.x >= this.maxRight) {
            this.x = this.maxRight;
        }
    }

    collidesWith(element) {
        // Coche a la derecha de obstáculo
        if (this.x > element.x + element.width ) {
            console.log('Derecha!')
            console.log(this.y, this.x, element.y, element.x) // TEST
            
            return this.y <= element.y + element.height &&
                   this.x >= element.x + element.width;
        } 

        // Coche a la izquierza de obstáculo
        if (this.x + this.width < element.x) {
            console.log('Izquierda!')
            console.log(this.y, this.x, element.y, element.x) // TEST

            return this.y <= element.y + element.height &&
                   this.x + this.width > element.x;   
        }

        // if (element.x > (this.x + this.width) && (this.x + this.width) < (element.x + element.width)) {
        //     return this.y <= element.y + element.height
        // }

    // return this.y <= element.y + element.height && // colisión frontal - ok
    //        this.x -  > element.x + element.width ||
    //        this.x + this.width > element.x


    // this.x > element.x + element.width &&
    //            //this.x < element.x + element.width &&
    //           
    //     // return this.x + this.size < element.x // No hace nada con el operador a ambos lados
    //     // return this.y + this.size < element.y // No hace nada con el operador a ambos lados
    }

}