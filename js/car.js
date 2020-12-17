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
        let frontalCoche = this.y;
        let ladoDerechoCoche = this.x + this.width;
        let ladoIzquierdoCoche = this.x
        let largoCoche = this.y + this.height;

        let ladoInferiorObs = element.y + element.height;
        let lateralDerechoObs = element.x + element.width;
        let lateralIzquierdoObs = element.x;
        let altoObstaculo = element.y;

        return frontalCoche <= ladoInferiorObs && // Frontal
               ladoDerechoCoche >= lateralIzquierdoObs && // Choque derecho coche
               ladoIzquierdoCoche <= lateralDerechoObs &&// Choque izquierdo coche
               altoObstaculo < largoCoche; // El obstáculo está por detrás del coche  
    }

}