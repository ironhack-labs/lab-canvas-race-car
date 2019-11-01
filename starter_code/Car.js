class Car {

    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.position = {
            x: 225,
            y: 500,
        };
        this.width;
        this.height;
    };

    drawCar() {
        const IMG_SRC = './images/car.png';
        const car = new Image();
        car.src = IMG_SRC;
        const size = 0.3;
        this.width = car.width * size;
        this.height = car.height * size;
        this.context.drawImage(car, this.position.x, this.position.y, this.width, this.height);
    }

    moveRight() {
        if (this.position.x === 375) {
            this.position.x = 375;
        } else {
            this.position.x += 50;
        }
    }

    moveLeft() {
        if (this.position.x === 75) {
            this.position.x === 75
        }
        else {
            this.position.x -= 50;

        }
    }

};






