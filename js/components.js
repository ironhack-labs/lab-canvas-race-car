const roadImg = new Image();
roadImg.src = "./images/road.png";
const carImg = new Image();
carImg.src = "./images/car.png";

class Canvas {
    constructor(ctx) {
        this.ctx = ctx;
    }

    drawRoad() {
        this.ctx.drawImage(roadImg, 0, 0, 500, 700);
    }

    drawCar(x, y, width, height) {
        this.ctx.clearRect(0, 0, 500, 700);
        this.drawRoad();
        this.ctx.drawImage(carImg, x, y, width, height);
    }
}

class Component {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    moveCar(dir) {
        switch (dir) {
            case "ArrowLeft":
                if (this.x <= 65.35) {
                    return;
                }
                this.x -= 5;
                break;
            case "ArrowRight":
                if (this.x >= 400.25) {
                    return;
                }
                this.x += 5;
        }
    }
}