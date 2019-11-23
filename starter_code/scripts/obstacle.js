class Obstacle extends Component {
    constructor(game) {
        this.game = game;
        this.x = Math.floor((Math.random() * 440) + 30);
        this.y = -150;
        this.width = 100;
        this.height = 150;
        this.img = new Image();
        this.source = "./images/car.png"; 
    }

    draw() {
        let daCtx = this.game.ctx;
        this.img.src = imgSource;
        daCtx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }


    move() {
        Math.floor(Math.random() * 20)
        this.y += 20;
    }
}
