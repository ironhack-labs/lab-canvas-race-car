const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let frames = 0;
let timerId;

class Vehicle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 160;
        this.img = new Image();
        this.img.src = 'images/car.png';
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
}

class Background {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.img = new Image();
        this.img.src = 'images/road.png';
    }

    draw() {
        this.y -= 3;

        if (this.y < -canvas.height) this.y = 0;

        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.img, this.x, this.y + canvas.height, this.width, this.height);
    }
}

// New instances of classes
const road = new Background();
const car = new Vehicle((canvas.width / 2) - 40, canvas.height - 160 - 40);

// Update function
function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    road.draw()
    car.draw()

    timerId = requestAnimationFrame(update);
}

// Event listener
window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };

    function startGame() {
        road.draw();
        requestAnimationFrame(update);
    }
};