class Car {
    constructor() {
        this.horizontalPositionOfCar = 175;
        this.widthOfCar = 50;
    }

    drawCar() {
        const raceCarIMG = new Image();
        raceCarIMG.src = "./images/car.png";
        context.drawImage(raceCarIMG, this.horizontalPositionOfCar, 475, this.widthOfCar, 100);
    };

    moveLeft() {
        if (this.horizontalPositionOfCar >= 60) {
            this.horizontalPositionOfCar = this.horizontalPositionOfCar - 10;
            drawAll();
        }
    };

    moveRight() {
        if (this.horizontalPositionOfCar <= 340 - this.widthOfCar) {
            this.horizontalPositionOfCar = this.horizontalPositionOfCar + 10;
            drawAll();
        };
    };
}

window.addEventListener("keydown", event => {
    switch (event.keyCode) {
        case 37:
            car.moveLeft()
            console.log("car moved left")
            break;
        case 39:
            car.moveRight()
            console.log("car moved right")
            break;
    }
})

console.log("I am connected")