window.onload = () => {
    document
        .getElementById("start-button")
        .addEventListener("click", startGame);
};

// The Canvas
const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// The Road
class Road {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.img = new Image();
        this.img.src = "../images/road.png";
    }

    drawRoad() {
        ctx.drawImage(this.img, this.x, this.y);
    }
}

let road = new Road(0, 0);

// The Car

class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = new Image();
        this.img.src = "../images/car.png";
    }

    drawCar() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}

let car = new Car(50, 200, 75, 125);

class Obstacle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = Math.floor(Math.random()*100);
        this.height = Math.floor(Math.random()*50);
    }

    drawObstacle() {
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// Arrow Keys

document.onkeydown = function (e) {
    console.log("it moves", e);
    if (e.keyCode === 37) {
        car.x -= 20;
    }
    if (e.keyCode === 39) {
        car.x += 20;
    }
};

// Start Game
function startGame() {
    console.log("Game has started!");

    setInterval(() => {
        ctx.clearRect(0, 0, 500, 700);

        // Road Image
        road.drawRoad();

        // Car Image
        car.drawCar();
    }, 15);
}

// Code from the Course

intersect(
    { x: 10, y: 10, width: 100, height: 100 },
    { x: 50, y: 0, width: 200, height: 50 }
);

let intersect = (obj1, obj2) => {
    let obj1left = obj1.x;
    let obj1top = obj1.y;
    let obj1right = obj1.x + obj1.width;
    let obj1bottom = obj1.y + obj1.height;
    let obj2left = obj2.x;
    let obj2top = obj2.y;
    let obj2right = obj2.x + obj2.width;
    let obj2bottom = obj2.y + obj2.height;
    return !(
        obj1left > obj2right ||
        obj1top > obj2bottom ||
        obj1right < obj2left ||
        obj1bottom < obj2top
    );
};
