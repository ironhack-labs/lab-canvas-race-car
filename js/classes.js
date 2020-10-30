class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    startGame() {
        let road = new Road();
        let car = new Car();
        this.ctx.drawImage(road.roadImage, 0, 0, this.canvas.width, this.canvas.height);
        this.ctx.drawImage(car.carImage, car.x, car.y, car.width, car.height);
    }
}


class Road {
    constructor() {
        this.x;
        this.y;
        this.roadImage = new Image();
        this.roadImage.src = "./images/road.png";
    }
}

class Car {
    constructor() {
        this.x = 350;
        this.y = 500;
        this.width = 50;
        this.height = 100;
        this.carImage = new Image();
        this.carImage.src = "./images/car.png";
    }
}
