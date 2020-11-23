class Car {
    constructor(x, y, context) {
        this.x = x;
        this.y = y;
        this.width = 35;
        this.height = 80;
        this.image = new Image();
        this.image.src = './images/car.png';
        this.context = context;
    }

    draw() {
        this.context.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
} 