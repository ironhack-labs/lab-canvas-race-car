class Obstacle extends Component {
    constructor(game) {
        super(game);
        this.game = game;
        this.x = Math.floor(Math.random() * 440 + 30);
        this.y = 150;
        this.width = 100;
        this.height = 150;
        this.img = new Image();
    }

    draw() {
        this.img.src = "./images/redCar.png";
        this.game.ctx.drawImage(
            this.img,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    move() {
        if (Math.floor(Math.random() * 20) % 3 === 0) {
            this.y += 5;
        }
    }
}
