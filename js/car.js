class Car {
    constructor(canvas) {
        this.img = new Image();
        this.url = "/images/car.png";
        this.img.src = this.url;
        this.scale = Math.PI * 0.1;
        this.carWidth = 200 * this.scale;
        this.carHeight = 499 * this.scale;
        this.canvas = canvas;
        this.ctx = document.querySelector("canvas").getContext("2d");
        this.direction = 0;
        this.speed = 9;
        this.posX = canvas.clientWidth * 0.5;
        this.poxY = canvas.clientHeight * 0.8;
        this.health = 3;
    }

    drawCar() {
        switch (this.health) {
            case 3:
                this.url = "/images/car.png";
        this.img.src = this.url;
                break;
            case 2:
                this.url = "/images/car-damaged1.png";
        this.img.src = this.url;
                break;
            case 1:
                this.url = "/images/car-damaged2.png";
        this.img.src = this.url;
                break;
        }
        this.ctx.drawImage(
            this.img,
            this.posX - this.carWidth / 2,
            this.poxY - this.carHeight / 2,
            this.carWidth,
            this.carHeight
        );
    }
    setDirection(direction) {
        this.direction = direction;
    }

    updateCarPos() {
        if (this.checkBoundaries()) this.posX += this.direction * this.speed;
    }

    checkBoundaries() {
        if (this.posX < canvas.clientWidth * 0.1) this.posX += 1 * this.speed;
        else if (this.posX > canvas.clientWidth * 0.9)
            this.posX += -1 * this.speed;
        else return true;
    }

    checkCrash(obstacleCar) {
        let isSamePosX =
            obstacleCar.posX < this.posX + this.carWidth / 2 &&
            obstacleCar.posX > this.posX - this.carWidth / 2;
        let isSamePosY = obstacleCar.posY > this.poxY - this.carHeight * 0.2;

        if (isSamePosY && isSamePosX) {
            this.health--;
            return true;
        }
    }
}
