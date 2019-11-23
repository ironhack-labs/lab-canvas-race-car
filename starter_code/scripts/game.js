class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.car = new Player(this, 200, 550, 100, 150);
        // this.fireball = new Component(this, 800, 200, 70, 70);
        this.background = undefined;
        this.score = 0;
        this.backgroundImg = new Image();
        this.x = undefined;
        this.y = undefined;
        this.width = 500;
        this.height = 650;
    }

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = 0;
        this.y = 0;
        this.start();
    }

    start() {
        this.drawBackground();
        this.drawMainCharacters();
        setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawMainCharacters();
            this.car.move();
            //     this.fireball.x -= 5;
            //     if (this.fireball.x <= -70) {
            //         this.fireball.x = 1000;
            //         this.fireball.y = Math.floor(Math.random() * 430); // 430 = heightOfCanvas(500) - heightOfFireball(70)
            //     }
            //     if (this.fireball.x === 0) this.score++;
        }, 1000 / 60);
    }

    drawBackground() {
        this.backgroundImg.src = "./images/road.png";
        this.ctx.drawImage(
            this.backgroundImg,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawMainCharacters() {
        this.car.drawComponent("./images/car.png");
    }
}